'use client';
import HeroSection from '@/app/_components/home/Hero';
import Payment from '@/app/_components/home/Payments';
import Dream from '@/app/_components/home/Dream';
import { useState } from 'react';
import MoreForYou from '@/app/_components/home/MoreForYou';
import Download from '@/app/_components/home/Download';
import AuctionProduct from '@/app/_components/home/AuctionProduct';
import SpecificProducts from '@/app/_components/home/SpecificProducts';

export default function Home() {
  const [homeState, setHomeState] = useState<HomeState>('distress');

  return (
    <>
      <HeroSection homeState={homeState} setHomeState={setHomeState} />
      {/* distress home */}
      {homeState === 'distress' ? (
        <div className="flex flex-col gap-10 mt-8  ">
          {/* <Categories /> */}
          <Payment />
          <AuctionProduct />
          <Dream />
          <MoreForYou />
          <Download />
        </div>
      ) : (
        <SpecificProducts homeState={homeState} />
      )}
    </>
  );
}
