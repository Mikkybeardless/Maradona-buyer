import ProductMap from '@/app/_components/Map';
import ProgressBar from '@/app/_components/progressiveBar';
import { BsTruckFront } from 'react-icons/bs';
import { FiPhoneCall } from 'react-icons/fi';
import { GoCopy } from 'react-icons/go';
import { LuPackage } from 'react-icons/lu';
import { TbMessageDots } from 'react-icons/tb';

export default function Page() {
  return (
    <main className="p-4 relative  md:px-16 py-5">
      <section className="max-w-[500px]  bg-white p-4 rounded-lg  space-y-5 w-full">
        <div className="flex items-center justify-between gap-5">
          <div className="flex  items-center gap-2 p-2 rounded-lg w-full border border-gray-200">
            <input
              type="text"
              className="w-full"
              placeholder="Tracking number"
            />
          </div>

          <button className="border border-gray-200 px-3 py-2 rounded-lg">
            Track{' '}
          </button>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex gap-3 items-center">
            <span className="bg-[#F5F5F5] p-4 text-[#858585]">
              <LuPackage size={18} />
            </span>

            <div className="flex flex-col">
              <span className="text-[#858585] text-sm">Tracking Number</span>
              <span className="md:text-lg">1234567890</span>
            </div>
          </div>
          <button className="border border-gray-200 p-1  rounded-lg flex items-center gap-2">
            <GoCopy />
          </button>
        </div>

        <div className="bg-[#FFEFE633] p-4 space-y-3 border border-[#FFF1EF]">
          <div className="flex justify-between items-center border-b pb-4 ">
            <p className="flex gap-3 font-semibold items-center">
              <BsTruckFront className="text-[#B54708]" />
              Delivery Status
            </p>

            <span className="text-[#B54708] bg-[#FFFAEB] border border-[#FEF0C7] px-3 py-1 rounded-full">
              Ongoing
            </span>
          </div>

          <div className="flex justify-between items-center">
            <div>
              <p className="text-[#858585] text-sm">To</p>
              <p className="text-lg">193, ABC republic</p>
            </div>

            <div>
              <p className="text-[#858585] text-sm">From</p>
              <p className="text-lg">193, ABC republic</p>
            </div>
          </div>
        </div>

        <hr />
        <ul className="space-y-3">
          <li className="flex justify-between">
            <span className="text-[#A3A3A3] w-[200px]">You shipped on:</span>
            <span className="text-[16px] font-bold">21 May</span>
          </li>
          <li className="flex justify-between">
            <span className="text-[#A3A3A3] w-[200px]">
              Estimated delivery:
            </span>
            <span className="text-[16px] font-bold">25 May</span>
          </li>
          <li className="flex justify-between">
            <span className="text-[#A3A3A3] w-[200px]">Shipment cost</span>
            <span className="text-[16px] font-bold">1204</span>
          </li>
        </ul>

        <hr />
        <ProgressBar />
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="bg-[#D9D9D9] w-12 h-12 rounded-md"></span>
            <div>
              <p className="font-semibold text-lg">Ola James</p>
              <p className="">Handler</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="bg-[#F5F5F5] text-[#858585] rounded-md p-4">
              <TbMessageDots size={18} />
            </button>

            <button className="bg-[#F5F5F5] text-[#858585] rounded-md p-4">
              <FiPhoneCall size={18} />
            </button>
          </div>
        </div>
      </section>
      {/* <ProductMap /> */}
    </main>
  );
}
