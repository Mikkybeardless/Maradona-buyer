'use client';

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export function useSearchState() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const isSearchPage = pathname === '/search';
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get('query') || ''
  );

  // Update search query when URL changes
  useEffect(() => {
    const urlQuery = searchParams.get('query') || '';
    if (urlQuery !== searchQuery) {
      setSearchQuery(urlQuery);
    }
  }, [searchParams]);

  const performSearch = (query: string) => {
    if (!query.trim()) return;

    if (!isSearchPage) {
      // Navigate to search page
      router.push(`/search?query=${encodeURIComponent(query)}`);
    } else {
      // Update URL on search page and trigger re-render
      const newUrl = new URL(window.location.href);
      newUrl.searchParams.set('query', query);
      router.replace(newUrl.pathname + newUrl.search);
    }
  };

  return {
    searchQuery,
    setSearchQuery,
    performSearch,
  };
}
