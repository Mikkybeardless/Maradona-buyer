import Image from 'next/image';

import { GoDotFill } from 'react-icons/go';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import Link from 'next/link';

import { AuctionTimer } from '../../cards/auctionTimer';

interface AuctionCardProps {
  auction: ApiAuction;
  imageUrl: string;
  isAuction?: boolean;
  title?: string;
  seller?: string;
  isAdminauction: boolean;
}
export const AuctionCard = ({
  auction,
  imageUrl,
  title = 'Toyota Camry 2017',
  seller,
  isAdminauction,
}: AuctionCardProps) => {
  //   const [isFavorite, setIsFavorite] = useState(false);

  //   const handleToggleFavorite = () => {
  //     setIsFavorite(!isFavorite);
  //   };
  return (
    <Link href={`/auction/${auction?.id || 1}`}>
      <div className="w-full flex flex-col ">
        <div className="bg-white flex flex-col w-full rounded-md  mb-4">
          {/* img */}
          <div className="w-full relative">
            <Image
              src={`${imageUrl}`}
              alt={title}
              width={300}
              height={200}
              className="w-full h-48 object-cover rounded-2xl"
            />
            {/* Heart Icon (Fixed Position) */}
            {/* <button
              onClick={handleToggleFavorite}
              className={`absolute z-20 md:top-7 xs:top-2 right-5 bg-white rounded-full h-7 w-7 flex items-center justify-center`}
            >
              {isFavorite ? (
                <GoHeartFill className={`text-primaryOrange`} size={24} />
              ) : (
                <GoHeart size={24} />
              )}
            </button> */}
          </div>
        </div>

        <div className="w-full space-y-2">
          <p className="text-xs">
            {isAdminauction
              ? 'Listed by Marathona real estate solutions'
              : `Listed by ${seller}`}
          </p>
          <h3 className="text-darkBlue font-bold text-sm md:text-2xl">
            {title}
          </h3>

          {auction.data?.length !== 0 && (
            <div className="flex md:flex-row flex-col gap-1 md:items-center  font-normal text-sm text-[#454545] mb-[15px]">
              {auction.data?.slice(0, 3).map((item, index) => (
                <p
                  key={index}
                  className="flex gap-1 text-xs md:text-sm items-center"
                >
                  <GoDotFill className="text-primaryOrange" />
                  <span>{Object.values(item)[0]}</span>
                </p>
              ))}
            </div>
          )}

          <p className="flex items-center gap-1 text-xs md:text-sm">
            <HiOutlineLocationMarker /> Lagos, Nigeria
          </p>
          <div className="border border-[#DED9DD]   flex items-center justify-center rounded-xl">
            <AuctionTimer endTime={auction.end_time} />
          </div>
        </div>
      </div>
    </Link>
  );
};
