import Image from "next/image";
import { Button } from "../common/button";
import { CiHeart } from "react-icons/ci";
import EastIcon from "@mui/icons-material/East";

export const RecentlyViewedCard = () => {
  return (
    <div className="flex flex-col gap-4 md:w-[250px]">
      {/* image */}
      <div className="relative w-full h-40 md:w-[250px]  md:h-[160px]">
        <Image
          className="w-full h-full object-contain"
          src="/categories/car.png"
          alt="product image"
          fill
        />
        <div className="absolute top-1 right-8 bg-[#BDBDBD] rounded-full h-7 w-7 flex items-center justify-center">
          <CiHeart className="w-4 h-4 text-white" />
        </div>
      </div>
      <div>
        <p className="text-secondaryTextColor">Toyota Camry LE (2024)</p>
        <p className="text-secondaryOrange text-xl font-bold">₦250,000,000</p>
      </div>
      <Button icon={<EastIcon />} btnText="Buy Now" width="w-full" />
      <Button
        btnText="Remove"
        color="text-secondaryOrange bg-white border border-secondaryOrange"
        width="w-full"
      />
    </div>
  );
};

export const RecentlyViewedCard2 = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col md:flex-row items-center gap-x-5">
          {/* <div className="relative w-full h-40 md:w-[250px] rounded-lg md:h-[160px]">
            <Image
              className="w-full h-full rounded-lg object-contain"
              src="/admin/black-car.png"
              alt="product image"
              fill
            />
          </div> */}

          <Image
            className="rounded-xl object-cover"
            src="/admin/black-car.png"
            alt="product image"
            width={200}
            height={160}
          />
          <div>
            <p className="text-secondaryTextColor">Toyota Camry LE (2024)</p>
            <p className="text-secondaryOrange text-xl font-bold">
              ₦250,000,000
            </p>
            <p className="text-sm text-secondaryTextColor">
              Saved on Mar 16, 2024
            </p>
          </div>
        </div>

        <div className="flex flex-row md:flex-col gap-3 ">
          <Button icon={<EastIcon />} btnText="Buy Now" width="w-full" />
          <Button
            btnText="Remove"
            color="text-secondaryOrange bg-white border border-secondaryOrange"
            width="w-full"
          />
        </div>
      </div>
      <hr className="mt-3" />
    </div>
  );
};
