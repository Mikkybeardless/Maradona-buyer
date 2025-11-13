import Image from 'next/image';

import { GoDotFill, GoHeart, GoHeartFill } from 'react-icons/go';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import Link from 'next/link';

import { AuctionTimer } from '../../cards/auctionTimer';
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

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
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const router = useRouter();
  const handleToggleFavorite = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault(); // prevent Link navigation
    e.stopPropagation(); // stop the click from reaching the Link
    setIsFavorite(!isFavorite);
    try {
      // check auths
      await axios.get('/api/auth/check-auth');
      await axios.post(`/api/toggle-like/auction/${auction.id}`);
      toast.success('Favorite status updated');
    } catch (error) {
      setIsFavorite(isFavorite); // revert state on error
      if (axios.isAxiosError(error) && error.response) {
        if (error.response.status === 401) {
          const currentPath = window.location.pathname + window.location.search;
          router.push(`/login?redirect=${encodeURIComponent(currentPath)}`);
        }
      } else {
        // Network error or other non-Axios error
        toast.error('Network error. Please check your connection.');
      }
    }
  };
  return (
    <Link href={`/auction/${auction?.id || 1}`}>
      <div className="w-full flex flex-col justify-between h-full">
        <div className=" flex flex-col gap-3 w-full rounded-md  mb-4">
          {/* img */}
          <div className="w-full bg-white relative">
            <Image
              src={`${imageUrl}`}
              alt={title}
              width={300}
              height={200}
              className="w-full h-48 object-cover rounded-2xl"
            />
            {/* Heart Icon (Fixed Position) */}
            <button
              onClick={handleToggleFavorite}
              className={`absolute z-20 md:top-7 xs:top-2 right-5 bg-white rounded-full h-7 w-7 flex items-center justify-center`}
            >
              {isFavorite ? (
                <GoHeartFill className={`text-primaryOrange`} size={24} />
              ) : (
                <GoHeart size={24} />
              )}
            </button>
          </div>
          <p className="text-xs">
            {isAdminauction
              ? 'Listed by Marathona real estate solutions'
              : `Listed by ${seller}`}
          </p>
          <h3 className="text-darkBlue truncate font-bold text-sm md:text-xl">
            {title}
          </h3>
        </div>

        <div className="w-full space-y-2">
          {auction.data !== null && (
            <div className="flex md:flex-row flex-col gap-1 md:items-center  font-normal text-sm text-[#454545] mb-[15px]">
              <p className="flex gap-1 text-xs md:text-sm items-center">
                <GoDotFill className="text-primaryOrange" />
                <span>{auction.data?.key}: </span>
                <span>{auction.data?.value}</span>
              </p>

              {/* <p
            
                className="flex gap-1 text-xs md:text-sm items-center"
              >
                <GoDotFill className="text-primaryOrange" />
                <span>{auction.data.}</span>
              </p> */}
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
