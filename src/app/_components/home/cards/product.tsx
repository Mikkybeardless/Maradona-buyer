import Image from 'next/image';

import { GoDotFill, GoHeart, GoHeartFill } from 'react-icons/go';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import Link from 'next/link';
import { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useRouter } from 'next/navigation';

interface ProductCardProps {
  product: ApiProductDetails & { id: number };
  imageUrl: string;
  productType?: 'auction' | 'sale';
  seller: string;
  isAdminProduct: boolean;
}
export const ProductCard = ({
  imageUrl,
  product,
  seller,
  isAdminProduct,
}: ProductCardProps) => {
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
      await axios.post(`/api/toggle-like/product/${product.id}`);
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
    <Link href={`/product/${product?.id || 1}`}>
      <div className="w-full flex flex-col ">
        <div className="bg-white flex flex-col w-full rounded-md  mb-4">
          {/* img */}
          <div className="w-full relative">
            <Image
              src={`${imageUrl}`}
              alt={product.name}
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
        </div>

        <div className="w-full space-y-2">
          <p className="text-xs">
            {isAdminProduct
              ? 'Listed by Marathona real estate solutions'
              : `Listed by ${seller}`}
          </p>
          <h3 className="text-darkBlue font-bold text-sm md:text-2xl">
            {product.name}
          </h3>

          {product?.type === 'CAR' && (
            <div className="flex md:flex-row flex-col gap-1 md:items-center  font-normal text-sm text-[#454545] mb-[15px]">
              <p className="flex gap-1 text-xs md:text-sm items-center">
                <GoDotFill className="text-primaryOrange" />
                <span>{(product as ApiCar).gear_type}</span>
              </p>

              <p className="flex gap-1 text-xs md:text-sm items-center">
                <GoDotFill className="text-primaryOrange" />
                <span>{(product as ApiCar).mileage} miles</span>
              </p>

              {/* <p className="flex gap-1 text-xs md:text-sm items-center">
                <GoDotFill className="text-primaryOrange" />
                <span>120 km/h</span>
              </p> */}
            </div>
          )}

          <p className="flex items-center gap-1 text-xs md:text-sm">
            <HiOutlineLocationMarker /> Lagos, Nigeria
          </p>
          <div className="border border-[#DED9DD]   flex items-center justify-center rounded-xl">
            <p className="text-[#079455] font-medium py-3">For sale</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
