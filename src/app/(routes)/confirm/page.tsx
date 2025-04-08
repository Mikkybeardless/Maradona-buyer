"use client";

import Done from "../../_assets/done-animation.json";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function Page() {
  const router = useRouter();
  return (
    <div className="flex justify-center items-center pt-[10rem] md:pt-12">
      <div className="w-full sm:w-[90%] md:w-[70%] lg:w-[35%] flex flex-col items-center">
        <Lottie
          className="max-w-[40%] sm:max-w-[50%]"
          loop={true}
          animationData={Done}
        />
        <p className="text-lg font-medium text-center">
          Payment was successfully
        </p>
        <button
          onClick={() => router.back()}
          className="mt-10 w-[50%] md:w-full text-center rounded-lg py-3 sm:py-4 text-white bg-secondaryOrange hover:bg-inherit hover:border-secondaryOrange hover:text-secondaryOrange border"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
