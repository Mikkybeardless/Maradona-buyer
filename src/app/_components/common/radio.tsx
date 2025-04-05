"use client";
import { useState } from "react";

interface RadioCardProps {
  data: {
    name: string;
    value: string;
  }[];
  groupName: string;
}

export const RadioCard = ({ data, groupName }: RadioCardProps) => {
  const [selectedListing, setSelectedListing] = useState("");

  const handleUnselect = () => {
    setSelectedListing("");
  };

  const handleRadioChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setSelectedListing(event.target.value);
  };

  return (
    <div className="flex flex-col gap-3">
      {data.map((listing) => (
        <div key={listing.name} className="flex items-center gap-2">
          <input
            type="radio"
            id={listing.value}
            name={groupName}
            value={listing.value}
            checked={selectedListing === listing.value}
            onChange={handleRadioChange}
            className="hidden"
          />
          <label
            htmlFor={listing.value}
            className="flex items-center cursor-pointer"
          >
            <div
              className={`
                w-5 h-5 
                border-2 
                rounded-full 
                mr-3 
                flex 
                items-center 
                justify-center
                ${
                  selectedListing === listing.value
                    ? "border-defaultBlue "
                    : "border-gray-300"
                }
              `}
            >
              {selectedListing === listing.value && (
                <div
                  className="
                    w-3 
                    h-3 
                    bg-defaultBlue
                    rounded-full
                  "
                />
              )}
            </div>
            <span
              className={`
                text-base 
                ${
                  selectedListing === listing.value
                    ? "text-defaultBlue font-semibold"
                    : ""
                }
              `}
            >
              {listing.name}
            </span>
          </label>
        </div>
      ))}
      <div className="flex justify-between mt-4">
        <button
          onClick={handleUnselect}
          className="hover:text-red-500 transition-colors hover:font-bold border border-gray-300 rounded-md px-2 py-1"
        >
          Clear
        </button>
        <button className="hover:text-defaultBlue transition-colors hover:font-bold border border-gray-300 rounded-md px-2 py-1">
          Save
        </button>
      </div>
    </div>
  );
};
