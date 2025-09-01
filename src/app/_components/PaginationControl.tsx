'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationControlProps {
  currentPage: number;
  pageSize: number;
  total: number;
  maxVisiblePages?: number;
  onPageChange: (page: number) => void;
  loading?: boolean;
}

const PaginationControl = ({
  currentPage,
  pageSize,
  total,
  onPageChange,
  maxVisiblePages = 5,
  loading = false,
}: PaginationControlProps) => {
  const totalPages = Math.ceil(total / pageSize);

  // Calculate which page numbers to show
  const getVisiblePages = () => {
    const halfVisible = Math.floor(maxVisiblePages / 2);

    let startPage = Math.max(1, currentPage - halfVisible);
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    // Adjust start if we're near the end
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  };

  const handlePageChange = (page: number) => {
    if (page !== currentPage && page >= 1 && page <= totalPages && !loading) {
      onPageChange(page);
    }
  };

  const visiblePages = getVisiblePages();
  const showFirstPage = visiblePages[0] > 1;
  const showLastPage = visiblePages[visiblePages.length - 1] < totalPages;
  const showFirstEllipsis = visiblePages[0] > 2;
  const showLastEllipsis =
    visiblePages[visiblePages.length - 1] < totalPages - 1;

  if (totalPages <= 1) return null;

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center gap-2 py-4">
        {/* Previous Button */}
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage <= 1 || loading}
          className={`
          flex items-center gap-1 px-3 py-2 rounded-lg border transition-colors
          ${
            currentPage <= 1 || loading
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed border-gray-200'
              : 'bg-white text-gray-700 hover:bg-gray-50 border-gray-300 hover:border-gray-400'
          }
        `}
        >
          <ChevronLeft size={16} />
          <span className="hidden sm:inline">Previous</span>
        </button>

        {/* First Page */}
        {showFirstPage && (
          <>
            <button
              onClick={() => handlePageChange(1)}
              disabled={loading}
              className={`
              px-3 py-2 rounded-lg border transition-colors min-w-[40px]
              ${
                loading
                  ? 'cursor-not-allowed opacity-50'
                  : currentPage === 1
                    ? 'bg-primaryOrange text-white border-primaryOrange'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border-gray-300 hover:border-gray-400'
              }
            `}
            >
              1
            </button>
            {showFirstEllipsis && (
              <span className="px-2 text-gray-500">...</span>
            )}
          </>
        )}

        {/* Visible Page Numbers */}
        {visiblePages.map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            disabled={loading}
            className={`
            px-3 py-2 rounded-lg border transition-colors min-w-[40px]
            ${
              loading
                ? 'cursor-not-allowed opacity-50'
                : page === currentPage
                  ? 'bg-primaryOrange text-white border-primaryOrange'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border-gray-300 hover:border-gray-400'
            }
          `}
          >
            {page}
          </button>
        ))}

        {/* Last Page */}
        {showLastPage && (
          <>
            {showLastEllipsis && (
              <span className="px-2 text-gray-500">...</span>
            )}
            <button
              onClick={() => handlePageChange(totalPages)}
              disabled={loading}
              className={`
              px-3 py-2 rounded-lg border transition-colors min-w-[40px]
              ${
                loading
                  ? 'cursor-not-allowed opacity-50'
                  : currentPage === totalPages
                    ? 'bg-primaryOrange text-white border-primaryOrange'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border-gray-300 hover:border-gray-400'
              }
            `}
            >
              {totalPages}
            </button>
          </>
        )}

        {/* Next Button */}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage >= totalPages || loading}
          className={`
          flex items-center gap-1 px-3 py-2 rounded-lg border transition-colors
          ${
            currentPage >= totalPages || loading
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed border-gray-200'
              : 'bg-white text-gray-700 hover:bg-gray-50 border-gray-300 hover:border-gray-400'
          }
        `}
        >
          <span className="hidden sm:inline">Next</span>
          <ChevronRight size={16} />
        </button>
      </div>
      {/* Page Info */}
      <div className="ml-4 text-sm text-gray-600 hidden md:block">
        {(() => {
          const startItem = (currentPage - 1) * pageSize + 1;
          const endItem = Math.min(currentPage * pageSize, total);
          return `Showing ${startItem} to ${endItem} of ${total} results`;
        })()}
      </div>
    </div>
  );
};

export default PaginationControl;
