import Link from 'next/link';

interface NoItemProps {
  text?: string;
  route?: string;
  routeText?: string;
}
export const NoItem = ({
  text = 'You have no items',
  route = '/',
  routeText = 'Continue Shopping',
}: NoItemProps) => {
  return (
    <div className=" flex items-center justify-center min-h-[400px] bg-[#F0F0F0] p-5 ">
      <div className="flex flex-col items-center gap-5">
        <h1 className="text-xl font-semibold">{text}</h1>
        <Link
          href={route}
          className="bg-primaryOrange text-white cursor-pointer px-4 py-2 rounded-lg"
        >
          {routeText}
        </Link>
      </div>
    </div>
  );
};
