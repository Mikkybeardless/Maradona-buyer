'use client';
import { useState } from 'react';
import PaginationControl from '../PaginationControl';
import { useApiCache, usePaginatedApi } from '@/app/hooks/useApi';
import { ProductCardSkeleton } from '../common/skeleton';
import { FiRefreshCcw } from 'react-icons/fi';
import { SpinnerWithText } from '../common/SpinnerWithText';
import { AuctionCard } from './cards/auction';
import { ErrorComponent } from '../common/error';

export default function AuctionProduct() {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
  // Use the reusable paginated API hook
  const {
    data: auctionsResponse,
    isLoading,
    isError,
    error,
    isFetching,
    refetch,
  } = usePaginatedApi<ApiAuction>(
    '/api/auctions',
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

  const handleRefresh = () => {
    invalidatePattern('/api/auctions'); // Invalidate all product queries
  };
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const getImageUrl = (product: Auction) => {
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
        <div className="flex items-center justify-between gap-6 px-4 sm:px-8 lg:px-[5%]">
          <h1 className="text-[20px] md:text-[32px] w-[300px] md:w-[40%] font-semibold text-[#040421]">
            Auction Products
          </h1>
          <div className="w-[60%] h-[2px] bg-[#DED9DD]" />
        </div>
        <ErrorComponent
          error={error}
          message="Failed to load auctions"
          refetchFn={refetch}
        />
      </section>
    );
  }

  return (
    <section id="auction-products" className="mt-20 ">
      <div className="flex items-center gap-3 px-4 sm:px-8 lg:px-[5%]">
        <h1 className="text-[20px] md:text-[32px] w-[300px] md:w-[30%] font-semibold  text-[#040421]">
          Auction Products
        </h1>

        <div className="w-[60%] h-[2px]  bg-[#DED9DD]" />
        {/* Loading indicator and refresh button */}
        <div className="flex items-center">
          {isFetching && !isLoading ? (
            <SpinnerWithText text="Updating..." />
          ) : (
            <button
              onClick={handleRefresh}
              className="p-2 text-gray-500 flex items-center gap-2 hover:text-orange-600 transition-colors"
              title="Refresh auctions"
            >
              Refresh <FiRefreshCcw size={25} />
            </button>
          )}
        </div>
      </div>
      <div className="grid md:px-[5%] px-2 grid-cols-2 sm:grid-cols-4 gap-8 mt-8">
        {isLoading ? (
          // Show skeleton loading state
          Array.from({ length: 8 }).map((_, index) => (
            <ProductCardSkeleton key={index} />
          ))
        ) : auctionsResponse?.data.length === 0 ? (
          <p>No running auction product</p>
        ) : (
          auctionsResponse?.data?.map((auction) => (
            <AuctionCard
              key={auction.id}
              seller={'Unknown Seller'}
              imageUrl={getImageUrl(auction)}
              isAdminauction={false}
              title={auction.name}
              auction={auction}
            />
          ))
        )}
      </div>
      <div className="flex justify-center mt-5">
        <PaginationControl
          currentPage={currentPage}
          pageSize={pageSize}
          total={auctionsResponse?.total || 0}
          onPageChange={handlePageChange}
          loading={isFetching}
        />
      </div>
    </section>
  );
}
