import { CiHeart, CiLocationOn } from "react-icons/ci";

export const CarCard = () => {
  return (
    <div>
      <div className="bg-[#ffffff] flex flex-col rounded-md p-4 mb-4 relative">
        {/* Heart Icon (Fixed Position) */}
        <div className="absolute md:top-7 xs:top-2 left-5 bg-[#BDBDBD] rounded-full h-7 w-7 flex items-center justify-center">
          <CiHeart className="w-4 h-4 text-white" />
        </div>

        {/* img */}
        <div className="flex justify-center">
          <img
            src={`/home/carshop.png`}
            alt="dummycars"
            className="w-[90%] h-auto object-contain"
          />
        </div>
      </div>

      <div>
        <p className="font-bold text-[15px] text-[#14199C] mb-[10px]">
          ₦ 1,750,000
        </p>
        <p className="font-normal text-[15px] text-[#040421] mb-[10px]">
          Toyota Tacoma Access Cab 2006 Blue
        </p>
        <p className="flex items-center gap-x-1 font-normal text-sm text-[#454545] mb-[15px]">
          <CiLocationOn size={14} color="#E65800" />
          Ikoyi, Lagos
        </p>
        <div className="flex gap-x-2">
          <p className="text-xs font-medium text-[#02999D] p-2 bg-[#E0F2FB] rounded-[8px]">
            Automatic
          </p>
          <p className="text-xs font-medium text-[#02999D] p-2 bg-[#E0F2FB] rounded-[8px]">
            Automatic
          </p>
        </div>
      </div>
    </div>
  );
};
