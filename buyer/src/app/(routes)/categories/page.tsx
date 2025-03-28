"use client";

import { repeatedComponents } from "@/app/_components/common/repeatComp";
import { CarCard } from "@/app/_components/home/cards/car";
import { LandCard } from "@/app/_components/home/cards/land";

export default function Page() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {repeatedComponents(20, CarCard)}
      {repeatedComponents(20, LandCard)}
    </div>
  );
}
