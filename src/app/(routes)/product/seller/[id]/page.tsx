'use client';

import { useRouter } from 'next/navigation';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import StopCircleIcon from '@mui/icons-material/StopCircle';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Image from 'next/image';

export default async function SellerDetails({
  params,
}: {
  params: { id: string };
}) {
  const id = params.id;
  console.log('Seller ID:', id); // Log the seller ID to the console
  const router = useRouter();
  return (
    <div className="w-full h-screen overflow-y-auto overflow-x-hidden p-10 custom-scrollbar flex flex-col bg-[#F7F7F7]">
      <div className="flex justify-start mb-10">
        <button
          onClick={() => router.back()}
          className="text-defaultBlue font-semibold"
        >
          <KeyboardBackspaceIcon /> Back
        </button>
      </div>
      <main className="">
        <div className="flex gap-20 justify-between relative">
          <div className=" w-[50%]">
            <h3 className="font-semibold text-lg">Detailed seller ratings</h3>
            <p className="mb-4">Average for the last 12 hours</p>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <p>Accurate description </p>
                <hr className="w-[157px] h-1 bg-secondaryTextColor" />
                <span>4.9</span>
              </div>
              <div className="flex justify-between items-center">
                <p>Reasonable Shipping cost</p>
                <hr className="w-[157px] h-1 bg-secondaryTextColor" />{' '}
                <span>4.9</span>
              </div>
              <div className="flex justify-between items-center">
                <p>Shipping Speed</p>
                <hr className="w-[157px] h-1 bg-secondaryTextColor" />
                <span>4.9</span>
              </div>
              <div className="flex justify-between items-center">
                <p>Communication </p>
                <hr className="w-[157px] h-1 bg-secondaryTextColor" />
                <span>4.9</span>
              </div>
            </div>
          </div>
          <div className=" w-[50%]">
            <div>
              <h4>
                <span className="mr-3 font-semibold text-lg">
                  Seller&apos;s feedback
                </span>{' '}
                <span>(5,079)</span>
              </h4>
              <div className="flex gap-4 justify-between items-center mb-5">
                <div className="flex gap-3">
                  <StopCircleIcon className="text-secondaryOrange" />
                  <span>K****K (90)</span>
                  <FiberManualRecordIcon className="text-green-600 text-[5px]" />
                  <span>2 months ago</span>
                </div>
                <p>Verified purchase</p>
              </div>

              <div className="flex jsutify-between gap-10 mb-4">
                <p className="">
                  Item is a nice one, and exactly as described. My only problem
                  was the shipping cost which too high and the packaging
                  wasn&apos;t very impressive. aside these, i love their
                  customer service and my experience with them is awesome.
                </p>
                <div className=" h-[100px] w-[27rem] rounded-sm relative">
                  <Image
                    src="/categories/review-pic.png"
                    fill
                    className="object-contain w-full h-full rounded-sm"
                    alt="reviewed product image"
                  />
                </div>
              </div>
              <p className="text-center">
                Toyota Camry SE (2024) Engine: 2.5L 4-cylinder, Colour: Blue
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
