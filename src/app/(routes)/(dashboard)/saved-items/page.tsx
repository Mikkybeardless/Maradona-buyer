import { SavedItem } from '@/app/_components/cards/savedItems-card';

import { repeatedComponents } from '@/app/_components/common/repeatComp';
import Link from 'next/link';
import { IoTrashOutline } from 'react-icons/io5';

export default function Page() {
  const show = true;
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
  return (
    <div className=" space-y-5">
      <main>
        <div className="space-y-5 bg-white p-5 rounded-lg shadow-md md:pb-8 ">
          <div className="flex justify-between">
            <h1 className="text-xl font-semibold">Saved</h1>
            <div className="flex items-center gap-5">
              <button className="text-[#98A2B3] p-4 py-2 rounded-lg bg-[#F2F4F7] ">
                <IoTrashOutline size={24} />
              </button>
              <button className="text-[#98A2B3] px-4 py-2 rounded-lg bg-[#F2F4F7] ">
                Add to cart
              </button>
            </div>
          </div>
          <hr />
          {show ? (
            <div className="flex flex-col gap-3 px-2">
              {repeatedComponents(5, <SavedItem item={item} />)}
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
