import { FaRegBell, FaRegHeart, FaRegUser } from "react-icons/fa6";
import { GrCart } from "react-icons/gr";

export default function Layout({ children }) {
  return (
    <div>
      <nav className="flex justify-between items-center py-2 w-full px-3 sm:px-4 md:px-[8%] bg-white shadow-sm">
        <img
          className="h-[30px] md:h-[60px] w-auto flex"
          src={`/home/logo.svg`}
          alt="Logo"
        />
        <div className="flex gap-2 xs:gap-3 sm:gap-4 md:gap-6 items-center">
          <FaRegUser className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer hover:text-defaultOrange" />
          <FaRegHeart className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer hover:text-defaultOrange" />
          <FaRegBell className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer hover:text-defaultOrange" />
          <GrCart className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer hover:text-defaultOrange" />
        </div>
      </nav>
      {children}
    </div>
  );
}
