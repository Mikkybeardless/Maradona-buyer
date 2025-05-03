'use client';
import { useState } from 'react';

export default function ProgressBar() {
  // Example state - in a real app, this would come from your order tracking data
  const [currentStep, setCurrentStep] = useState(3); // 1: Order Placed, 2: Processing, 3: Shipped, 4: Delivered
  console.log(setCurrentStep);
  const steps = [
    {
      id: 1,
      name: 'Order Placed',
      date: 'Tue, September 18',
      time: '01:30 PM',
      address: '123 Main St, City, State, Zip',
    },
    {
      id: 2,
      name: 'Processing',
      date: 'Tue, September 20',
      time: '01:30 PM',
      address: '123 Main St, City, State, Zip',
    },
    {
      id: 3,
      name: 'In Abuja',
      date: 'Tue, September 21',
      time: '01:30 PM',
      address: '123 Main St, City, State, Zip',
    },
    {
      id: 4,
      name: 'Delivered',
      date: 'Tue, September 24',
      time: '01:30 PM',
      address: '123 Main St, City, State, Zip',
    },
  ];
  return (
    <div className="px-10 space-y-10 py-5">
      {/* horizontal bar */}
      <div>
        {/* Container with the connecting line */}
        <div className="relative flex items-center justify-between mb-2">
          {/* Horizontal connecting line that spans the entire width */}
          <div className="absolute left-0 right-0 h-[2px] bg-gray-400" />

          {/* Progress overlay - green line for completed sections */}
          <div
            className="absolute left-0 h-[2px] bg-green-500"
            style={{
              width: `${(Math.max(0, currentStep - 1) / (steps.length - 1)) * 100}%`,
            }}
          />

          {/* Step circles positioned over the line */}
          {steps.map((step) => (
            <div key={step.id} className="z-10 flex flex-col items-center">
              <div
                className={`w-5 h-5 rounded-full flex items-center justify-center
                ${
                  step.id <= currentStep
                    ? 'border-2 border-green-500 bg-white'
                    : 'border-2 border-gray-400 bg-white'
                }`}
              >
                {step.id < currentStep ? (
                  //   <svg
                  //     className="w-3 h-3 text-white"
                  //     fill="currentColor"
                  //     viewBox="0 0 20 20"
                  //   >
                  //     <path
                  //       fillRule="evenodd"
                  //       d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  //       clipRule="evenodd"
                  //     />
                  //   </svg>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                ) : step.id === currentStep ? (
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                ) : (
                  <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Step labels */}
        <div className="flex justify-between">
          {steps.map((step) => (
            <div
              key={`label-${step.id}`}
              className="flex flex-col items-center"
            >
              <p>{step.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* vertical bar */}
      <div>
        <h2 className=" text-primaryOrange font-bold text-2xl">
          Tracking Updates
        </h2>
        <div className=" py-5 flex gap-5 h-full">
          {/* Step label date */}
          <div className="flex flex-col gap-10 justify-between">
            {steps.map((step) => (
              <div
                key={`label-${step.id}`}
                className="flex flex-col items-center"
              >
                <p className="text-lg font-semibold">{step.date}</p>
                <p className="text-secondaryTextColor text-sm">{step.time}</p>
              </div>
            ))}
          </div>
          {/* Container with the connecting line */}
          <div className="relative flex flex-col items-center justify-between ">
            {/* Horizontal connecting line that spans the entire width */}
            <div className="absolute top-0 bottom-0 w-[2px] bg-gray-400" />

            {/* Progress overlay - green line for completed sections */}
            <div
              className="absolute top-0 w-[2px] bg-blue-800"
              style={{
                height: `${(Math.max(0, currentStep - 1) / (steps.length - 1)) * 100}%`,
              }}
            />

            {/* Step circles positioned over the line */}
            {steps.map((step) => (
              <div key={step.id} className="z-10 flex  items-center">
                <div
                  className={`w-5 h-5 rounded-full flex items-center justify-center
                ${
                  step.id <= currentStep
                    ? 'border-2 border-blue-800 bg-blue-800'
                    : 'border-2 border-gray-400 bg-white'
                }`}
                >
                  {step.id < currentStep ? (
                    <div className="w-3 h-3 rounded-full bg-blue-800"></div>
                  ) : step.id === currentStep ? (
                    <div className="w-3 h-3 rounded-full bg-white"></div>
                  ) : (
                    <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Step label names */}
          <div className="flex flex-col justify-between">
            {steps.map((step) => (
              <div
                key={`label-${step.id}`}
                className="flex flex-col items-center"
              >
                <p className="text-defaultBlue font-bold text-xl">
                  {step.name}
                </p>
                <p className="text-secondaryTextColor text-sm">
                  {step.address}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
