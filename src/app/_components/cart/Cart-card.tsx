'use client';

import { formatAmount } from '@/app/Utils/util';
import Image from 'next/image';
import { useState } from 'react';
import { GoDotFill, GoTrash } from 'react-icons/go';
import { MdVerified } from 'react-icons/md';

interface CartProps {
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

export const CartItem = ({ item }: CartProps) => {
  const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => {
    setQuantity((prev) => {
      return prev > 1 ? prev - 1 : prev;
    });
  };

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };
  return (
    <div className="px-4">
      <p className="font-semibold">Shipped by global seller</p>
      <div className="flex items-center gap-5">
        <input
          id="item"
          type="checkbox"
          className="accent-primaryOrange w-4 h-4 transform  hover:scale-125 transition-transform duration-200 ease-in-out"
        />
        <div className=" w-full">
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
              <div className="flex justify-between ">
                <h4 className="md:text-2xl font-bold">{item.title}</h4>
                <button>
                  <GoTrash />
                </button>
              </div>

              <div className="flex flex-col md:flex-row md:items-center text-[12px] gap-2 md:gap-5">
                <p className="flex items-center gap-1">
                  <span className="text-secondaryTextColor">Transmission:</span>
                  <GoDotFill className="text-secondaryOrange" />
                  <span className="font-semibold">{item.transmission}</span>
                </p>
                <p className="flex items-center gap-1">
                  <span className="text-secondaryTextColor">Condition:</span>
                  <GoDotFill className="text-secondaryOrange" />
                  <span className="font-semibold">{item.condition}</span>
                </p>
                <p className="flex items-center gap-1">
                  <span className="text-secondaryTextColor">Color:</span>
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
                      <span className="text-darkBlue">{item.hp} Hp</span>
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
                      <span className="text-darkBlue">
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
                      <span className="text-darkBlue">{item.miles} km/h</span>
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
                <p className=" md:text-xl font-semibold">
                  {formatAmount(item.price)}
                </p>

                <div className="flex gap-5 px-5 py-1 rounded-lg items-center bg-[#B6B7DE80]">
                  <button
                    className="text-lg hover:bg-transparent"
                    onClick={handleDecrease}
                  >
                    -
                  </button>
                  <span>{quantity}</span>
                  <button
                    className="text-lg hover:bg-transparent"
                    onClick={handleIncrease}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
