import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";

export const SavedItem = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between w-full rounded-lg py-7 md:h-[250px] gap-2 md:items-center md:gap-4  px-4  md:p-[20px] border border-gray-300 shadow-sm ">
      <div className="relative w-full h-40 md:w-[250px]  md:h-[200px]">
        <Image
          className="w-full h-full object-contain"
          src="/categories/car.png"
          alt="product image"
          fill
        />
      </div>

      <div className="space-y-2">
        <p className="text-darkBlue font-semibold mb-3">
          Toyota Tacoma Access Cab 2006 Blue
        </p>
        <div className="flex justify-between gap-1">
          <span className="bg-[#E5E6FA] text-defaultBlue text-xs font-medium mr-2 px-2.5 py-0.5 rounded-lg  ">
            Automatic
          </span>
          <span className="bg-[#E5E6FA] text-defaultBlue text-xs font-medium mr-2 px-2.5 py-0.5 rounded-lg ">
            700000 km
          </span>
          <span className="bg-[#E5E6FA] text-defaultBlue text-xs font-medium mr-2 px-2.5 py-0.5 rounded-lg ">
            Nigerian Used
          </span>
        </div>
        <p className="flex items-center gap-2">
          <CiLocationOn size={18} color="#E65800" /> <span>Ikoyi, Lagos</span>
        </p>
      </div>

      <p className="text-secondaryOrange md:text-xl font-semibold">
        ₦20,000,000
      </p>
    </div>
  );
};
