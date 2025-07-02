import { FaApple, FaGooglePlay } from 'react-icons/fa6';

export default function Download() {
  return (
    <section className="mt-20 flex  flex-col md:flex-row items-center gap-6">
      {/* Left Section */}
      <div className="rounded-[48px] flex flex-col items-center p-6 sm:p-8 md:p-12 pb-0 w-full md:w-[55%] bg-[#F5F5F5] text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
          Download the app for a better shopping experience
        </h1>

        {/* App Store & Play Store Buttons */}
        <div className="flex flex-col sm:flex-row w-full mt-8 gap-4">
          <button className="rounded-[100px] w-full sm:w-[45%] py-3 flex items-center justify-center gap-x-2.5 text-white bg-[#040421]">
            <FaGooglePlay className="w-6 h-6 sm:w-8 sm:h-8" />
            <span className="text-lg sm:text-xl font-semibold">Play Store</span>
          </button>
          <button className="rounded-[100px] w-full sm:w-[45%] py-3 flex items-center justify-center gap-x-2.5 text-white bg-[#040421]">
            <FaApple className="w-6 h-6 sm:w-8 sm:h-8" />
            <span className="text-lg sm:text-xl font-semibold">App Store</span>
          </button>
        </div>

        {/* App img */}
        <img
          className="mt-5 w-[80%] sm:w-[60%] md:w-[50%]"
          src={`/home/IOS-app-display.png`}
          alt="IOS app"
        />
      </div>

      {/* Right Section */}
      <div className="rounded-[48px] flex flex-col items-center p-6 sm:p-8 md:p-12 w-full md:w-[40%] bg-[#040421] text-[#FFEFE6] text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">OR</h1>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-6 sm:mt-12 leading-tight">
          Scan the QR code to download the app for free
        </h1>

        {/* QR Code img */}
        <img
          className="mt-10 sm:mt-16 w-[50%] sm:w-[40%] md:w-[60%] rounded-[21px]"
          src={`/home/qr-code.png`}
          alt="QR-code"
        />
      </div>
    </section>
  );
}
