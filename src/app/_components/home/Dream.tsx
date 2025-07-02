import { GoChevronRight } from 'react-icons/go';

export default function Dream() {
  return (
    <section className="hidden md:flex  bg-[url('/home/paysection.webp')]  py-10">
      <div className="w-full md:w-[45%]">
        <h2 className=" text-[30px] md:text-[60px] text-center font-extrabold w-[200px] md:w-[600px] text-white mb-4">
          Unlock Your <span className="text-primaryOrange">Dream Home</span>
        </h2>
        <div className="bg-primaryOrange px-6 py-3 w-full mb-[160px] ">
          <button className="bg-white px-6 py-2 flex items-center gap-2 rounded-full text-black">
            <span className="bg-primaryOrange p-4 rounded-full text-white">
              <GoChevronRight />
            </span>{' '}
            <span className="font-extrabold text-xl"> BID NOW!!!</span>
          </button>
        </div>

        <div className="flex md:ml-24 gap-3 font-gunship text-white items-center">
          <div className="flex  items-center text-lg flex-col gap-5">
            <span className="text-[60px]  font-bold">02 :</span>
            <span className="text-xs">Days</span>
          </div>

          <div className="flex  items-center text-lg flex-col gap-5">
            <span className="text-[60px] font-bold">22 :</span>
            <span className="text-xs">Hours</span>
          </div>
          <div className="flex  items-center text-lg flex-col gap-5">
            <span className="text-[60px] font-bold">37 :</span>
            <span className="text-xs">Mins</span>
          </div>

          <div className="flex  items-center text-lg flex-col gap-5">
            <span className="text-[60px] font-bold">59</span>
            <span className="text-xs font-extralight">Secs</span>
          </div>
        </div>
      </div>

      <div className="w-[55%] flex items-center relative pr-10 ">
        <div className="border w-[200.1px] h-[341.475px] border-[#FFF] bg-[url('/home/dream/dream-1.png')]"></div>
        <div className="border w-[364.675px] h-[458.925px] border-[#FFF] bg-[url('/home/dream/dream-2.png')] relative">
          <div className="absolute -bottom-10 w-[315px] left-4 ">
            <h4 className="bg-primaryOrange text-white rounded-t-2xl text-center px-4 py-1 w-full">
              Starting Price
            </h4>
            <p className="text-[40px] font-extrabold rounded-b-2xl py-2 bg-white text-center">
              ₦ 23,000,000
            </p>
          </div>
        </div>
        <div className="border w-[200.1px] h-[341.475px] border-[#FFF] bg-[url('/home/dream/dream-3.png')]"></div>
      </div>
    </section>
  );
}
