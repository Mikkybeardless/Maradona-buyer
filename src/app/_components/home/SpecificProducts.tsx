import { useState } from 'react';
import { ProductCard } from './cards/product';
import { usePaginatedApi } from '@/app/hooks/useApi';
import { ProductCardSkeleton } from '../common/skeleton';
import PaginationControl from '../PaginationControl';

interface SpecificProductsProp {
  homeState: HomeState;
}

const SpecificProducts = ({ homeState }: SpecificProductsProp) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 20;
  const {
    data: products,
    isLoading,
    error,
    isFetching,
    isError,
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
    {
      type: homeState,
    },
    {
      staleTime: 5 * 60 * 1000, // 5 minutes
      prefetchNext: true,
      prefetchPrev: true,
    }
  );
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const getImageUrl = (product: ProductDetails) => {
    if (product.media.length > 0) {
      return product.media[0];
    }
    switch (product.type) {
      case 'CAR':
        return '/home/carshop.png';
      case 'LAND':
        return '/no_images/no_land.jpg';
      case 'HOUSE':
        return '/no_images/no_house.png';
    }
  };

  // Error state
  if (isError) {
    return (
      <section id="auction-products" className="mt-20">
        <div className="flex items-center gap-3 px-4 sm:px-8 lg:px-[8%]">
          <h1 className="text-[20px] md:text-[32px] w-[200px] md:w-[20%] font-semibold text-[#040421]">
            {homeState}s
          </h1>
          {/* <div className="w-[60%] h-[2px] bg-[#DED9DD]" /> */}
        </div>
        <div className="flex flex-col items-center justify-center py-12">
          <div className="text-red-500 text-center mb-4">
            <p className="text-lg font-medium">Failed to load auctions</p>
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
    <section>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 px-[5%]">
        {isLoading
          ? Array.from({ length: 8 }).map((_, index) => (
              <ProductCardSkeleton key={index} />
            ))
          : products?.data.map((product) => (
              <ProductCard
                key={product.id}
                imageUrl={getImageUrl(product)}
                title={product.name}
                product={product}
                seller={product.seller.name}
                isAdminProduct={product.belongs_to_admin}
              />
            ))}
      </div>
      <div className="flex justify-center mt-5">
        <PaginationControl
          currentPage={currentPage}
          pageSize={pageSize}
          total={products?.total || 0}
          onPageChange={handlePageChange}
          loading={isFetching}
        />
      </div>
    </section>
  );
};

export default SpecificProducts;
