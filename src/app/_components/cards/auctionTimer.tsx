import React, { useState, useEffect } from 'react';
import { PiHourglassLowDuotone } from 'react-icons/pi';

export const AuctionTimer = ({ endTime = '2025-10-09 14:34:00' }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false,
  });

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
  const formatTime = (time: number) => {
    return time.toString().padStart(2, '0');
  };

  const closedToEnd = timeLeft.days < 3 && !timeLeft.isExpired;

  if (timeLeft.isExpired) {
    return (
      <div className="flex bg-[#F0F0F0] w-full text-red-500 items-center justify-center px-4 py-2">
        <span className="text-lg font-bold"> Auction Closed</span>
      </div>
    );
  }

  return (
    <div
      className={`flex bg-[#F0F0F0] w-full ${closedToEnd ? 'text-[#585858]' : 'text-red-500'} items-center justify-around px-4 py-2 gap-2`}
    >
      <PiHourglassLowDuotone size={30} />

      <div className="flex items-center text-sm md:text-lg flex-col">
        <span className="font-bold">{formatTime(timeLeft.days)}</span>
        <span className="text-xs">Days</span>
      </div>

      <span className="md:text-3xl font-bold">:</span>

      <div className="flex items-center text-sm md:text-lg flex-col">
        <span className="font-bold">{formatTime(timeLeft.hours)}</span>
        <span className="text-xs">Hours</span>
      </div>

      <span className="md:text-3xl font-bold">:</span>

      <div className="flex items-center text-sm md:text-lg flex-col">
        <span className="font-bold">{formatTime(timeLeft.minutes)}</span>
        <span className="text-xs">Mins</span>
      </div>

      <span className="md:text-3xl font-bold">:</span>

      <div className="flex items-center text-sm md:text-lg flex-col">
        <span className="font-bold">{formatTime(timeLeft.seconds)}</span>
        <span className="text-xs">Secs</span>
      </div>
    </div>
  );
};
