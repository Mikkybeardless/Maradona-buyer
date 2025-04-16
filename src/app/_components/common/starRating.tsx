"use client";

import { useState } from "react";
import StarIcon from "@mui/icons-material/Star";

const ratingLabels: { [key: number]: string } = {
  1: "Poor",
  2: "Fair",
  3: "Good",
  4: "Very Good",
  5: "Excellent",
};

export const StarRating = ({ ratedIndex }) => {
  const [rating, setRating] = useState<number>(0);
  const [hovered, setHovered] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setRating(index);
    ratedIndex(index); // Call the parent function with the selected rating
  };

  return (
    <div className="flex flex-col justify-center items-center gap-2">
      {rating > 0 && <p className="font-semibold ">{ratingLabels[rating]}</p>}
      <div className="flex space-x-1">
        {Array.from({ length: 5 }, (_, i) => {
          const index = i + 1;
          return (
            <StarIcon
              key={index}
              className={`cursor-pointer transition-colors duration-200 ${
                (hovered ?? rating) >= index
                  ? "text-[#FFD700]"
                  : "text-[#EAE6E9]"
              }`}
              onClick={() => handleClick(index)}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            />
          );
        })}
      </div>
    </div>
  );
};
