'use client';

import { useState } from 'react';
import ModalWrapper from './modalWrapper';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { formatAmount } from '@/app/Utils/util';

export const PlaceBidModal = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const bids = [
    { amount: 20000, detail: 'approx. US $13,180.00' },
    { amount: 20000, detail: 'approx. US $13,180.00' },
    ,
    { amount: 20000, detail: 'approx. US $13,180.00' },
  ];

  return (
    <div>
      <button
        type="button"
        className={`border mt-10  hover:border-primaryOrange hover:bg-inherit  bg-primaryOrange hover:text-primaryOrange text-white
        }   w-full rounded-lg px-2 py-2`}
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        place bid
      </button>
      <ModalWrapper
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        modalWidth="max-w-[650px]"
      >
        <div className="w-full p-4  bg-white rounded-lg  flex flex-col gap-4">
          <button
            className="absolute top-4 right-4  p-2 text-gray-600 bg-gray-100 rounded-full hover:bg-gray-400"
            onClick={() => {
              setIsModalOpen(false);
            }}
          >
            <CloseRoundedIcon />
          </button>
          <h2 className="text-2xl font-bold ">Place your bid</h2>
          <p className="text-secondaryTextColor">+ ₦200,000 shipping</p>
          <p className="text-secondaryTextColor">
            {' '}
            (approx. NGN ₦20,000,000 + NGN ₦200,000 shipping = ₦22,000,000)
          </p>
          <p className="text-secondaryTextColor">
            0 bids · <span className="text-[#FE3E3E]">3d 11h left</span>
          </p>
          <div className="flex justify-between">
            {bids.map((bid, index) => (
              <div className="flex flex-col items-center" key={index}>
                <button className="border hover:border-primaryOrange hover:bg-inherit hover:text-primaryOrange rounded-3xl bg-primaryOrange text-white px-4 py-2 mb-2">
                  <span className="text-defaultTextColor">
                    Bid {formatAmount(bid.amount)}
                  </span>
                </button>
                <span className="text-xs text-secondaryTextColor">
                  ({bid.detail})
                </span>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center">
            <hr className="w-[40%]" /> Or <hr className="w-[40%]" />
          </div>
          <p className="text-secondaryTextColor">Your max bid</p>
          <div className="flex justify-between items-center gap-3">
            <input
              type="text"
              placeholder="₦"
              id="bid"
              className="w-full border border-gray-300 rounded-md px-4 py-4"
            />
            <button className="border hover:border-primaryOrange hover:bg-inherit hover:text-primaryOrange rounded-full bg-primaryOrange text-white px-12 py-4 mb-2">
              Bid
            </button>
          </div>
          <p className="text-secondaryTextColor mb-4">
            <span className="font-semibold"> Current price:</span>{' '}
            <span className="text-green-500 font-semibold">
              NGN ₦22,000,000
            </span>{' '}
            (approx. US $14,617.94,)
          </p>
          <p className="text-secondaryTextColor text-xs">
            By selecting Bid, you are committing to buy this item if you are the
            winning bidder.
          </p>
        </div>
      </ModalWrapper>
    </div>
  );
};
