'use client';

import { repeatedComponents } from '@/app/_components/common/repeatComp';

import OrderSummary from '@/app/_components/cart/OrderSummary';
import { CartItem } from '@/app/_components/cart/Cart-card';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
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
  bids: 5,
  price: 20000000,
  time: {
    days: 2,
    hours: 5,
    minutes: 30,
  },
  type: 'car',
};
export default function Page() {
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    setCartItems([item, item, item, item]);
  }, []);

  return (
    <>
      {cartItems.length > 0 ? (
        <main className="p-4 md:p-10 flex flex-col md:flex-row gap-5">
          <div className="flex-1 space-y-6">
            <section className="bg-white shadow-sm p-5">
              <h1 className="md:text-2xl font-bold">Cart (4)</h1>

              <div className="flex items-center gap-5">
                <div className="flex items-center gap-3">
                  <input
                    id="all"
                    type="checkbox"
                    className="accent-primaryOrange w-4 h-4 transform  hover:scale-125 transition-transform duration-200 ease-in-out"
                  />
                  <label htmlFor="all">Select all items</label>
                </div>

                <button className="text-blue-600 hover:underline">
                  Delete Selected items
                </button>
              </div>
            </section>
            <section className="bg-white space-y-4 py-4  shadow-sm">
              {/* {repeatedComponents(4, <CartItem item={item} />)} */}
              {cartItems.map((item, index) => (
                <CartItem key={index} item={item} />
              ))}
            </section>
          </div>
          <div className=" w-full md:w-[35%] h-fit">
            <OrderSummary />
          </div>
        </main>
      ) : (
        <main className="p-4 md:px-16 flex flex-col  gap-5">
          <section className="bg-white shadow-sm p-5">
            <h1 className="md:text-2xl font-bold">Cart (0)</h1>
          </section>

          <section className="bg-white space-y-4 flex flex-col items-center justify-center min-h-[400px] py-4 shadow-sm">
            <div className="flex flex-col gap-4 items-center w-full md:w-[350px] justify-center">
              <div className="relative w-full h-40 md:w-[350px] mb-12 md:h-[200px]">
                <Image
                  src="/images/cart.png"
                  alt="empty cart"
                  width={500}
                  className="object-contain"
                  height={350}
                />
              </div>
              <h2 className="text-[#585858] font-bold text-2xl">
                Your Cart is empty
              </h2>
              <Link
                href="/"
                className="bg-[#E65800] flex justify-center rounded-lg w-full text-white px-6 py-2"
              >
                Explore items
              </Link>
            </div>
          </section>
        </main>
      )}
    </>
  );
}
