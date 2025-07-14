'use client';

import { HistoryItem } from '@/app/_components/cards/history-card';
// import { SavedItem } from '@/app/_components/cards/savedItems-card';
import DynamicNav, { StateObject } from '@/app/_components/common/DetailNav';

import { repeatedComponents } from '@/app/_components/common/repeatComp';
import Link from 'next/link';
import { useState } from 'react';

type DetailState = 'bids' | 'orders' | 'did-not-win';
export default function Page() {
  const [detailState, setDetailState] = useState<DetailState>('bids');
  const item = {
    imageUrl: '/images/red-car.png',
    title: '2003 Toyota SR5 1 OWNER FL TITLE 31 SERVICES',
    transmission: 'Automatic',
    condition: 'New',
    mileage: '49,067',
    location: 'Lagos',
    color: 'Blue',
    hp: '49,067',
    miles: '10,000',
    km: '16,093',
    yourBidPrice: 79000000,
    highestBidPrice: 82000000,
    bids: 5,
    time: {
      days: 2,
      hours: 5,
      minutes: 30,
    },
    type: 'car',
  };

  const dynamicStates: StateObject[] = [
    { state: 'bids', label: 'Bids', id: 1 },
    { state: 'orders', label: 'Orders', id: 2 },
    { state: 'did-not-win', label: "Didn't win", id: 2 },
  ];

  const handleStateChange = (state: DetailState) => {
    setDetailState(state);
  };

  return (
    <div className=" space-y-5">
      <main>
        <div className="space-y-5 bg-white p-5 rounded-lg shadow-md md:pb-8 ">
          <DynamicNav
            states={dynamicStates}
            initialState={detailState}
            onStateChange={handleStateChange}
          />

          {detailState === 'bids' ? (
            <div className="flex flex-col gap-3">
              {repeatedComponents(5, <HistoryItem item={item} />)}
            </div>
          ) : (
            <div className=" flex items-center justify-center min-h-[400px] bg-[#F0F0F0] p-5 ">
              <div className="flex flex-col items-center gap-5">
                <h1 className="text-xl font-semibold">
                  You have no saved items
                </h1>
                <Link
                  href={'/'}
                  className="bg-primaryOrange text-white cursor-pointer px-4 py-2 rounded-lg"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
