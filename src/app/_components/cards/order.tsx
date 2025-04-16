import { Ellipsis } from "lucide-react";
import Image from "next/image";
interface OrderCardProps {
  order: { imageSrc: string; product: string; status: string; date: string };
}
export const OrderCard = ({ order }: OrderCardProps) => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between  w-full py-7 md:h-[250px] gap-2 md:items-center md:gap-4  px-4  md:p-[20px]   ">
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
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
          <p
            className={`   ${
              order.status === "Delivered"
                ? " text-[#00A800]"
                : "text-[#BF8E11]"
            }`}
          >
            {order.status}
          </p>
          <p className="text-xl mb-2"> {order.product}</p>
          <p className="text-secondaryTextColor">
            Purchased - <span>{order.date}</span>
          </p>
        </div>
      </div>

      {order.status !== "Delivered" ? (
        <div className="flex justify-between md:justify-start gap-2">
          <button className="bg-gray-200 text-secondaryOrange font-semibold px-4 py-2 rounded-md hover:bg-gray-300 transition duration-300 ease-in-out">
            Track Order
          </button>

          <button className="text-[2em]   font-bold px-4 rounded-lg py-2 border border-gray-300 text-secondaryTextColor">
            <Ellipsis />
          </button>
        </div>
      ) : (
        <div className="flex justify-between md:justify-start gap-2">
          <button className="bg-secondaryOrange text-white hover:bg-inherit border hover:border-secondaryOrange hover:text-secondaryOrange font-semibold px-4 py-2 rounded-md  transition duration-300 ease-in-out">
            Re-Order
          </button>
          <button className="hover:bg-secondaryOrange text-secondaryOrange   border border-secondaryOrange hover:text-white font-semibold px-4 py-2 rounded-md  transition duration-300 ease-in-out">
            Receipt
          </button>
        </div>
      )}
    </div>
  );
};
