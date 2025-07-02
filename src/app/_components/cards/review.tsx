import Image from 'next/image';
import { ReviewModal } from '../modals/reviewModal';
interface ReviewCardProps {
  review: { imageSrc: string; product: string; date: string; id: string };
}
export const ReviewCard = ({ review }: ReviewCardProps) => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between w-full py-7 md:h-[250px] gap-2 md:items-center md:gap-4  px-4  md:p-[20px] ">
        <div className="flex gap-4 md:gap-8 items-center">
          {/* image */}
          <div className="relative w-full h-40 md:w-[250px]  md:h-[200px]">
            <Image
              className="w-full h-full object-contain"
              src="/categories/car.png"
              alt="product image"
              fill
            />
          </div>
          <div>
            <p className="text-xl "> {review.product}</p>
            <p className="text-secondaryTextColor mb-2">
              Order ID: <span>{review.id}</span>
            </p>
            <p className=" text-[#00A800]">Delivered - {review.date}</p>
          </div>
        </div>

        <ReviewModal
          btnText="Review product"
          btnColor=" hover:underline text-[#E65800]  px-4 py-2 rounded-md transition duration-300 ease-in-out"
        />
      </div>

      <hr className="h-[2px] bg-gray-300" />
    </div>
  );
};
