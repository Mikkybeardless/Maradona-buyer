// hooks/useApi.ts
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import { useEffect } from 'react';
import { fetchFn } from '@/app/api/fetchFn';
import { buildCleanParams } from '../Utils/util';

// Generic types
export interface PaginatedResponse<T> {
  data: T[];
  current_page: number;
  per_page: number;
  total: number;
  last_page: number;
}

export interface ApiResponse<T> {
  data: T | PaginatedResponse<T>;
  message?: string;
  status?: number;
}

export interface UseApiOptions {
  staleTime?: number;
  cacheTime?: number; // gcTime in v5
  refetchOnWindowFocus?: boolean;
  retry?: number;
  enabled?: boolean;
  refetchInterval?: number;
}

export interface UsePaginatedApiOptions extends UseApiOptions {
  prefetchNext?: boolean;
  prefetchPrev?: boolean;
}

// Generic query key generator
export const createQueryKey = (
  endpoint: string,
  params?: Record<string, string | number>
) => {
  const baseKey: (string | Record<string, string | number>)[] = [endpoint];
  if (params) {
    baseKey.push(params);
  }
  return baseKey;
};

// 1. Basic API Hook (for single resource)
export function useApi<T>(
  endpoint: string,
  params?: Record<string, string>,
  options: UseApiOptions = {}
) {
  const queryKey = createQueryKey(endpoint, params);

  return useQuery({
    queryKey,
    queryFn: async (): Promise<T> => {
      const cleanParams = buildCleanParams(params || {});
      const url = params ? `${endpoint}?${cleanParams.toString()}` : endpoint;
      const response = await fetchFn(url);
      return response.data.data;
    },
    staleTime: options.staleTime ?? 5 * 60 * 1000, // 5 minutes
    gcTime: options.cacheTime ?? 10 * 60 * 1000, // 10 minutes
    refetchOnWindowFocus: options.refetchOnWindowFocus ?? false,
    retry: options.retry ?? 2,
    enabled: options.enabled ?? true,
    refetchInterval: options.refetchInterval,
  });
}

// 2. Paginated API Hook (for lists with pagination)
export function usePaginatedApi<T>(
  endpoint: string,
  page: number = 1,
  per_page: number = 10,
  extraParams?: Record<string, string | number>,
  options: UsePaginatedApiOptions = {}
) {
  const queryClient = useQueryClient();

  const params = {
    page: String(page),
    per_page: String(per_page),
    ...extraParams,
  };

  const queryKey = createQueryKey(endpoint, params);
  const cleanParams = buildCleanParams(params);
  const query = useQuery({
    queryKey,
    queryFn: async (): Promise<PaginatedResponse<T>> => {
      const url = `${endpoint}?${cleanParams.toString()}`;
      const response = await fetchFn(url);
      return response.data.data;
    },
    staleTime: options.staleTime ?? 5 * 60 * 1000,
    gcTime: options.cacheTime ?? 10 * 60 * 1000,
    refetchOnWindowFocus: options.refetchOnWindowFocus ?? false,
    retry: options.retry ?? 2,
    enabled: options.enabled ?? true,
    refetchInterval: options.refetchInterval,
  });

  // Prefetch next page
  useEffect(() => {
    if (
      options.prefetchNext !== false &&
      query.data &&
      query.data.current_page < query.data.last_page
    ) {
      const nextPageParams = { ...params, page: String(page + 1) };
      const cleanNextPageParams = buildCleanParams(nextPageParams);
      queryClient.prefetchQuery({
        queryKey: createQueryKey(endpoint, nextPageParams),
        queryFn: async () => {
          const url = `${endpoint}?${cleanNextPageParams.toString()}`;
          const response = await fetchFn(url);
          return response.data.data;
        },
        staleTime: options.staleTime ?? 5 * 60 * 1000,
      });
    }
  }, [query.data, queryClient, endpoint, params, options.prefetchNext, page]);

  // Prefetch previous page
  useEffect(() => {
    if (options.prefetchPrev !== false && query.data && page > 1) {
      const prevPageParams = { ...params, page: String(page - 1) };
      const cleanPrevPageParams = buildCleanParams(prevPageParams);
      queryClient.prefetchQuery({
        queryKey: createQueryKey(endpoint, prevPageParams),
        queryFn: async () => {
          const url = `${endpoint}?${cleanPrevPageParams.toString()}`;
          const response = await fetchFn(url);
          return response.data.data;
        },
        staleTime: options.staleTime ?? 5 * 60 * 1000,
      });
    }
  }, [
    query.data,
    queryClient,
    endpoint,
    params,
    options.prefetchNext,
    page,
    options.staleTime,
  ]);

  return query;
}

// 3. Mutation Hook (for POST, PUT, DELETE operations)
export function useApiMutation<TData, TVariables = void>(
  endpoint: string,
  method: 'POST' | 'PUT' | 'PATCH' | 'DELETE' = 'POST',
  contentType: 'application/json' | 'multipart/form-data' = 'application/json',
  options?: {
    onSuccess?: (data: TData, variables: TVariables) => void;
    onError?: (error: Error, variables: TVariables) => void;
    invalidateQueries?: string[]; // Query keys to invalidate after mutation
  }
) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (variables: TVariables): Promise<TData> => {
      const response = await fetch(endpoint, {
        method,
        body: variables ? JSON.stringify(variables) : undefined,
        headers: {
          'Content-Type': contentType,
        },
      });
      const data = await response.json();
      return data;
    },
    onSuccess: (data, variables) => {
      // Invalidate specified queries
      if (options?.invalidateQueries) {
        options.invalidateQueries.forEach((queryKey) => {
          queryClient.invalidateQueries({ queryKey: [queryKey] });
        });
      }
      options?.onSuccess?.(data, variables);
    },
    onError: options?.onError,
  });
}

// 4. Cache Management Hook
export function useApiCache() {
  const queryClient = useQueryClient();

  return {
    // Invalidate specific endpoint
    invalidate: (
      endpoint: string,
      params?: Record<string, string | number>
    ) => {
      const queryKey = createQueryKey(endpoint, params);
      queryClient.invalidateQueries({ queryKey });
    },

    // Invalidate all queries matching a pattern
    invalidatePattern: (pattern: string) => {
      queryClient.invalidateQueries({
        predicate: (query) => {
          return (
            query.queryKey[0] === pattern ||
            (typeof query.queryKey[0] === 'string' &&
              query.queryKey[0].includes(pattern))
          );
        },
      });
    },

    // Set cache data manually
    setCache: <T>(
      endpoint: string,
      params: Record<string, string | number> | undefined,
      data: T
    ) => {
      const queryKey = createQueryKey(endpoint, params);
      queryClient.setQueryData(queryKey, data);
    },

    // Get cache data
    getCache: <T>(
      endpoint: string,
      params?: Record<string, string | number>
    ): T | undefined => {
      const queryKey = createQueryKey(endpoint, params);
      return queryClient.getQueryData<T>(queryKey);
    },

    // Remove cache
    removeCache: (endpoint: string, params?: Record<string, string>) => {
      const queryKey = createQueryKey(endpoint, params);
      queryClient.removeQueries({ queryKey });
    },

    // Clear all cache
    clearAll: () => {
      queryClient.clear();
    },
  };
}

// 5. Infinite Query Hook (for infinite scrolling)
// export function useInfiniteApi<T>(
//   endpoint: string,
//   pageSize: number = 10,
//   extraParams?: Record<string, string | number>,
//   options: UseApiOptions = {}
// ) {
//    const { useInfiniteQuery } = require('@tanstack/react-query');

//   return useInfiniteQuery({
//     queryKey: createQueryKey(endpoint, { pageSize, ...extraParams }),
//     queryFn: async ({ pageParam = 1 }): Promise<PaginatedResponse<T>> => {
//       const params = {
//         page: String(pageParam),
//         pageSize: String(pageSize),
//         ...Object.entries(extraParams || {}).reduce(
//           (acc, [key, value]) => {
//             acc[key] = String(value);
//             return acc;
//           },
//           {} as Record<string, string>
//         ),
//       };
//       const cleanParams = buildCleanParams(params);

//       const response = await fetchFn(`${endpoint}?${cleanParams.toString()}`);
//       return response.data.data;
//     },
//     getNextPageParam: (lastPage: PaginatedResponse<T>) => {
//       return lastPage.current_page < lastPage.last_page
//         ? lastPage.current_page + 1
//         : undefined;
//     },
//     staleTime: options.staleTime ?? 5 * 60 * 1000,
//     gcTime: options.cacheTime ?? 10 * 60 * 1000,
//     refetchOnWindowFocus: options.refetchOnWindowFocus ?? false,
//     retry: options.retry ?? 2,
//     enabled: options.enabled ?? true,
//   });
// }
