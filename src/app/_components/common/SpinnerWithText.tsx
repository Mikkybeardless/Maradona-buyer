interface SpinnerWithTextProps {
  text: string;
  color?: string; // Optional prop for custom color
}

export const SpinnerWithText = ({ text, color }: SpinnerWithTextProps) => {
  return (
    <div className={`flex items-center ${color || 'text-orange-500'}`}>
      <div
        className={`animate-spin rounded-full h-4 w-4 border-b-2 ${color || 'border-orange-500'} mr-2`}
      ></div>
      {text}
    </div>
  );
};
