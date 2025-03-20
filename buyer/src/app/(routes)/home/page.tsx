"use client";

import {
  Button,
  Divider,
  Drawer,
  IconButton,
  InputAdornment,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useState } from "react";
import {  CiSearch } from "react-icons/ci";
import {
  FaApple,
  FaBars,
  FaGooglePlay,
  FaRegHeart,
  FaRegUser,
  FaRegBell,
} from "react-icons/fa6";
import { GrCart } from "react-icons/gr";

//import Image from "next/image";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";
import HomeCarousel from "@/app/_components/home/HomeCarousel";
import Footer from "@/app/_components/footer/Footer";
import { CarCard } from "@/app/_components/home/cards/car"
import { LandCard } from "@/app/_components/home/cards/land"

const reviews = [
  {
    title: "This platform is God sent I must say",
    content:
      "Been thinking of buying a car for a while but for insufficient funds, I couldn't. I saw online on Instagram that I can get a car loan through Cars45. I clicked on the link and was redirected to fill out a form which I did. Someone from the Cars45 team reached out to me and the rest is history. They managed all conversations with the seller so the process was fast, easy and stress-free for me.",
    user: "Rosemary Sunday",
    location: "Director, Captain Territory",
    date: "22 Jun, 2022",
    rating: 4,
  },
  {
    title: "Smooth process and great deals!",
    content:
      "I was hesitant at first, but the process was seamless. The customer support was always available to assist me.",
    user: "John Doe",
    location: "Business Owner",
    date: "15 Aug, 2022",
    rating: 5,
  },
];

const repeatedComponents = (n: number, Comp: React.ComponentType) => {
  return Array.from({ length: n }).map((_, i) => <Comp key={i} />);
};

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    centerPadding: "50px",
  };

  return (
    <div className="w-full h-screen overflow-y-auto overflow-x-hidden custom-scrollbar flex flex-col bg-[#F7F7F7]">
      <div className="px-3 sm:px-4 w-full">
        <nav className="flex justify-between items-center py-2 w-full px-3 sm:px-4 md:px-[8%]">
          {/* Left side - Logo and Mobile Menu Button */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <IconButton onClick={() => setMobileOpen(true)}>
                <FaBars className="w-5 h-5" />
              </IconButton>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex gap-4 lg:gap-6">
              <a
                href="#home"
                className="hover:text-defaultOrange text-xs sm:text-sm"
              >
                Home
              </a>
              <a
                href="#about"
                className="hover:text-defaultOrange text-xs sm:text-sm"
              >
                About
              </a>
              <a
                href="#testimonials"
                className="hover:text-defaultOrange text-xs sm:text-sm"
              >
                Testimonials
              </a>
              <a
                href="#help"
                className="hover:text-defaultOrange text-xs sm:text-sm"
              >
                Help
              </a>
            </div>
          </div>

          {/* Right side - Icons & Buttons */}
          <div className="flex gap-2 xs:gap-3 sm:gap-4 md:gap-6 items-center">
            <FaRegUser className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer hover:text-defaultOrange" />
            <FaRegHeart className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer hover:text-defaultOrange" />
            <FaRegBell className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer hover:text-defaultOrange" />
            <GrCart className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer hover:text-defaultOrange" />

            {/* Desktop Login/Register Buttons (Hidden on small screens) */}
            <div className="hidden md:flex gap-3 lg:gap-4">
              <Button
                variant="contained"
                sx={{
                  background: "#E65800",
                  color: "#FFFFFF",
                  fontSize: "12px",
                  fontWeight: 700,
                  height: "35px",
                  borderRadius: "6px",
                }}
              >
                Login
              </Button>
              <Button
                variant="outlined"
                sx={{
                  borderColor: "#14199C",
                  color: "#14199C",
                  fontSize: "12px",
                  fontWeight: 700,
                  height: "35px",
                  borderRadius: "6px",
                }}
              >
                Register
              </Button>
            </div>
          </div>

          {/* Mobile Drawer Menu */}
          <Drawer
            anchor="left"
            open={mobileOpen}
            onClose={() => setMobileOpen(false)}
          >
            <div className="w-56 p-4 flex flex-col gap-4">
              <img
                className="h-[40px] w-auto"
                src={`home/logo.svg`}
                alt="Logo"
              />

              {/* Mobile Navigation Links */}
              <a href="#home" className="hover:text-defaultOrange text-sm">
                Home
              </a>
              <a href="#about" className="hover:text-defaultOrange text-sm">
                About
              </a>
              <a
                href="#testimonials"
                className="hover:text-defaultOrange text-sm"
              >
                Testimonials
              </a>
              <a href="#help" className="hover:text-defaultOrange text-sm">
                Help
              </a>

              {/* Mobile Login/Register Buttons */}
              <Button
                variant="contained"
                sx={{
                  background: "#E65800",
                  color: "#FFFFFF",
                  fontSize: "14px",
                  fontWeight: 700,
                  height: "38px",
                  borderRadius: "8px",
                  width: "100%",
                }}
              >
                Login
              </Button>
              <Button
                variant="outlined"
                sx={{
                  borderColor: "#14199C",
                  color: "#14199C",
                  fontSize: "14px",
                  fontWeight: 700,
                  height: "38px",
                  borderRadius: "8px",
                  width: "100%",
                }}
              >
                Register
              </Button>
            </div>
          </Drawer>
        </nav>

        <header className="flex items-center  gap-x-56 mt-5 bg-white px-[8%] py-2">
          <img
            className="h-[60px] w-auto hidden md:flex"
            src={`home/logo.svg`}
            alt="Logo"
          />

          <div className="flex items-center text-center w-full max-w-lg border border-gray-300 rounded overflow-hidden px-3 py-1">
            <TextField
              variant="standard"
              placeholder="property type, location, price range"
              InputProps={{
                disableUnderline: true,
                startAdornment: (
                  <InputAdornment position="start">
                    <CiSearch className="text-gray-400" />
                  </InputAdornment>
                ),
              }}
              className="flex-1"
            />
            <Divider orientation="vertical" flexItem />
            <Select
              defaultValue="Cars"
              variant="standard"
              disableUnderline
              className="ml-2 text-gray-600"
            >
              <MenuItem value="Cars">Cars</MenuItem>
              <MenuItem value="Houses">Houses</MenuItem>
              <MenuItem value="Lands">Lands</MenuItem>
            </Select>
          </div>

          {/* <Link
            to="/seller/dashboard"
            className="rounded-[8px] px-3 py-2.5 text-white bg-defaultOrange hover:bg-defaultOrangeHover"
          >
            Become a seller
          </Link> */}
        </header>
        <div id="home" className="w-full mt-12">
          <HomeCarousel />
        </div>
        {/* service */}
        <div className="px-4 sm:px-8 lg:px-[8%]">
          {/* Service Section */}
          <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-24 my-10 items-center">
            {/* Left Side */}
            <div className="flex items-start">
              <div className="w-[5px] bg-[#14199C] h-[42px] mr-2"></div>
              <div>
                <p className="font-semibold text-[24px] sm:text-[32px] text-[#292D32]">
                  Service
                </p>
                <p className="font-normal text-sm text-[#292D32] mt-1 max-w-[450px]">
                  Find unbeatable deals on lands, houses, and cars with
                  Marathona, your trusted platform for distress sales. Explore,
                  compare, and secure your next property or vehicle
                  effortlessly.
                </p>
              </div>
            </div>

            {/* Right Side - Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <div className="border rounded-lg text-center px-4 pt-5 pb-10 shadow-sm">
                <p className="font-semibold text-base text-[#292D32] mb-2">
                  Quality Cars at Discount Prices
                </p>
                <p className="font-normal text-sm text-[#292D32]">
                  Explore a wide range of vehicles, from economy to luxury cars,
                  all available at significantly reduced prices.
                </p>
              </div>
              <div className="border rounded-lg text-center px-4 pt-5 pb-10 shadow-sm">
                <p className="font-semibold text-base text-[#292D32] mb-2">
                  Affordable Housing Deals
                </p>
                <p className="font-normal text-sm text-[#292D32]">
                  Get the best prices on houses, from budget-friendly homes to
                  luxury estates, all at distress-sale prices.
                </p>
              </div>
              <div className="border rounded-lg text-center px-4 pt-5 pb-10 shadow-sm">
                <p className="font-semibold text-base text-[#292D32] mb-2">
                  Verified Land Sales
                </p>
                <p className="font-normal text-sm text-[#292D32]">
                  Secure land investments with verified titles, ensuring peace
                  of mind and secure transactions.
                </p>
              </div>
            </div>
          </div>

          {/* Statistics Section */}
          <div className="w-[90%] h-auto sm:h-[180px] flex flex-col sm:flex-row border-primaryBorder border rounded-[8px] mx-auto mt-10">
            <div className="flex-1 flex flex-col gap-y-2 justify-center items-center border-b sm:border-b-0 sm:border-r border-primaryBorder py-5 sm:py-0">
              <h4 className="text-xl sm:text-2xl text-defaultOrange font-bold">
                26000+
              </h4>
              <p className="text-sm text-[#292D32]">Sales</p>
            </div>
            <div className="flex-1 flex flex-col gap-y-2 justify-center items-center border-b sm:border-b-0 sm:border-r border-primaryBorder py-5 sm:py-0">
              <h4 className="text-xl sm:text-2xl text-defaultOrange font-bold">
                1500+
              </h4>
              <p className="text-sm text-[#292D32] text-center">
                Products are inspected monthly
              </p>
            </div>
            <div className="flex-1 flex flex-col gap-y-2 justify-center items-center py-5 sm:py-0">
              <h4 className="text-xl sm:text-2xl text-defaultOrange font-bold">
                70+
              </h4>
              <p className="text-sm text-[#292D32] text-center">
                Centres pan Nigeria
              </p>
            </div>
          </div>
        </div>

        {/* feature cat */}
        <div className="mt-20">
          <h1 className="text-[32px] font-semibold  text-[#040421]">
            Featured Categories
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
            {repeatedComponents(20, CarCard)}
          </div>
        </div>

        <div className="relative w-full  bg-black">
          {/* Background img */}
          <div className="absolute inset-0 discount-bg bg-cover bg-center opacity-20"></div>

          {/* Content Container */}
          <div className="relative z-10 max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 text-white my-6">
            {/* Left Content */}
            <div>
              <h3 className="text-base font-medium text-[#FFFFFF]">
                How it works
              </h3>
              <ul className="mt-3 space-y-2 text-[#FFFFFF] font-medium text-base">
                <li>
                  <span className="text-[#5FC4FD] font-medium text-base">
                    • Browse Listings:
                  </span>{" "}
                  Visit our auction section and look for items marked with the
                  special <b>10% discount</b> badge.
                </li>
                <li>
                  <span className="text-[#5FC4FD] font-medium text-base">
                    • Place Your Bids:
                  </span>{" "}
                  Participate in live auctions and place bids on your desired
                  items.
                </li>
                <li>
                  <span className="text-[#5FC4FD] font-medium text-base">
                    • Win and Save:
                  </span>{" "}
                  If you win, the additional <b>10% discount</b> will apply
                  automatically.
                </li>
              </ul>

              <p className="my-8 font-bold text-2xl">
                Hurry! This limited-time offer won’t last long. Visit our
                auction section now and start bidding!
              </p>

              <p className="mt-2 text-base text-[#ffffff] font-normal">
                <span className="text-blue-300 text-base font-bold">Note:</span>{" "}
                Terms and conditions apply. Discount applies only to selected
                auction items. Offer valid while supplies last.
              </p>
            </div>

            {/* Right Content */}
            <div className="">
              <h3 className="text-2xl font-bold">
                Exclusive Auction Event: 10% Off on Selected Auction Listings
              </h3>
              <p className="mt-2 mb-7 text-[#ffffff] text-base">
                Get an additional <b>10% discount</b> on selected auction items.
                Limited time offer!
              </p>

              <h4 className="mt-4 text-base  font-medium">What's included:</h4>
              <ul className="mt-2 mb-7 space-y-2 text-[#ffffff] font-normal">
                <li>
                  <span className="text-[#5FC4FD] font-medium text-base">
                    • Luxury Cars:
                  </span>{" "}
                  High-end models with significant savings.
                </li>
                <li>
                  <span className="text-[#5FC4FD] font-medium text-base">
                    • Real Estate:
                  </span>{" "}
                  Prime houses and land parcels ready for bidding.
                </li>
              </ul>

              {/* CTA Button */}
              <button className="mt-6 bg-[#14199C] hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg">
                Auction
              </button>
            </div>
          </div>
        </div>
        {/* review */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
          {repeatedComponents(20, LandCard)}
        </div>
        <div className="mt-20 flex flex-col md:flex-row items-center gap-6">
          {/* Left Section */}
          <div className="rounded-[48px] flex flex-col items-center p-6 sm:p-8 md:p-12 pb-0 w-full md:w-[55%] bg-[#F5F5F5] text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
              Download the app for a better shopping experience
            </h1>

            {/* App Store & Play Store Buttons */}
            <div className="flex flex-col sm:flex-row w-full mt-8 gap-4">
              <button className="rounded-[100px] w-full sm:w-[45%] py-3 flex items-center justify-center gap-x-2.5 text-white bg-[#040421]">
                <FaGooglePlay className="w-6 h-6 sm:w-8 sm:h-8" />
                <span className="text-lg sm:text-xl font-semibold">
                  Play Store
                </span>
              </button>
              <button className="rounded-[100px] w-full sm:w-[45%] py-3 flex items-center justify-center gap-x-2.5 text-white bg-[#040421]">
                <FaApple className="w-6 h-6 sm:w-8 sm:h-8" />
                <span className="text-lg sm:text-xl font-semibold">
                  App Store
                </span>
              </button>
            </div>

            {/* App img */}
            <img
              className="mt-5 w-[80%] sm:w-[60%] md:w-[50%]"
              src={`home/IOS-app-display.png`}
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
              src={`home/qr-code.png`}
              alt="QR-code"
            />
          </div>
        </div>

        {/* Footer Section */}
        <Footer />

        {/* Padding at the bottom of the page */}
      </div>
    </div>
  );
}
