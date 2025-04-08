import { repeatedComponents } from "@/app/_components/common/repeatComp";
import { CartCard } from "@/app/_components/cart/Card";
import { CarCard } from "@/app/_components/home/cards/car";
import { LandCard } from "@/app/_components/home/cards/land";
import OrderSummary from "@/app/_components/cart/OrderSummary";

export default function Page() {
  return (
    <main className="p-4 md:p-10">
      <h1 className="text-xl font-bold">My Cart</h1>
      <section className="flex flex-col md:flex-row bg-[#FFFFFF] gap-4  mt-4">
        <div className="w-full md:w-[70%] flex flex-col gap-4">
          {repeatedComponents(3, CartCard)}
        </div>

        <div className="flex w-full md:w-[30%] h-[60%]">
          <OrderSummary isLink={true} />
        </div>
      </section>
      <section>
        <h2 className="text-defaultBlue font-semibold text-lg my-4">
          Recently viewed
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {repeatedComponents(10, CarCard)}
          {repeatedComponents(10, LandCard)}
        </div>
      </section>
    </main>
  );
}
