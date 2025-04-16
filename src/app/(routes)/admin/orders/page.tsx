import { OrderCard } from "@/app/_components/cards/order";

export default function OrdersPage() {
  const order = {
    imageSrc: "/categories/car.png",
    product: "Car",
    status: "In transit",
    date: "2023-10-01",
  };

  const loopArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const orders = () => {
    return loopArray.map((item) => {
      return (
        <div key={item}>
          <OrderCard order={order} />
          <hr className="h-[2px] bg-gray-300" />
        </div>
      );
    });
  };
  return (
    <div className="flex flex-col gap-4 md:gap-8 px-4 md:px-0">{orders()}</div>
  );
}
