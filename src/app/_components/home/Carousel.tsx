"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselItem {
  id: number;
  color: string;
  content: React.ReactNode;
}
const Carousel = () => {
  // Sample data for carousel items

  const items: CarouselItem[] = [
    { id: 1, color: "bg-[#686DED]", content: <CarouselContent /> },
    { id: 2, color: "bg-[#040421]", content: <CarouselContent /> },
    { id: 3, color: "bg-[#040421]", content: <CarouselContent /> },
    { id: 4, color: "bg-[#040421]", content: <CarouselContent /> },
    { id: 5, color: "bg-[#040421]", content: <CarouselContent /> },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : items.length - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex < items.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <div className="absolute  md:right-0 md:bottom-0  md:w-[60rem]   py-8 h-[15rem]">
      {/* Render slides in reverse order so lower indexes are on top */}
      {items
        .map((item, index) => {
          // Calculate distance from active slide (negative is to the right in stack)
          const distanceFromActive = activeIndex - index;
          const isActive = index === activeIndex;

          // Calculate offset for each card in the stack
          // Active card is at left, others stack to the right
          const offsetX = isActive ? "0" : `${distanceFromActive * -40}px`;

          // Calculate z-index - active slide has highest z-index
          const zIndex = items.length - Math.abs(distanceFromActive);

          return (
            <div
              key={item.id}
              className={`absolute bottom-0 left-[10%] w-full h-full py-10 rounded-lg shadow-xl transition-all duration-500 ease-in-out flex items-center justify-center text-white ${item.color}`}
              style={{
                transform: `translateX(${offsetX})`,
                zIndex: zIndex,
                opacity: isActive ? 1 : 0.9,
                width: isActive ? "85%" : "75%",
              }}
            >
              {item.content}
            </div>
          );
        })
        .reverse()}

      {/* Navigation arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-[10%] top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg z-50 hover:bg-white"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-gray-800" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-[5%] top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg z-50 hover:bg-white"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-gray-800" />
      </button>
    </div>
  );
};

export default Carousel;

const CarouselContent = () => {
  return (
    <div className="relative w-full flex flex-col max-w-4xl space-y-3 px-12 py-8">
      <h1 className="text-[16px] font-bold">
        This platform is God sent I must say
      </h1>
      <p className="text-[14px] style-normal">
        Been thinking of buying a car for a while but for insufficient funds, I
        couldn’t. I saw online on Instagram that I can get a car on car loan
        through Cars45. I clicked on the link and was redirected to fill out a
        form which I did. Someone from the Cars45 team reached out to me and the
        rest is history. They managed all conversations with the seller so the
        process was fast, easy and stress free for me.
      </p>
      <div className="">
        <div className="flex items-center gap-2">
          <img
            className="rounded-full w-[23px] h-[23px"
            src="home/carousel-image.png"
            alt="Testimonial Carousel Image"
          />
          <h3>Rosemary Sunday</h3>
        </div>

        <div className="flex ml-7 items-center gap-2">
          <img src="home/testimonial-icon.svg" alt="Location Icon" />
          <p>Federal Capital Territory</p>
        </div>

        <p className="ml-7">22 Jun, 2022</p>
      </div>
    </div>
  );
};
