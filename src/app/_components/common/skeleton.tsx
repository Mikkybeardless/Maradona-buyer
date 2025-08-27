export function LoadingSkeleton() {
  return (
    <div className="p-6 max-w-md mx-auto bg-gray-100 animate-pulse">
      <div className="h-6 bg-gray-300 mb-4 rounded"></div>
      <div className="h-4 bg-gray-300 mb-2 rounded"></div>
      <div className="h-5 bg-gray-300 rounded w-1/2"></div>
    </div>
  );
}

export const ProductCardSkeleton = () => (
  <div className="animate-pulse">
    <div className="bg-gray-200 rounded-lg h-48 mb-3"></div>
    <div className="space-y-2">
      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
      <div className="h-3 bg-gray-200 rounded w-1/2"></div>
    </div>
  </div>
);
