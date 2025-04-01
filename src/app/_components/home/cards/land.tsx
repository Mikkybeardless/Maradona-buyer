import { CiHeart, CiLocationOn } from "react-icons/ci";

export const LandCard = () => {
  return (
    <div>
      <div className="bg-[url('/home/land/image.png')] h-[204px] bg-cover bg-center flex flex-col rounded-md p-4 mb-4 relative">
        {/* Heart Icon (Fixed Position) */}
        <div className="absolute md:top-7 xs:top-2 left-5 bg-[#BDBDBD] rounded-full h-7 w-7 flex items-center justify-center">
          <CiHeart className="w-4 h-4 text-white" />
        </div>

      </div>

      <div className = "">
        <p className="font-bold text-[15px] text-[#14199C] mb-[10px]">
          ₦ 13,500,000
        </p>
        <p className="font-normal text-[15px] text-[#040421] mb-[10px]">
          35 Acres 1,600Sqft 12 Plots of Land
        </p>
        <p className="flex items-center gap-x-1 font-normal text-sm text-[#454545] mb-[15px]">
          <CiLocationOn size={14} color="#E65800" />
          Ikoyi, Lagos
        </p>
         
        <div className="flex ">
         <p className="text-xs font-medium text-[#02999D] p-2 bg-[#E0F2FB] rounded-[8px]">
            Documented
          </p>
        </div>
      </div>
    </div>
  );
};
