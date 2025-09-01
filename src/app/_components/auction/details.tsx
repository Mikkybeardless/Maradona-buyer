'use client';
import { useState } from 'react';
import StarIcon from '@mui/icons-material/Star';
import { BsTruck } from 'react-icons/bs';
import Image from 'next/image';
import { MdLockOutline } from 'react-icons/md';
import { IoFilterOutline, IoFlashOutline } from 'react-icons/io5';
import { GoDotFill } from 'react-icons/go';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import GppGoodIcon from '@mui/icons-material/GppGood';
import Link from 'next/link';
import { CiCalendar } from 'react-icons/ci';
import { SellerFeedBack } from '../cards/sellerFeedBack';
import ProductCarousel from '../ProductCarousel';
import DynamicNav, { StateObject } from '../common/DetailNav';
import { HiOutlineMegaphone } from 'react-icons/hi2';
import { PlaceBidModal } from '../modals/placeYourBid';
import { SellerInfoModal } from '../modals/sellerInfoModal';
import { formatAmount } from '@/app/Utils/util';
import { DetailLoadingState } from '../common/detailsLoading';
import { ErrorComponent } from '../common/error';

type DetailState = 'about' | 'summary';

interface Props {
  productId: number;
  isLoading: boolean;
  error?: Error;
  product: ApiAuction;
}

export default function Details({
  productId,
  isLoading,
  error,
  product,
}: Props) {
  const [detailState, setDetailState] = useState<DetailState>('about');

  const [contactModal, setContactModal] = useState(false);

  const dynamicStates: StateObject[] = [
    { state: 'about', label: 'About this Item', id: 1 },
    { state: 'summary', label: 'Inspection Summary', id: 2 },
  ];

  const handleStateChange = (state: DetailState) => {
    setDetailState(state);
  };

  return isLoading ? (
    <DetailLoadingState />
  ) : error ? (
    <ErrorComponent error={error} message="Error loading product details" />
  ) : (
    <div>
      <SellerInfoModal
        isOpen={contactModal}
        onClose={() => setContactModal(false)}
      />
      <main className=" px-[4%] space-y-4 md:space-y-10">
        <section className="flex flex-col gap-5 md:px-[2%] space-y-4 md:space-y-0">
          {/* image and cta */}
          <div className="flex flex-col md:flex-row  md:justify-between gap-4">
            {/* left */}
            <div className="relative w-full md:basis-[45%] ">
              <ProductCarousel images={product.media} />
            </div>

            {/* right */}
            <div className=" md:p-3  md:pl-8 w-full md:basis-[55%] space-y-2">
              <div className="flex items-center relative justify-between gap-2 ">
                <h2 className="font-bold text-2xl mb-2">{product.name}</h2>
              </div>

              <p>{product.description}</p>
              {/* {product.type === 'CAR' && (
                <div className="flex items-center text-xs gap-2">
                  <p className="flex items-center gap-1">
                    {' '}
                    <span>Transmission:</span>{' '}
                    <span className="text-darkBlue font-extrabold flex items-center gap-1">
                      {' '}
                      <GoDotFill className="text-primaryOrange" />
                      {(product as Car).transmission}
                    </span>
                  </p>
                  <RxDividerVertical />
                  <p className="flex items-center gap-1">
                    {' '}
                    <span>Body Type:</span>{' '}
                    <span className="text-darkBlue font-extrabold flex items-center gap-1">
                      {' '}
                      <GoDotFill className="text-primaryOrange" />
                      {(product as Car).body_type}
                    </span>
                  </p>
                  <RxDividerVertical />
                  <p className="flex items-center gap-1">
                    {' '}
                    <span>Body Type:</span>{' '}
                    <span className="text-darkBlue font-extrabold flex items-center gap-1">
                      {' '}
                      <GoDotFill className="text-primaryOrange" />
                      {(product as Car).body_type}
                    </span>
                  </p>
                </div>
              )} */}

              <p>
                <span className="text-darkBlue ">Fixed Price</span>
              </p>
              <p>
                <span className="text-[#e65800] font-bold text-3xl">
                  {formatAmount(Number(product.price))}
                </span>
              </p>

              {/* seller */}

              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center py-4 border-b w-full border-secondaryTextColor border-t gap-2">
                  <Image
                    src="/categories/seller.png"
                    alt="seller's picture"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <p className="text-sm font-semibold">
                      Listed by Marathona real estate solutions
                    </p>
                    <p className="flex space-x-1 ">
                      {Array.from({ length: 5 }, (_, i) => {
                        const index = i + 1;
                        return (
                          <StarIcon
                            key={index}
                            className={`cursor-pointer transition-colors duration-200 
                                 text-[#FFD700]
                                   
                                 `}
                          />
                        );
                      })}
                      <span>214 reviews</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* <p className="flex items-center gap-1">
                <span>Condition:</span>
                <span className="text-darkBlue font-extrabold flex items-center gap-1">
                  <GoDotFill className="text-secondaryTextColor" />
                  {product.condition}
                </span>
              </p> */}

              <PlaceBidModal
                current_price={Number(product.price)}
                starting_bid={Number(product.starting_bid)}
                reserved_price={Number(product.reserve_price)}
                minimum_bid_increment={Number(product.minimum_bid_increment)}
                incremental_bid_amount={Number(product.id)}
                endTime={product.end_time}
                productId={productId}
              />

              <div className="bg-[#E8E8F4] px-4 py-3 rounded-md flex items-center gap-2  md:justify-between">
                <span className="p-3 rounded-full bg-white">
                  <IoFlashOutline size={24} />
                </span>
                <p className="flex flex-col md:flex-row text-sm md:text-base md:gap-1">
                  <span className="text-darkBlue font-bold">
                    People are checking this out.
                  </span>
                  <span className="text-darkBlue">
                    4 have added this to their saved items.
                  </span>
                </p>
              </div>

              {/* Detailed delivery description */}
              <section className="space-y-3 my-4">
                <div className=" flex items-center gap-4">
                  <span className="p-3 rounded-full bg-[#F0F0F0]">
                    <MdLockOutline size={24} />
                  </span>
                  <Image
                    src="/home/logo.svg"
                    width={60}
                    height={24}
                    className="object-contain mb-4"
                    alt="Distress Sales Logo"
                  />
                  <span>Secure checkout.</span>
                  <button className="underline text-xs ">Learn more</button>
                </div>

                <div className=" flex items-center gap-4">
                  <span className="p-3 rounded-full bg-[#F0F0F0]">
                    <BsTruck size={24} />
                  </span>

                  <span>Get instant delivery rates from GIGL.</span>
                  <button className="underline text-xs font-semibold text-darkBlue">
                    Learn more
                  </button>
                </div>

                <p className="flex gap-10 text-sm md:text-base items-center">
                  <span className="text-darkBlue font-semibold w-24 md:w-20">
                    Pick up:
                  </span>{' '}
                  <div className="flex flex-col items-start">
                    <span className="text-darkBlue">
                      Buyer responsible for vehicle pick-up or shipping.
                    </span>
                    <button className="text-darkBlue text-xs  underline font-semibold">
                      see details
                    </button>
                  </div>
                </p>

                <p className="flex gap-10 text-sm md:text-base  items-center">
                  <span className="text-darkBlue font-semibold w-20">
                    Shipping:
                  </span>{' '}
                  <div className="flex flex-col items-start">
                    <span className="text-darkBlue">
                      See item description for shipping details
                    </span>
                    <span className="">Located in: Lekki, Lagos, Nigeria</span>
                  </div>
                </p>

                <p className="flex gap-10 text-sm md:text-base  items-center">
                  <span className="text-darkBlue font-semibold w-20">
                    Delivery:
                  </span>{' '}
                  <span className="text-darkBlue">varies</span>
                </p>

                <p className="flex gap-10 text-sm md:text-base  items-center">
                  <span className="text-darkBlue font-semibold w-20">
                    Returns:
                  </span>{' '}
                  <div className="flex flex-col items-start">
                    <span className="text-darkBlue">
                      Seller does not accept returns.
                    </span>
                    <button className="text-darkBlue text-xs font-semibold underline">
                      Learn more
                    </button>
                  </div>
                </p>

                <p className="flex gap-12 md:gap-10 text-sm md:text-base  items-center">
                  <span className="text-darkBlue font-semibold w-24 md:w-20">
                    Payments:
                  </span>{' '}
                  <span className="text-darkBlue">
                    Deposit of NGN ₦300,000 within 1hr of bid. This will be
                    refunded to your wallet if you&apos;re outbidded
                  </span>
                </p>

                <hr />
                <div>
                  <div className="flex justify-between">
                    <h3 className="font-semibold">Shop with confidence</h3>
                    <KeyboardArrowUpIcon className="text-secondaryTextColor" />
                  </div>
                  <div className="flex items-center gap-4">
                    <GppGoodIcon className="" />
                    <div>
                      <p>DistressSales Money Back Guarantee</p>
                      <p>
                        Get the item you ordered or your money back.
                        <Link
                          className="text-xs ml-2 underline text-darkBlue"
                          href={`/`}
                        >
                          Learn more
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>

        {/* about & summmary */}
        <section className="space-y-4 md:px-[2%]">
          {/* <ProductNav onStateChange={handleStateChange} /> */}
          <DynamicNav
            states={dynamicStates}
            onStateChange={handleStateChange}
            initialState={detailState}
          />
          {detailState === 'about' ? (
            <div className="flex flex-col md:flex-row w-full gap-10">
              {product.data?.length !== 0 && (
                <div className="flex md:flex-row flex-col gap-1 md:items-center  font-normal text-sm text-[#454545] mb-[15px]">
                  {product.data?.slice(0, 3).map((item, index) => (
                    <p
                      key={index}
                      className="flex gap-1 text-xs md:text-sm items-center"
                    >
                      <GoDotFill className="text-primaryOrange" />
                      <span>{Object.values(item)[0]}</span>
                    </p>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="space-y-3">
              <p className="flex gap-2 items-center">
                Inspected by: <span>James Eze (Agent ID: F234)</span>
                <span className="text-[#17B26A] flex gap-1 items-center px-2 py-1 rounded-full shadow-sm bg-[#ECFDF3]">
                  <GoDotFill />
                  Approved
                </span>
              </p>
              <div className="space-y-1">
                <p className="font-semibold text-xl flex items-center gap-1">
                  <HiOutlineMegaphone size={24} />
                  Notes
                </p>
                <p className="font-semibold text-xl">
                  “The property is in good structural condition. Roofing and
                  plumbing are intact. Minor paintwork needed. Located in a
                  secure, residential zone”
                </p>
              </div>
            </div>
          )}
        </section>

        {/* about the seller */}
        <section className="flex flex-col md:flex-row bg-[#FFEFE64D] py-5 gap-10 md:px-[2%]">
          {/* left */}
          <div className="w-full md:w-[40%] space-y-3 border-r border-[#EAE6E9] md:pr-10">
            <div className="flex gap-2 items-center">
              <span className=" p-8 rounded-full bg-[#F2F4F7] text-[#667085] font-bold text-3xl">
                SE
              </span>
              <div>
                <h4 className="text-xl font-semibold">Thecarsalesman</h4>
                <p>
                  <span className="text-darkBlue">100% positive feedback</span>
                </p>
                <p>455 item sold</p>
              </div>
            </div>
            <p className="flex gap-2 font-semibold">
              <CiCalendar size={24} className="text-[#585858]" /> Joined Sept
              2003
            </p>
            {/* <button
              // onClick={() => set(true)}
              className="bg-primaryOrange text-white rounded-lg px-4 w-full py-2 hover:bg-inherit hover:text-primaryOrange border hover:border-primaryOrange"
            >
              Schedule an inspection
            </button> */}
          </div>

          <div className="w-full md:w-[60%] space-y-3">
            <div className="flex justify-between mb-5">
              <h2 className="text-lg font-semibold">Seller Feedback</h2>
              <button className="flex items-center border-[#D0D5DD] border rounded-xl gap-2 px-4 py-2">
                <IoFilterOutline />
                All Ratings
              </button>
            </div>
            <SellerFeedBack />
          </div>
        </section>

        {/* <section className="mt-10">
          <h2 className="mb-4 md:text-2xl font-bold">Related Item</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {repeatedComponents(
              2,
              <ProductCard
                imageUrl="/home/auction-house.png"
                title="2601 Apapa close, Lekki"
          
              />
            )}
            {repeatedComponents(
              2,
              <ProductCard
                productType="auction"
                imageUrl="/home/auction-house.png"
                title="2601 Apapa close, Lekki"
          
              />
            )}
          </div>
        </section> */}
      </main>
    </div>
  );
}
