import { GoDotFill } from 'react-icons/go';

export const SellerFeedBack = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between">
        <p className="flex gap-1 items-center">
          {' '}
          <span className=" p-2 rounded-full bg-[#F2F4F7] text-[#667085] font-bold text-lg">
            SE
          </span>
          <span>U**ug</span>
          <GoDotFill />
          <span>Past 6 months</span>
        </p>
        <p>
          <span className="">Verified purchase</span>
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-10">
        <p className="w-full md:w-[70%]">
          <span className="text-darkBlue font-semibold">
            Excellent communication. Not an easy task to ship a removable
            convertible hard top for an almost 60 year old Corvette. I was a bit
            nervous. Packaged and shipped with special care. Private shipping
            was excellent. Top arrived in custom made crate nestled in without a
            scratch. An exceptional seller! Would buy from again without
            hesitation.
          </span>
        </p>
        <div className="bg-[#D9D9D9] flex items-start w-[130px] h-[130px]"></div>
      </div>

      <p>
        <span className="text-[#A3A3B3] text-xs">
          Corvette C2 Hard Top Fits 1963-67 (#116370)
        </span>
      </p>
    </div>
  );
};
