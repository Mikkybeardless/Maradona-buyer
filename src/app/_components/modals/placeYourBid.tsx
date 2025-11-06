'use client';

import { useEffect, useState } from 'react';
import ModalWrapper from './modalWrapper';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { formatAmount, nairaToUsd } from '@/app/Utils/util';
import PriceInput from '../common/priceInput';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { Spinner } from '../common/spinner';

interface PlaceBidModalProps {
  btnStyle?: string;
  title?: string;
  productId: number;
  starting_bid: number;
  reserved_price: number;
  incremental_bid_amount: number;
  minimum_bid_increment: number;
  current_price: number;
  endTime: string;
}

export const PlaceBidModal = ({
  btnStyle = 'border mt-10  hover:border-primaryOrange hover:bg-inherit  bg-primaryOrange hover:text-primaryOrange text-white w-full rounded-lg px-2 py-2',
  title = 'Place bid',
  starting_bid,
  reserved_price,
  incremental_bid_amount,
  minimum_bid_increment,
  current_price,
  productId,
  endTime,
}: PlaceBidModalProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [bid, setBid] = useState('');
  const router = useRouter();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false,
  });

  useEffect(() => {
    console.log('amounts', {
      incremental_bid_amount,
      minimum_bid_increment,
    });
  }, []);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const end = new Date(endTime).getTime();
      const difference = end - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({
          days,
          hours,
          minutes,
          seconds,
          isExpired: false,
        });
      } else {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isExpired: true,
        });
      }
    };

    // Calculate immediately
    calculateTimeLeft();

    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, [endTime]);

  // Format numbers to always show 2 digits
  interface FormatTimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    isExpired: boolean;
  }

  const formatTime = (time: number): string => {
    return time.toString().padStart(2, '0');
  };

  const handleBid = async () => {
    // Handle bid submission logic here
    setLoading(true);
    if (!bid) {
      setLoading(false);
      return toast.warn('please enter a bid amount');
    }
    try {
      await axios.get('/api/auth/check-auth');
      const response = await axios.post('/api/auctions/place-bid', {
        productId,
        amount: bid,
      });
      if (response.status === 201) {
        toast.success('Bid placed successfully');
        setIsModalOpen(false);
      }
    } catch (error) {
      console.error('Bid submission error:', error);
      if (axios.isAxiosError(error) && error.response) {
        if (error.response.status === 401) {
          toast.error('You must be logged in to place a bid.');
          const actionData = {
            name: 'postLoginBid',
            bid,
          };
          Cookies.set(`${actionData.name}`, JSON.stringify(actionData));
          const currentPath = window.location.pathname + window.location.search;
          router.push(`/login?redirect=${encodeURIComponent(currentPath)}`);
        }
      } else {
        // Network error or other non-Axios error
        toast.error('Network error. Please check your connection.');
      }
    } finally {
      setLoading(false);
      setBid('');
    }
  };

  useEffect(() => {
    const savedAction = Cookies.get('postLoginBid');
    if (savedAction) {
      const actionData = JSON.parse(savedAction);
      // Handle the action data (e.g., pre-fill the form)
      setBid(actionData.bid);
      setIsModalOpen(true);
      Cookies.remove('postLoginBid');
    }
  }, []);

  if (timeLeft.isExpired) {
    return (
      <div className="flex bg-[#F0F0F0] w-full text-red-500 items-center justify-center px-4 py-2">
        <span className="text-lg font-bold"> Auction Closed</span>
      </div>
    );
  }

  const formatTimeLeft = (time: FormatTimeLeft) => {
    const { days, hours, minutes, seconds } = time;
    return `${formatTime(days)}d : ${formatTime(hours)}h : ${formatTime(
      minutes
    )}m : ${formatTime(seconds)}s`;
  };

  return (
    <section id="place-bid-modal">
      <button
        type="button"
        className={btnStyle}
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        {title}
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
              setBid('');
            }}
          >
            <CloseRoundedIcon />
          </button>
          <h2 className="text-2xl font-bold ">Place your bid</h2>
          {/* <p className="text-secondaryTextColor">+ ₦200,000 shipping</p>
          <p className="text-secondaryTextColor text-sm md:text-base">
            {' '}
            (approx. NGN ₦20,000,000 + NGN ₦200,000 shipping = ₦22,000,000)
          </p> */}
          <p className="text-secondaryTextColor">
            Time:{' '}
            <span className="text-[#FE3E3E]">
              {formatTimeLeft(timeLeft)} left
            </span>
          </p>

          <div className="flex justify-between">
            <div className="flex flex-col items-center">
              <p>Starting Bid</p>
              <button
                onClick={() => setBid(String(starting_bid))}
                className="border hover:border-primaryOrange hover:bg-inherit hover:text-primaryOrange rounded-3xl bg-primaryOrange text-white text-xs md:text-base px-2 py-1 md:px-4 md:py-2 mb-2"
              >
                {formatAmount(starting_bid)}
              </button>
            </div>
            <div className="flex flex-col items-center">
              <p>Reserved Price</p>
              <button
                onClick={() => setBid(String(reserved_price))}
                className="border hover:border-primaryOrange hover:bg-inherit hover:text-primaryOrange rounded-3xl bg-primaryOrange text-white text-xs md:text-base px-2 py-1 md:px-4 md:py-2 mb-2"
              >
                {formatAmount(reserved_price)}
              </button>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <hr className="w-[40%]" /> Or <hr className="w-[40%]" />
          </div>
          <p className="text-secondaryTextColor">Your max bid</p>
          <div className="flex justify-between items-center gap-3">
            <PriceInput
              id="bid"
              name="bid"
              value={bid}
              onChange={(val) => setBid(val)}
            />
            <div className="flex items-center justify-center gap-7 h-full w-20 bg-gray-400 rounded-lg p-1">
              <button
                disabled={Number(bid) <= starting_bid}
                className="text-white text-3xl hover:bg-gray-50 hover:text-black cursor-pointer rounded-lg p-1 disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={() =>
                  setBid((prev) =>
                    String(
                      Number(prev) > starting_bid
                        ? Number(prev) - minimum_bid_increment
                        : starting_bid
                    )
                  )
                }
              >
                -
              </button>
              <button
                className="text-white text-2xl hover:bg-gray-50 hover:text-black cursor-pointer rounded-lg p-1 "
                onClick={() =>
                  setBid((prev) =>
                    String(
                      Number(prev) === 0
                        ? starting_bid
                        : Number(prev) + minimum_bid_increment
                    )
                  )
                }
              >
                +
              </button>
            </div>

            <button
              onClick={handleBid}
              className="border hover:border-primaryOrange hover:bg-inherit hover:text-primaryOrange rounded-full bg-primaryOrange text-white px-6 py-2 md:px-12 md:py-4 mb-2"
            >
              {loading ? <Spinner /> : 'Bid'}
            </button>
          </div>
          <p className="text-secondaryTextColor  mb-4">
            <span className="font-semibold"> Current price:</span>{' '}
            <span className="text-green-500 font-semibold">
              {formatAmount(current_price)}
            </span>{' '}
            (approx. {formatAmount(nairaToUsd(current_price), 'USD')})
          </p>
          <p className="text-secondaryTextColor text-xs">
            By selecting Bid, you are committing to buy this item if you are the
            winning bidder.
          </p>
        </div>
      </ModalWrapper>
    </section>
  );
};
