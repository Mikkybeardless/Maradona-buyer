'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import House from '../../_assets/images/hero-house.png';

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sample carousel data with images and content
  const carouselData = [
    {
      id: 1,
      image: House.src,
      title: 'House auction ends: Apr 21, 05:38 (WAT)',
      subtitle: '48 HOURS LEFT',
      buttonText: 'Place Bid',
      bgColor: 'bg-gradient-to-br from-[#E8E8F4] to-[#B6B7DE]',
    },
    {
      id: 2,
      image:
        'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=400&h=300&fit=crop',
      title: 'Ocean Paradise',
      subtitle: 'Dive into crystal waters',
      buttonText: 'Explore Now',
      bgColor: 'bg-gradient-to-br from-teal-500 to-cyan-600',
    },
    {
      id: 3,
      image:
        'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop',
      title: 'Forest Sanctuary',
      subtitle: 'Connect with nature',
      buttonText: 'Discover More',
      bgColor: 'bg-gradient-to-br from-green-600 to-emerald-700',
    },
    {
      id: 4,
      image:
        'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=300&fit=crop',
      title: 'Desert Dreams',
      subtitle: 'Journey through golden sands',
      buttonText: 'Begin Adventure',
      bgColor: 'bg-gradient-to-br from-orange-500 to-red-600',
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full  bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
      {/* Main carousel container */}
      <div className="relative h-96 md:h-[500px] overflow-hidden">
        {/* Images and content */}
        {carouselData.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
              index === currentIndex
                ? 'translate-x-0'
                : index < currentIndex
                  ? '-translate-x-full'
                  : 'translate-x-full'
            } ${slide.bgColor}`}
          >
            {/* Flex container for image and content */}
            <div className="h-full flex flex-col md:flex-row items-center justify-between">
              {/* Content section */}
              <div className=" w-full md:w-[50%] px-8 md:px-16 py-8">
                <h2 className="text-lg md:text-xl font-semibold   mb-4 transform transition-all duration-700 delay-200">
                  {slide.title}
                </h2>
                <p className="text-3xl md:text-5xl font-bold  mb-6 transform transition-all duration-700 delay-300">
                  {slide.subtitle}
                </p>
                <div className="md:flex items-center hidden  gap-4 mt-8">
                  <button className="bg-primaryOrange   text-white px-6 py-3 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                    {slide.buttonText}
                  </button>
                  <hr className="h-2" />
                </div>
              </div>

              {/*desktop Image section */}
              <div className="w-[50%] hidden md:block p-8">
                <div className="relative w-full">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-64 object-cover transform transition-all duration-700 delay-100 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-white/10 rounded-2xl"></div>
                </div>
              </div>

              {/* Mobile image section */}

              <div className="flex items-center gap-5 justify-between w-full md:hidden">
                <div className="w-[30%]">
                  <button className="bg-primaryOrange  text-white text-sm px-4 py-2 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                    {slide.buttonText}
                  </button>
                </div>

                <div className=" w-[60%] p-2">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-24 object-cover transform transition-all duration-700 delay-100 hover:scale-105 rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Left arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-[#585858] backdrop-blur-sm hover:bg-white/30 rounded-full p-3 transition-all duration-300 group"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
        </button>

        {/* Right arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-[#585858] backdrop-blur-sm hover:bg-white/30 rounded-full p-3 transition-all duration-300 group"
          aria-label="Next slide"
        >
          <ChevronRight className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
        </button>
      </div>

      {/* Bottom dot indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
        <div className="flex space-x-3">
          {carouselData.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-primaryOrange scale-125 shadow-lg'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Slide counter */}
      <div className="absolute top-6 right-6 z-20 bg-black/30 backdrop-blur-sm rounded-full px-4 py-2">
        <span className="text-white text-sm font-medium">
          {currentIndex + 1} / {carouselData.length}
        </span>
      </div>
    </div>
  );
};

export default ImageCarousel;
