import { repeatedComponents } from "@/app/_components/common/repeatComp";
import { CarCard } from "@/app/_components/home/cards/car";
import NavSection from "@/app/_components/home/NavSection";
import Image from "next/image";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import EventNoteIcon from "@mui/icons-material/EventNote";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import StopCircleIcon from "@mui/icons-material/StopCircle";
import GppGoodIcon from "@mui/icons-material/GppGood";
import { CiHeart } from "react-icons/ci";
import Link from "next/link";
import { FaAward } from "react-icons/fa6";
import { LuRefreshCw } from "react-icons/lu";
import { TbTruckDelivery } from "react-icons/tb";
import { SiVisa } from "react-icons/si";

export default async function ProductDetail({
  params,
}: {
  params: { id: string };
}) {
  const id = params.id;

  const descs = [
    { name: "Engine", detail: "2.5L 4-cylinder" },
    { name: "Color", detail: "Blue" },
    { name: "Horsepower", detail: "203 hp" },
    { name: "Transmission", detail: "8-speed automatic" },
    { name: "Fuel Economy", detail: "28 MPG city / 39 MPG highway" },
    {
      name: "Features",
      detail:
        "7-inch touchscreen, Apple CarPlay/ Android Auto, Toyota Safety Sense",
    },
  ];

  const shipping = [
    {
      name: "Shipping",
      desc: "₦ 100,000International shipment of items may be subject to customers processing and additional charges.",
    },
    {
      name: "Delivery",
      desc: `Estimated delivery between Monday, July 10 and Friday, July 18 to 800094. 
            Please note that the delivery estimate is more than 4 business days. 
            Allow extra time if international delivery is subject to customs processing.`,
    },
    { name: "Returns", desc: "Seller does not accept returns. See details" },
  ];
  return (
    <div className="w-full product-details h-screen overflow-y-auto overflow-x-hidden custom-scrollbar flex flex-col bg-[#F7F7F7]">
      <NavSection />
      {/* Product */}
      <p>Product Id: {id}</p>
      <main className=" px-[4%]">
        <section className="flex flex-col gap-5 px-[8%]">
          {/* image and cta */}
          <div className="flex flex-col md:flex-row  md:justify-between gap-4">
            {/* left */}
            <div className="relative basis-[50%] h-[300px] rounded-md overflow-hidden shadow-sm ">
              <Image
                src="/categories/car.png"
                alt="product image"
                className="w-full h-full object-cover"
                fill
              />
            </div>

            {/* right */}
            <div className="pr-5 pl-20 basis-[50%] space-y-2">
              <div className="flex items-center relative justify-between gap-2 ">
                <h2 className="font-bold text-lg mb-2">
                  Toyota Camry LE (2024)
                </h2>
                <div className="border cursor-pointer border-[#BDBDBD] rounded-full p-1 flex items-center justify-center">
                  <CiHeart className="w-5 h-5 text-black font-bold" />
                </div>
              </div>

              <p>Car</p>
              <p>
                <span>Distresssales 100% positive </span>
                <span>Seller&apos;s other items</span>
                <span>Contact Seller</span>
              </p>
              <p>
                <span className="line-through mr-4 font-semibold">
                  ₦25,000,000
                </span>
                <span className="text-[24px] text-primaryOrange">
                  ₦20,000,000
                </span>
              </p>
              <p>
                <span className="mr-2">Uploaded:</span> Monday, 2nd June, 2024.
                02:00pm
              </p>
              <p>
                <span className="mr-2">0 bids.</span>
                Ends in 3d 1hr . Monday, 02:11 Of Best Offer
              </p>
              <p>
                Condition:{" "}
                <span className="text-darkBlue font-semibold">Pre-Owned</span>
              </p>
              <div className=" flex flex-col gap-y-4">
                <button className="bg-primaryOrange text-white rounded-md px-4 py-2 hover:bg-inherit hover:text-primaryOrange border hover:border-primaryOrange">
                  Buy Now <ArrowRightAltIcon />
                </button>
                <button className="text-defaultOrangeHover border rounded-md border-primaryOrange px-4 py-2 hover:bg-primaryOrange hover:text-white">
                  Add to cart
                </button>
              </div>
            </div>
          </div>

          {/* description */}
          <div className="flex flex-col md:flex-row  md:justify-between gap-4">
            {/* left */}
            <div className="flex flex-col basis-[50%] gap-4 w-full">
              <h3 className="px-4 py-2 w-full bg-defaultBlue text-white rounded-md ">
                Description
              </h3>
              <div className="px-5 py-3 space-y-2 bg-white">
                {descs.map((desc) => (
                  <div key={desc.name} className="flex justify-between gap-8">
                    <h3 className="mr-4">{desc.name}:</h3>
                    <p>{desc.detail}</p>
                  </div>
                ))}
              </div>

              <div>
                <div className="flex justify-between">
                  <h3 className="font-semibold">Shop with confidence</h3>
                  <KeyboardArrowUpIcon className="text-secondaryTextColor" />
                </div>
                <div className="flex items-center gap-4">
                  <GppGoodIcon className="text-[#3B3BFE]" />
                  <div>
                    <p>DistressSales Money Back Guarantee</p>
                    <p>
                      Get the item you ordered or your money back.
                      <Link
                        className="text-xs ml-2 underline text-darkBlue"
                        href={`/`}
                      >
                        Learn more
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* right */}
            <div className="flex flex-col gap-4 w-full pr-5 pl-20 basis-[50%] space-y-2">
              {shipping.map((item) => (
                <div key={item.name} className="flex gap-4">
                  <h3 className="font-semibold">{item.name}:</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
              <div className="flex gap-4">
                <h3 className="font-semibold">Payment:</h3>
                <SiVisa className=" text-3xl text-blue-900 p-1 shadow-md " />
              </div>
              <div>
                <div className="flex justify-between">
                  <h3 className="font-semibold">Shop with confidence</h3>
                  <KeyboardArrowUpIcon className="text-secondaryTextColor" />
                </div>
                <div className="flex items-center gap-4">
                  <GppGoodIcon className="text-[#3B3BFE]" />
                  <div>
                    <p>DistressSales Money Back Guarantee</p>
                    <p>
                      Get the item you ordered or your money back.
                      <Link
                        className="text-xs ml-2 underline text-darkBlue"
                        href={`/`}
                      >
                        Learn more
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr className="bg-slate-500" />

          <div className="flex gap-8">
            <div className="flex items-center gap-4">
              <TbTruckDelivery size={25} color="#111" />
              <div>
                <h3 className="text-lg font-semibold">Nation wide Delivery</h3>
                <p>Shop the best distress items just for you.</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <LuRefreshCw size={25} color="#111" />
              <div>
                <h3 className="text-lg font-semibold">Free return Policy</h3>
                <p>Shop the best distress items just for you.</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaAward size={25} color="#111" />
              <div>
                <h3 className="text-lg font-semibold">1 year Warranty</h3>
                <p>Shop the best distress items just for you.</p>
              </div>
            </div>
          </div>
        </section>

        {/* About seller */}
        <section className="bg-white px-12 py-12 my-10">
          <h2 className="font-bold mb-8 text-2xl">About Seller</h2>

          <div className="flex justify-between">
            {/* image */}
            <div className="mb-6">
              <div className="flex items-center gap-3">
                <div className="w-32 h-32 relative">
                  <Image
                    src="/categories/seller.png"
                    alt="seller's picture"
                    fill
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="">
                  <h3 className="font-bold text-2xl mb-1">Distressales</h3>
                  <p>99.3% positive feedback</p>
                  <p>6.4K items sold</p>
                </div>
              </div>

              <p>
                <EventNoteIcon className="text-secondaryOrange mr-1" />
                Joined Aug, 2023
              </p>
              <p>
                <AccessTimeIcon className="text-secondaryOrange mr-1" /> Usually
                responds within 24 hours
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <button className="rounded-md px-3 py-2 text-white hover:text-defaultBlue hover:bg-[#EAE6E9] hover:border-defaultBlue border bg-defaultBlue">
                Contact
              </button>
              <button className="rounded-md px-3 py-2 flex items-center gap-2 bg-[#EAE6E9] border border-defaultBlue text-defaultBlue hover:text-white hover:bg-defaultBlue">
                <CiHeart className="w-5 h-5" />
                <span>Save seller</span>
              </button>
            </div>
          </div>

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
                  <hr className="w-[157px] h-1 bg-secondaryTextColor" />{" "}
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
              <div className="flex justify-end">
                <Link
                  href={`/product/seller/${id}`}
                  className="text-defaultBlue hover:font-semibold"
                >
                  View more <ArrowRightAltIcon />
                </Link>
              </div>

              <div>
                <h4>
                  <span className="mr-3 font-semibold text-lg">
                    Seller&apos;s feedback
                  </span>{" "}
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
                    Item is a nice one, and exactly as described. My only
                    problem was the shipping cost which too high and the
                    packaging wasn&apos;t very impressive. aside these, i love
                    their customer service and my experience with them is
                    awesome.
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
        </section>
        <section>
          <h2 className="mb-4 text-3xl font-bold">Similar Item</h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {repeatedComponents(20, CarCard)}
          </div>
        </section>
      </main>
    </div>
  );
}
