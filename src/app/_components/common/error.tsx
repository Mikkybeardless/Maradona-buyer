interface ErrorComponentProps {
  error: unknown;
  message: string;
  refetchFn?: () => void;
}

export const ErrorComponent = ({
  error,
  message,
  refetchFn = () => {},
}: ErrorComponentProps) => {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="text-red-500 text-center mb-4">
        <p className="text-lg font-medium">{message}</p>
        <p className="text-sm text-gray-600 mt-1">
          {error instanceof Error ? error.message : 'Something went wrong'}
        </p>
      </div>

      {refetchFn && (
        <button
          onClick={refetchFn}
          className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
        >
          Try Again
        </button>
      )}
    </div>
  );
};
