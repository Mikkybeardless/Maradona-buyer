import { formatAmount } from '@/app/Utils/util';
import Image from 'next/image';
import { CiHeart } from 'react-icons/ci';
import { GoDotFill } from 'react-icons/go';
import { MdVerified } from 'react-icons/md';
import { PiHourglassLowDuotone } from 'react-icons/pi';

interface SavedItemProps {
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
    price: number;
    time: {
      days: number;
      hours: number;
      minutes: number;
    };
    type: string;
  };
}

export const SavedItem = ({ item }: SavedItemProps) => {
  return (
    <div className="flex md:items-center gap-2 md:gap-5">
      <input
        id="item"
        type="checkbox"
        className="accent-primaryOrange w-4 h-4 transform  hover:scale-125 transition-transform duration-200 ease-in-out"
      />
      <div className=" w-full">
        <h4 className="md:text-2xl   font-bold">{item.title}</h4>
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
            <div className="flex flex-col md:flex-row md:items-center text-[12px] md:gap-5">
              <p className="flex items-center gap-1">
                <span className="text-secondaryTextColor w-[100px]">
                  Transmission:
                </span>
                <GoDotFill className="text-secondaryOrange" />
                <span className="font-semibold">{item.transmission}</span>
              </p>
              <p className="flex items-center gap-1">
                <span className="text-secondaryTextColor w-[100px]">
                  Condition:
                </span>
                <GoDotFill className="text-secondaryOrange" />
                <span className="font-semibold">{item.condition}</span>
              </p>
              <p className="flex items-center gap-1">
                <span className="text-secondaryTextColor w-[100px]">
                  Color:
                </span>
                <GoDotFill className="text-[#D0D5DD]" />
                <span className="font-semibold">{item.color}</span>
              </p>
            </div>

            {/* Product description */}
            {item.type === 'car' ? (
              <div className="flex items-center gap-5 mt-2 border-b border-[#D0D5DD] pb-2">
                <div className="flex  gap-2">
                  <Image
                    src="/product/engine.png"
                    width={24}
                    height={16}
                    className="object-contain mb-4"
                    alt="part rating image"
                  />
                  <p>
                    <span className="text-darkBlue text-xs md:text-base">
                      {item.hp} Hp
                    </span>
                  </p>
                </div>
                <div className=" flex  gap-2 ">
                  <Image
                    src="/product/mileage.png"
                    width={24}
                    height={16}
                    className="object-contain mb-4"
                    alt="part rating image"
                  />
                  <p>
                    <span className="text-darkBlue text-xs md:text-base">
                      {' '}
                      {item.mileage} miles
                    </span>
                  </p>
                </div>
                <div className="flex  gap-2 ">
                  <Image
                    src="/product/acceleration.png"
                    width={24}
                    height={16}
                    className="object-contain mb-4"
                    alt="part rating image"
                  />

                  <p>
                    <span className="text-darkBlue text-xs md:text-base">
                      {item.miles} km/h
                    </span>
                  </p>
                </div>
              </div>
            ) : (
              <p className="flex items-center gap-1 text-secondaryTextColor border-b border-[#D0D5DD] pb-2">
                C of O :{' '}
                <span className="text-darkBlue flex items-center gap-1 font-semibold">
                  {' '}
                  <MdVerified className="text-[#1570EF]" />
                  Verified
                </span>
              </p>
            )}

            <div className="flex justify-between w-full">
              <p className="flex gap-10 items-center">
                <span>Ends in:</span>{' '}
                <span className="underline">{item.bids}Bids</span>
              </p>

              <p className="flex items-center text-[12px] gap-1 text-secondaryTextColor">
                <CiHeart size={14} />5 People
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-y-2  justify-between w-full">
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
              <p className=" text-lg md:text-xl font-semibold">
                {' '}
                {formatAmount(item.price)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
