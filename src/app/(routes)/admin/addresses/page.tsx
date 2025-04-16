import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import { PhoneCall, Plus, Trash2 } from "lucide-react";

export default function AddressesPage() {
  return (
    <div className="flex flex-col items-center gap-4 px-1 md:px-10  ">
      <h1 className="font-bold text-3xl">Saved Addresses</h1>

      {/* default address */}
      <div className="flex flex-col border border-gray-300 pb-5  rounded-lg  w-full max-w-2xl">
        <div className="flex items-center justify-between gap-1 px-4 py-2 rounded-md">
          <span className="text-defaultBlue md:text-lg font-bold">
            Default Delivery Address
          </span>{" "}
          <span className="flex gap-2 text-defaultBlue bg-[#FFF9F5] cursor-pointer rounded-2xl px-3 py-1">
            <BorderColorOutlinedIcon />
            Edit{" "}
          </span>{" "}
          <span className="flex gap-2 text-secondaryOrange cursor-pointer rounded-2xl px-3 py-1">
            <Trash2 />
            Delete
          </span>
        </div>
        <hr />
        <div className="p-4 space-y-3">
          <p className="flex gap-2">
            <PersonOutlineOutlinedIcon className="text-secondaryOrange" />
            <span className="font-bold">Rosemary Sunday</span>
          </p>
          <p className="flex gap-2">
            <FmdGoodOutlinedIcon className="text-secondaryOrange" />
            <span>Mubinu. Osogbo, Osun, Ifedayo, Osun State , Nigeria</span>
          </p>
          <p className="flex gap-2">
            <PhoneCall className="text-secondaryOrange" />
            <span>07063696730</span>
          </p>
        </div>
      </div>

      {/* other addresses */}
      <div className="flex flex-col border border-gray-300 pb-5  rounded-lg  w-full max-w-2xl">
        <div className="p-4 space-y-3">
          <p className="flex gap-2">
            <PersonOutlineOutlinedIcon className="text-secondaryOrange" />{" "}
            <span className="font-bold">Rosemary Sunday</span>
          </p>
          <p className="flex gap-2">
            <FmdGoodOutlinedIcon className="text-secondaryOrange" />
            <span>Mubinu. Osogbo, Osun, Ifedayo, Osun State , Nigeria</span>
          </p>
          <p className="flex gap-2">
            <PhoneCall className="text-secondaryOrange" />
            <span>07063696730</span>
          </p>
        </div>
        <hr />
        <div className="flex items-center justify-between px-4 py-2 rounded-md">
          <span className="text-blue-700 flex gap-2 cursor-pointer md:text-lg ">
            <BorderColorOutlinedIcon />
            Change to default Delivery Address
          </span>{" "}
          <span className="flex gap-2 text-defaultBlue bg-[#FFF9F5] cursor-pointer rounded-2xl px-3 py-1">
            <BorderColorOutlinedIcon />
            Edit{" "}
          </span>{" "}
          <span className="flex gap-2 text-secondaryOrange cursor-pointer rounded-2xl px-3 py-1">
            <Trash2 />
            Delete
          </span>
        </div>
      </div>

      <div className="flex justify-center  items-center border-2 border-spacing-4 border-dashed border-gray-300 p-20 rounded-lg  w-full max-w-2xl">
        <Plus className="cursor-pointer" />
      </div>
    </div>
  );
}
