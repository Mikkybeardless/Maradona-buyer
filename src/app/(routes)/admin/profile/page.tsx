import Image from "next/image";
import PhotoCameraOutlinedIcon from "@mui/icons-material/PhotoCameraOutlined";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { Copy } from "lucide-react";
export default function Page() {
  return (
    <div className=" flex flex-col bg-white w-full py-10 pl-6 pr-8 justify-center  gap-4">
      <div className="flex gap-6 items-start">
        <div className="w-24 h-24 relative">
          <Image
            src="/admin/profile.png"
            alt="seller's picture"
            fill
            className="w-full h-full object-cover rounded-full"
          />

          <PhotoCameraOutlinedIcon className="absolute bottom-0 right-0 w-8 h-8 bg-[#FEF7F5] text-secondaryOrange rounded-full p-1 cursor-pointer" />
        </div>
        <div>
          <h1 className="text-darkBlue font-bold text-lg">Rosemary Sunday</h1>
          <p className="flex gap-4 items-center text-sm text-gray-500">
            Seller DS1234M <Copy className="text-secondaryOrange w-4 h-4" />
          </p>
          <p className="flex gap-4 items-center text-sm text-gray-500">
            rosiesunday20.aj@gmail.com{" "}
            <Copy className="text-secondaryOrange w-4 h-4" />
          </p>
          <p className="flex gap-2 items-center text-sm text-gray-500">
            <span>Online</span>{" "}
            <FiberManualRecordIcon
              sx={{ fontSize: "14px" }}
              className="text-green-600 mr-1"
            />
            <span>Lagos, Nigeria</span>
          </p>
        </div>
      </div>

      <form action="">
        <div className="space-y-4">
          <div className="flex flex-col gap-1 bg-[#F7F7F7] py-2 px-4 ">
            <label className="text-gray-500 font-bold text-xs" htmlFor="f-name">
              First Name:
            </label>
            <input
              id="f-name"
              placeholder="Rosemary"
              className="w-full outline-none bg-transparent placeholder:text-gray-500"
              type="text"
            />
          </div>

          <div className="flex flex-col gap-1 bg-[#F7F7F7] py-2 px-4 ">
            <label className="text-gray-500 font-bold text-xs" htmlFor="l-name">
              Last Name:
            </label>
            <input
              id="l-name"
              placeholder="Sunday"
              className="w-full outline-none bg-transparent placeholder:text-gray-500"
              type="text"
            />
          </div>

          <div className="flex flex-col gap-1 bg-[#F7F7F7] py-2 px-4 ">
            <label className="text-gray-500 font-bold text-xs" htmlFor="email">
              Email:
            </label>
            <input
              id="email"
              placeholder="rosiesunday20.aj@gmail.com"
              className="w-full outline-none bg-transparent placeholder:text-gray-500"
              type="text"
            />
          </div>

          <div className="flex flex-col gap-1 bg-[#F7F7F7] py-2 px-4 ">
            <label className="text-gray-500 font-bold text-xs" htmlFor="phone">
              Phone No
            </label>
            <input
              id="phone"
              placeholder="08023456788"
              className="w-full outline-none bg-transparent placeholder:text-gray-500"
              type="text"
            />
          </div>
        </div>
        <div className="flex justify-center px-[5rem] mt-3">
          <button className="bg-secondaryOrange w-full hover:border-secondaryOrange hover:bg-inherit hover:text-secondaryOrange border text-white  px-4 py-2 rounded-md mt-4">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
