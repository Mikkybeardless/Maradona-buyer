'use client';

import { useApi } from '@/app/hooks/useApi';
import Details from './details';

interface ResponseData {
  data: ApiProductDetails & { id: number; seller: Seller };
  isPromoted: boolean;
}
export function ProductDetailsClient({ id }: { id: number }) {
  const {
    data: data,
    isLoading,
    error,
  } = useApi<ResponseData>(`/api/products/${id}`);

  return (
    <Details
      productId={id}
      product={data?.data}
      isLoading={isLoading}
      error={error}
    />
  );
}
