import { formatAmount } from '@/app/Utils/util';
import Image from 'next/image';
import { AuctionTimer } from './auctionTimer';

interface HistoryItemProps {
  item: Bid | Enquiry;
  productType: 'auction' | 'enquiry';
}

export const HistoryItem = ({ item, productType }: HistoryItemProps) => {
  return (
    <div className="flex items-center md:gap-5">
      <input
        id="item"
        type="checkbox"
        className="accent-primaryOrange w-4 h-4 transform  hover:scale-125 transition-transform duration-200 ease-in-out"
      />
      <div className=" w-full">
        <h4 className="md:text-2xl  font-bold">
          {productType === 'auction'
            ? (item as Bid).auction_product.name
            : (item as Enquiry).product.name}
        </h4>
        <div className="flex flex-col md:flex-row gap-20 w-full rounded-lg py-7 md:h-[250px]  md:items-center md:gap-4  md:px-4  md:p-[20px]  ">
          <div className="relative w-full h-40 md:w-[250px]  md:h-[200px]">
            <Image
              className="w-full h-full object-contain"
              src={
                productType === 'auction'
                  ? (item as Bid).auction_product.media[0]
                  : (item as Enquiry).product.media[0]
              }
              alt="product image"
              fill
            />
          </div>

          {productType === 'auction' && (item as Bid).auction_product ? (
            <div className="space-y-2 w-full ">
              {/* Product description */}
              <div className="flex justify-between items-center">
                {(item as Bid).status === 'sold' && (
                  <div className="space-y-3">
                    <p>
                      <span className="text-darkBlue text-sm md:text-base">
                        Sold price
                      </span>
                    </p>
                    <p>
                      <span className="text-primaryOrange font-semibold md:text-2xl">
                        {formatAmount(Number((item as Bid).sold_price))}
                      </span>
                    </p>
                  </div>
                )}

                <div className="space-y-3 ">
                  <p className="">
                    <span className="text-darkBlue">Your bid:</span>
                  </p>
                  <p className="flex items-center gap-2">
                    {/* <span className="bg-[#FECEB04D] px-3 py-1 text-[#585858] rounded-full">
                      Outbidded
                    </span> */}
                    <span className="md:text-2xl font-semibold">
                      {formatAmount(Number((item as Bid).amount))}
                    </span>
                  </p>
                </div>
              </div>

              <hr />

              <div className="w-full">
                <p className="flex gap-10 items-center">
                  <span>Ends in:</span>{' '}
                </p>
              </div>

              <div className="flex justify-between items-center w-full">
                <div className="w-[250px]">
                  <AuctionTimer
                    endTime={(item as Bid).auction_product.end_time}
                  />
                </div>
                {/* 
                <PlaceBidModal
                  btnStyle="text-primaryOrange hover:underline"
                  title="Increase bid"
                /> */}
              </div>
            </div>
          ) : (
            <div className="space-y-2 w-full ">
              {/* Product description */}
              <div className="flex justify-between items-center">
                <div className="space-y-3">
                  <p className="flex items-center gap-2">
                    <span className="text-darkBlue text-sm md:text-base">
                      Enquiry:
                    </span>
                    <span className="text-sm">{(item as Enquiry).message}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-darkBlue text-sm md:text-base">
                      Price :
                    </span>
                    <span className="text-primaryOrange font-semibold md:text-2xl">
                      {formatAmount(Number((item as Enquiry).product.price))}
                    </span>
                  </p>

                  <p className="flex items-center gap-2">
                    <span className="text-darkBlue text-sm md:text-base">
                      Description :
                    </span>
                    <span className="">
                      {(item as Enquiry).product.description}
                    </span>
                  </p>
                </div>

                <div className="space-y-3 "></div>
              </div>

              <hr />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
