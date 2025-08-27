'use client';

import { useApi } from '@/app/hooks/useApi';
import Details from './details';

export function ProductDetailsClient({ id }: { id: number }) {
  const {
    data: product,
    isLoading,
    isError,
    error,
  } = useApi<ProductDetails & { id: number; seller: Seller }>(
    `/api/products/${id}`
  );

  return (
    <Details
      type="sale"
      productId={id}
      product={product}
      isLoading={isLoading}
      isError={isError}
      error={error}
    />
  );
}
