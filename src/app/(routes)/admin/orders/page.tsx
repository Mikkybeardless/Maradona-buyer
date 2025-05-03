'use client';

import { OrderCard } from '@/app/_components/cards/order';
import Image from 'next/image';
import { useState } from 'react';

export default function OrdersPage() {
  const [isOrders, setIsOrders] = useState(true);
  const order = {
    imageSrc: '/categories/car.png',
    product: 'Car',
    status: 'In transit',
    date: '2023-10-01',
  };

  const loopArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const orders = () => {
    return loopArray.map((item, i) => {
      return (
        <div key={item}>
          <OrderCard order={{ ...order, id: i }} />
          <hr className="h-[2px] bg-gray-300" />
        </div>
      );
    });
  };
  return (
    <div className="flex flex-col gap-4 md:gap-8 px-4 md:px-0">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-darkBlue">Orders</h2>
        <select className="bg-inherit" name="" id="">
          <option value="All">All</option>
        </select>
      </div>
      <div className="space-y-2 relative ">
        <div className="flex items-center justify-start gap-8">
          <button onClick={() => setIsOrders(true)}>Ongoing</button>
          <button onClick={() => setIsOrders(false)}>Canceled</button>
        </div>
        <div
          className={`w-[60px] h-1 absolute rounded-lg ${isOrders ? 'left-0' : 'left-[87px]'} bottom-0 bg-darkBlue`}
        ></div>
        <hr className="h-[2px] bg-gray-300" />
      </div>
      {isOrders ? (
        <div className="flex flex-col gap-4 md:gap-8 px-4 md:px-0">
          {orders()}
        </div>
      ) : (
        <div className="flex flex-col gap-y-4 items-center justify-center h-[300px]">
          <Image
            src="/notifications/no-notification.png"
            width={200}
            height={200}
            alt="no-content Image"
          />
          <p className="text-secondaryTextColor">No Canceled Order</p>
        </div>
      )}
    </div>
  );
}
