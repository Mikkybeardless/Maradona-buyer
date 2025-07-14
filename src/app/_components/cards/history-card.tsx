import { formatAmount } from '@/app/Utils/util';
import Image from 'next/image';
// import { CiHeart } from 'react-icons/ci';
// import { GoDotFill } from 'react-icons/go';
// import { MdVerified } from 'react-icons/md';
import { PiHourglassLowDuotone } from 'react-icons/pi';

interface HistoryItemProps {
  item: {
    imageUrl: string;
    title: string;
    transmission: string;
    condition: string;
    mileage: string;
    location: string;
    color: string;
    hp: string;
    miles: string;
    km: string;
    bids?: number;
    highestBidPrice: number;
    yourBidPrice: number;
    time: {
      days: number;
      hours: number;
      minutes: number;
    };
    type: string;
  };
}

export const HistoryItem = ({ item }: HistoryItemProps) => {
  return (
    <div className="flex items-center gap-5">
      <input
        id="item"
        type="checkbox"
        className="accent-primaryOrange w-4 h-4 transform  hover:scale-125 transition-transform duration-200 ease-in-out"
      />
      <div className=" w-full">
        <h4 className="text-2xl font-bold">{item.title}</h4>
        <div className="flex flex-col md:flex-row gap-20 w-full rounded-lg py-7 md:h-[250px]  md:items-center md:gap-4  px-4  md:p-[20px]  ">
          <div className="relative w-full h-40 md:w-[250px]  md:h-[200px]">
            <Image
              className="w-full h-full object-contain"
              src={item.imageUrl}
              alt="product image"
              fill
            />
          </div>

          <div className="space-y-2 w-full">
            {/* Product description */}
            <div className="flex justify-between items-center">
              <div className="space-y-3">
                <p>
                  <span className="text-darkBlue">Highest bid price</span>
                </p>
                <p>
                  <span className="text-primaryOrange font-semibold md:text-2xl">
                    {formatAmount(item.highestBidPrice)}
                  </span>
                </p>
              </div>
              <div className="space-y-3 ">
                <p className="text-right">
                  <span className="text-darkBlue">Your bid</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="bg-[#FECEB04D] px-3 py-1 text-[#585858] rounded-full">
                    Outbidded
                  </span>
                  <span className="md:text-2xl font-semibold">
                    {formatAmount(item.yourBidPrice)}
                  </span>
                </p>
              </div>
            </div>

            <hr />

            <div className="w-full">
              <p className="flex gap-10 items-center">
                <span>Ends in:</span>{' '}
                <span className="underline">{item.bids}Bids</span>
              </p>
            </div>

            <div className="flex justify-between items-center w-full">
              <div className="flex  bg-[#F0F0F0] w-fit rounded-lg shadow-smd text-[#585858] items-center justify-around px-4 py-1 gap-2">
                <PiHourglassLowDuotone size={30} />
                <div className="flex  items-center text-lg flex-col">
                  <span>{item.time.days}</span>
                  <span className="text-[10px]">Days</span>
                </div>{' '}
                <span className="text-3xl font-bold"> :</span>
                <div className="flex items-center text-lg  flex-col">
                  <span>{item.time.hours}</span>
                  <span className="text-[10px]">Hrs</span>
                </div>
                <span className="text-3xl font-bold"> :</span>
                <div className="flex items-center text-lg  flex-col">
                  <span>{item.time.minutes}</span>
                  <span className="text-[10px]">Mins</span>
                </div>
              </div>

              <button className="text-primaryOrange hover:underline">
                Increase bid
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
