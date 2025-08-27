import Image from 'next/image';

import { GoDotFill } from 'react-icons/go';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import Link from 'next/link';

interface ProductCardProps {
  product: ProductDetails & { id: number };
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
  // const [isFavorite, setIsFavorite] = useState(false);

  // const handleToggleFavorite = () => {
  //   setIsFavorite(!isFavorite);
  // };
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
                <span>{(product as Car).gear_type}</span>
              </p>

              <p className="flex gap-1 text-xs md:text-sm items-center">
                <GoDotFill className="text-primaryOrange" />
                <span>{(product as Car).mileage} miles</span>
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
