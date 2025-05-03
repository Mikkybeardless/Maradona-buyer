import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import Image from 'next/image';

export const CartCard = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between w-full rounded-lg md:rounded-none md:h-[250px] gap-1 md:gap-4 md:items-center px-4 py-5 md:p-[20px] bg-white shadow-md ">
      <div className="hidden md:block">
        <CheckCircleRoundedIcon className="hidden md:block text-defaultBlue" />
      </div>
      <div className="flex justify-between md:hidden">
        <CheckCircleRoundedIcon className="text-defaultBlue" />
        <ClearRoundedIcon className="cursor-pointer" />
      </div>
      <div className="relative w-full h-40 md:w-[300px]  md:h-[250px]">
        <Image
          className="w-full h-full object-contain"
          src="/categories/car.png"
          alt="product image"
          fill
        />
      </div>
      <div className="flex flex-col gap-1 text-[#262626]">
        <h3 className="text-primaryOrange font-bold text-xl">Toyota Camry</h3>
        <p className="flex justify-between gap-5">
          <span>Engine:</span> <span>2.5L 4-cylinder</span>
        </p>
        <p className="flex justify-between">
          <span>Color:</span> <span>Blue</span>
        </p>
        <p className="flex justify-between">
          <span>Horsepower:</span> <span>203hp</span>
        </p>
      </div>
      <div className="flex items-center md:ml-4 flex-col gap-7  text-[#262626]">
        <h3 className="font-bold">₦4,500,000</h3>
        <div className="flex justify-between items-center w-1/3 md:w-full  bg-[#E5E6FA] py-1 px-5 md:px-2  rounded-md font-bold">
          <span>-</span>
          <span>1</span>
          <span>+</span>
        </div>
      </div>
      <div className="hidden md:block">
        <ClearRoundedIcon className="cursor-pointer" />
      </div>
    </div>
  );
};
