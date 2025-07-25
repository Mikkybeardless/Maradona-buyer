import Image from 'next/image';

import { GoDotFill } from 'react-icons/go';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { PiHourglassLowDuotone } from 'react-icons/pi';
// import { BsCartPlus, BsCartPlusFill } from 'react-icons/bs';
import Link from 'next/link';

interface ProductCardProps {
  isActive?: boolean;
  imageUrl: string;
  title?: string;
  productType?: 'auction' | 'sale';
}
export const ProductCard = ({
  isActive = true,
  productType = 'sale',
  imageUrl,
  title = 'Toyota Camry 2017',
}: ProductCardProps) => {
  return (
    <Link href="/product/12">
      <div className="w-full flex flex-col ">
        <div className="bg-white flex flex-col w-full rounded-md  mb-4">
          {/* img */}
          <div className="w-full relative">
            <Image
              src={`${imageUrl}`}
              alt="dummycars"
              width={300}
              height={200}
              className="w-full h-48 object-cover rounded-2xl"
            />
            {/* Heart Icon (Fixed Position) */}
            {/* <button
              onClick={handleToggleFavorite}
              className={`absolute md:top-7 xs:top-2 right-5 bg-white rounded-full h-7 w-7 flex items-center justify-center`}
            >
              {isFavorite ? (
                <GoHeartFill className={`text-primaryOrange`} size={24} />
              ) : (
                <GoHeart size={24} />
              )}
            </button>

            <button
              onClick={handleAddToCart}
              className={`absolute md:bottom-7 xs:bottom-2 right-5  bg-white rounded-full h-7 w-7 flex items-center justify-center`}
            >
              {addedToCart ? (
                <BsCartPlusFill className={`text-primaryOrange`} size={24} />
              ) : (
                <BsCartPlus size={24} />
              )}
            </button> */}
          </div>
        </div>
        <div className="w-full space-y-2">
          <p className="text-xs">Listed by Marathona real estate solutions</p>
          <h3 className="text-darkBlue font-bold text-sm md:text-2xl">
            {title}
          </h3>
          <div className="flex items-center gap-x-1 font-normal text-sm text-[#454545] mb-[15px]">
            <p className="flex gap-1 text-xs md:text-sm items-center">
              <GoDotFill className="text-primaryOrange" />
              <span>Automatic</span>
            </p>

            <p className="flex gap-1 text-xs md:text-sm items-center">
              <GoDotFill className="text-primaryOrange" />
              <span>49,067 miles</span>
            </p>

            <p className="flex gap-1 text-xs md:text-sm items-center">
              <GoDotFill className="text-primaryOrange" />
              <span>120 km/h</span>
            </p>
          </div>
          <p className="flex items-center gap-1 text-xs md:text-sm">
            <HiOutlineLocationMarker /> Lagos, Nigeria
          </p>
          <div className="border border-[#DED9DD]   flex items-center justify-center rounded-xl">
            {productType === 'auction' &&
              (isActive ? (
                <div className="flex  bg-[#F0F0F0] w-full text-[#585858] items-center justify-around px-4 py-2 gap-2">
                  <PiHourglassLowDuotone size={30} />
                  <div className="flex  items-center text-sm md:text-lg flex-col">
                    <span>01</span>
                    <span>Days</span>
                  </div>{' '}
                  <span className="md:text-3xl font-bold"> :</span>
                  <div className="flex items-center text-sm md:text-lg  flex-col">
                    <span>11</span>
                    <span>24</span>
                  </div>
                  <span className="md:text-3xl font-bold"> :</span>
                  <div className="flex items-center text-sm md:text-lg  flex-col">
                    <span>24</span>
                    <span>Mins</span>
                  </div>
                </div>
              ) : (
                <p className="text-red-500 font-semibold py-3">
                  Auction Closed
                </p>
              ))}
            {productType === 'sale' && (
              <p className="text-[#079455] font-medium py-3">For sale</p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};
