export function ProductLoadingSkeleton() {
  return (
    <div className="p-6 max-w-md mx-auto bg-white animate-pulse">
      <div className="h-6 bg-orange-300 mb-4 rounded"></div>
      <div className="h-4 bg-orange-300 mb-2 rounded"></div>
      <div className="h-5 bg-orange-300 rounded w-1/2"></div>
    </div>
  );
}
