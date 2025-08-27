'use client';

import { useApi } from '@/app/hooks/useApi';
import Details from './details';

export function AuctionDetailsClient({ id }: { id: number }) {
  const {
    data: product,
    isLoading,
    error,
  } = useApi<ApiAuction>(`/api/auctions/${id}`);

  return (
    <Details
      productId={id}
      product={product}
      isLoading={isLoading}
      error={error}
    />
  );
}
