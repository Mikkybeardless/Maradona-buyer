import Image from 'next/image';
import { HiOutlineLocationMarker } from 'react-icons/hi';

export default function Payment() {
  return (
    <section className="flex flex-col bg-[url('/home/paysection.webp')] gap-4 md:px-[5%]  py-10">
      <div className="flex flex-col px-3 md:flex-row justify-between ">
        <div className="flex flex-col gap-2">
          <h2 className="font-extrabold text-[28px] md:text-[48px] text-white">
            Trusted Payments
          </h2>
          <Image
            src="/home/payment-frame.png"
            className="Object-contain mb-3"
            width={200}
            height={50}
            alt="available payments"
          />
          <button className="bg-primaryOrange px-4 py-2 w-fit rounded-lg font-semibold text-white">
            <a href="#more-for-you">Shop Now</a>
          </button>
        </div>

        <div className="flex text-white items-center gap-10 md:gap-20">
          <div className="flex items-center gap-2">
            <div className="w-[1px] h-[70px] bg-white" />
            <div className="">
              <p className="text-[28px] md:text-[40px] font-extrabold">5M+</p>
              <p className="text-sm font-light">Factory complete auction</p>
            </div>
          </div>

          <div className="flex items-center gap-2 ">
            <div className="w-[1px] h-[70px] bg-white" />
            <div className="">
              <p className="text-[28px] md:text-[40px] font-extrabold">20</p>
              <p className="text-sm font-light">Real estate sales</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex flex-col md:flex-row items-center gap-10 justify-between">
        {/* left */}
        <div className="w-full md:w-[50%] bg-white p-1 md:p-4">
          <div className=" grid grid-cols-3 gap-2">
            <DealCard />
            <DealCard />
            <DealCard />
          </div>
        </div>

        {/* right */}
        <div className="w-full md:w-[50%] p-1 bg-white md:p-4">
          <div className="grid grid-cols-3 gap-2">
            <DealCard />
            <DealCard />
            <DealCard />
          </div>
        </div>
      </div>
    </section>
  );
}

export const DealCard = () => {
  return (
    <div className="flex flex-col p-2  md:p-4">
      <div className="w-full h-48 rounded-xl overflow-hidden mb-4">
        <Image
          src="/home/Dashboard-house-1.png"
          alt="Deal Image"
          width={300}
          height={200}
          className="w-full h-full object-cover"
        />
      </div>

      <p className="text-darkBlue font-bold md:text-2xl">₦20,000,000</p>
      <p className="flex items-center text-[11px] gap-1">
        <HiOutlineLocationMarker /> Lagos, Nigeria
      </p>
    </div>
  );
};
