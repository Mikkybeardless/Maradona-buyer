import Image from "next/image";
import { CardDetailsModal } from "../modals/cardDetails";
import { SavedAddressModal } from "../modals/savedAddress";
interface OrderSummaryProps {
  btnType?: "button" | "submit" | "reset";
  onClick?: () => void;
  btnText?: string;
}

const OrderSummary = ({
  btnText = "Check out",
  btnType = "button",
  onClick,
}: OrderSummaryProps) => {
  return (
    <div className="flex w-full h-full p-6 bg-white shadow-md flex-col gap-4">
      <div className="flex justify-between">
        <h2 className="text-lg font-bold">Order Summary</h2>
        <span className="text-xs text-[#585858]">2 items</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="relative w-[56px]  h-[56px] rounded-md border border-gray-300 ">
          <Image
            className="w-full h-full object-contain"
            src="/categories/car.png"
            alt="product image"
            fill
          />
        </div>
        <p>2023 Toyota Camry ....</p>
        <span className="text-defaultBlue md:text-lg font-semibold">
          ₦4,500,000
        </span>
      </div>
      <div className="flex justify-between">
        <div className="border border-gray-300 rounded-md px-4 py-2">
          <input
            type="text"
            className="w-full outline-none "
            placeholder="Discount Code"
          />
        </div>
        <button className="border border-gray-300 rounded-lg px-2 py-1">
          Apply
        </button>
      </div>
      <div className="mb-4">
        <p className="flex justify-between">
          <span>Discount:</span>{" "}
          <span className="text-defaultBlue md:text-lg font-semibold">₦0</span>
        </p>
        <p className="flex justify-between">
          <span>Subtotal:</span>
          <span className="text-defaultBlue md:text-lg font-semibold">
            ₦900,000,000
          </span>
        </p>
        <p className="flex justify-between ">
          <span>Shipping:</span>
          <span className="text-defaultBlue md:text-lg font-semibold">
            ₦100,000
          </span>
        </p>
      </div>
      <p className="flex justify-between font-bold">
        <span>Total:</span>
        <span className="text-primaryOrange">₦10,000,000</span>
      </p>

      {/* <CardDetailsModal
        btnText={btnText}
        btnColor="hover:border-primaryOrange bg-primaryOrange hover:bg-inherit text-white hover:text-primaryOrange"
      /> */}
      {/* <AddressModal /> */}
      <SavedAddressModal />
    </div>
  );
};

export default OrderSummary;
