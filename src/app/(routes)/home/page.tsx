'use client';

import HeroSection from '@/app/_components/home/Hero';
import Payment from '@/app/_components/home/Payments';
import Dream from '@/app/_components/home/Dream';
import { useState } from 'react';
import MoreForYou from '@/app/_components/home/MoreForYou';
import Download from '@/app/_components/home/Download';
import { repeatedComponents } from '@/app/_components/common/repeatComp';
import { ProductCard } from '@/app/_components/home/cards/product';
import AuctionProduct from '@/app/_components/home/MoreProduct';
type HomeState = 'distress' | 'houses' | 'cars' | 'lands';

export default function Home() {
  const [homeState, setHomeState] = useState<HomeState>('distress');
  return (
    <>
      <HeroSection homeState={homeState} setHomeState={setHomeState} />
      {/* distress home */}
      {homeState === 'distress' && (
        <div className="flex flex-col gap-10 mt-8  ">
          {/* <Categories /> */}
          <Payment />
          <AuctionProduct />
          <Dream />
          <MoreForYou />
          <Download />
        </div>
      )}

      {/*home houses  */}

      {homeState === 'houses' && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 px-[5%]">
          {repeatedComponents(
            24,
            <ProductCard
              imageUrl="/home/auction-house.png"
              title="2601 Apapa close, Lekki"
              isActive={false}
            />
          )}
        </div>
      )}

      {/* home lands */}

      {homeState === 'lands' && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 px-[5%]">
          {repeatedComponents(
            24,
            <ProductCard
              imageUrl="/home/land/image1.png"
              title="50km2 land in Gwarimpa"
              isActive={false}
            />
          )}
        </div>
      )}

      {/* home cars */}
      {homeState === 'cars' && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 px-[5%]">
          {repeatedComponents(
            24,
            <ProductCard
              imageUrl="/home/carshop.png"
              title="2020 Toyota Camry"
              isActive={false}
            />
          )}
        </div>
      )}
    </>
  );
}
