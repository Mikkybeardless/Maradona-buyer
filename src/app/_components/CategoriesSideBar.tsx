import Image from "next/image";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { RadioCard } from "./common/radio";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";

const categories = [
  { name: "Vehicle", image: "/images/vehicle.svg" },
  { name: "House", image: "/categories/house.png" },
  { name: "Land", image: "/categories/land.png" },
];

const priceRange = [
  { name: "Under 15m to 239 ads", value: "Under 15m" },
  { name: "15 to 70 M - 956 ads", value: "15 to 70 M" },
  { name: "180 to 460 M - 996 ads", value: "180 to 460 M" },
  { name: "More than 460 M - 199 ads", value: "More than 460 M" },
];

const discounts = [
  { name: "Show all", value: "show-all" },
  { name: "With discount - 10ads", value: "with-discount" },
  { name: "Without discount - 1000ads", value: "without-discount" },
];

const listingTypes = [
  { name: "For Sale", value: "for-sale" },
  { name: "Auction", value: "auction" },
  { name: "Foreclosure", value: "foreclosure" },
];
export default function CategorySideBar() {
  return (
    <div className="flex flex-col gap-4 w-full text-[#585858]">
      {/* category div */}
      <div className="w-full bg-white shadow-md  rounded-lg ">
        <div className="bg-[#14199C] text-white text-center rounded-t-lg p-2 ">
          <h1 className="text-lg  font-bold">Categories</h1>
        </div>
        <div className="py-2 flex flex-col gap-1">
          {categories.map((category) => (
            <div
              key={category.name}
              className="flex items-center justify-between cursor-pointer hover:bg-gray-100 px-4 rounded-md my-2"
            >
              <Image
                src={category.image}
                alt={category.name}
                className="w-10 h-10 object-contain"
                width={30}
                height={30}
              />
              <p className="text-sm">{category.name}</p>
              <ArrowForwardIosIcon
                sx={{ fontSize: "14px", color: "#5C4D58" }}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex justify-between bg-white shadow-md p-4 rounded-lg ">
        <div className="flex flex-col gap-2 mb-4">
          <span className="text-[#040421] text-xl">Location</span>
          <span>Nigeria</span>
        </div>
        <ArrowForwardIosIcon sx={{ fontSize: "14px", color: "#5C4D58" }} />
      </div>

      <div className="w-full bg-white shadow-md p-4 rounded-lg ">
        <div className="flex justify-between mb-4">
          <span className="text-[#040421] text-xl">Price ₦</span>{" "}
          <ArrowForwardIosIcon sx={{ fontSize: "14px", color: "#5C4D58" }} />
        </div>
        <div className="flex justify-between items-center mb-4 ">
          <div className="border border-gray-300 rounded-md px-4 py-2">
            <input
              type="text"
              className="w-full outline-none"
              placeholder="Min"
            />
          </div>
          <HorizontalRuleIcon sx={{ fontSize: "14px", color: "#5C4D58" }} />
          <div className="border border-gray-300 rounded-md px-4 py-2">
            <input
              type="text"
              className="w-full outline-none "
              placeholder="Max"
            />
          </div>
        </div>

        <RadioCard data={priceRange} />
      </div>
      <div className="w-full  bg-white shadow-md p-4 rounded-lg ">
        <div className="flex justify-between mb-4">
          <span className="text-[#040421] text-xl">Discount</span>{" "}
          <ArrowForwardIosIcon sx={{ fontSize: "14px", color: "#5C4D58" }} />
        </div>
        <RadioCard data={discounts} />
      </div>
      <div className="w-full  bg-white shadow-md p-4 rounded-lg ">
        <div className="flex justify-between mb-4">
          <span className="text-[#040421] text-xl">Listing Type</span>{" "}
          <ArrowForwardIosIcon sx={{ fontSize: "14px", color: "#5C4D58" }} />
        </div>
        <RadioCard data={listingTypes} />
      </div>
    </div>
  );
}
