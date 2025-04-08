import { SavedItem } from "@/app/_components/cards/savedItems-card";

import { repeatedComponents } from "@/app/_components/common/repeatComp";
import { CarCard } from "@/app/_components/home/cards/car";

export default function Page() {
  return (
    <div className="p-4 md:p-10 ">
      <p className="mb-5">Bread Crum</p>
      <main>
        <div className="md:px-[9rem]">
          <div className="space-y-5 bg-[#FAFAFA] p-5 rounded-lg shadow-md ">
            <div className="flex justify-between">
              <h1 className="text-2xl font-bold">My saved Items</h1>
              <button className="text-secondaryTextColor ">Clear all</button>
            </div>
            <hr />
            <div className="flex flex-col gap-3">
              {repeatedComponents(5, SavedItem)}
            </div>
          </div>
          <div className="my-5">pagination logic here</div>
        </div>
        <h2 className="text-xl font-bold mb-5">
          Customers also saved these items
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 px-5 md:px-0">
          {repeatedComponents(8, CarCard)}
        </div>
      </main>
    </div>
  );
}
