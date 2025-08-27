'use client';
import { useState } from 'react';
import { ProductCard } from './cards/product';
import PaginationControl from '../PaginationControl';
import { useApiCache, usePaginatedApi } from '@/app/hooks/useApi';
import { FiRefreshCcw } from 'react-icons/fi';
import { ProductCardSkeleton } from '../common/skeleton';
import { SpinnerWithText } from '../common/SpinnerWithText';

export default function MoreForYou() {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  // Using paginated API hook
  const {
    data: productsResponse,
    isLoading,
    isError,
    error,
    isFetching,
    refetch,
  } = usePaginatedApi<
    ProductDetails & {
      id: number;
      belongs_to_admin: boolean;
      seller: { name: string };
    }
  >(
    '/api/products',
    currentPage,
    pageSize,
    {}, // extra params if needed
    {
      staleTime: 5 * 60 * 1000, // 5 minutes
      prefetchNext: true,
      prefetchPrev: true,
    }
  );

  // Cache management utilities
  const { invalidatePattern } = useApiCache();

  const getImageUrl = (product: ProductDetails) => {
    if (product.media && product.media.length > 0) {
      return product.media[0];
    }
    switch (product.type) {
      case 'CAR':
        return '/home/carshop.png';
      case 'LAND':
        return '/no_images/no_land.jpg';
      case 'HOUSE':
        return '/no_images/no_house.png';
      default:
        return '/no_images/default.png';
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleRefresh = () => {
    invalidatePattern('/api/products'); // Invalidate all product queries
  };

  // Error state
  if (isError) {
    return (
      <section id="more-for-you" className="mt-20">
        <div className="flex items-center gap-3 px-4 sm:px-8 lg:px-[8%]">
          <h1 className="text-[20px] md:text-[32px] w-[200px] md:w-[20%] font-semibold text-[#040421]">
            More For You
          </h1>
          <div className="w-[60%] h-[2px] bg-[#DED9DD]" />
        </div>
        <div className="flex flex-col items-center justify-center py-12">
          <div className="text-red-500 text-center mb-4">
            <p className="text-lg font-medium">Failed to load products</p>
            <p className="text-sm text-gray-600 mt-1">
              {error instanceof Error ? error.message : 'Something went wrong'}
            </p>
          </div>
          <button
            onClick={() => refetch()}
            className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
          >
            Try Again
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="more-for-you" className="mt-20">
      <div className="flex items-center gap-3 px-4 sm:px-8 lg:px-[5%]">
        <h1 className="text-[20px] md:text-[32px] w-[200px] md:w-[20%] font-semibold text-[#040421]">
          More For You
        </h1>
        <div className="w-[80%] h-[2px] bg-[#DED9DD]" />

        {/* Loading indicator and refresh button */}
        <div className="flex items-center">
          {isFetching && !isLoading ? (
            <SpinnerWithText text="Updating..." />
          ) : (
            <button
              onClick={handleRefresh}
              className="p-2 text-gray-500 flex items-center gap-2 hover:text-orange-600 transition-colors"
              title="Refresh products"
            >
              Refresh <FiRefreshCcw size={25} />
            </button>
          )}
        </div>
      </div>

      <div className="grid md:px-[5%] px-2 grid-cols-2 sm:grid-cols-4 gap-8 mt-8">
        {isLoading
          ? // Show skeleton loading state
            Array.from({ length: 8 }).map((_, index) => (
              <ProductCardSkeleton key={index} />
            ))
          : // Show actual products
            productsResponse?.data?.map((product) => (
              <ProductCard
                key={product.id}
                isAdminProduct={product.belongs_to_admin}
                seller={product.seller.name}
                productType="sale"
                imageUrl={getImageUrl(product)}
                title={product.name}
                product={product}
              />
            ))}
      </div>

      <div className="flex justify-center mt-5">
        <PaginationControl
          currentPage={currentPage}
          pageSize={pageSize}
          total={productsResponse?.total || 0}
          onPageChange={handlePageChange}
          loading={isFetching}
        />
      </div>
    </section>
  );
}
