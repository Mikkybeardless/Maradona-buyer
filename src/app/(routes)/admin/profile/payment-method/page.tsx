import { CardDetailsModal } from "@/app/_components/modals/cardDetails";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import { CreditCard } from "lucide-react";

export default function Page() {
  const cards = [
    { name: "Access", cvv: "**3", expiry: "13/24", number: "*****3555" },
    { name: "Access", cvv: "**3", expiry: "13/24", number: "*****3555" },
  ];
  return (
    <div className="flex flex-col w-full md:w-fit md:p-0 rounded-md md:ml-6 md:mr-14 justify-center gap-4">
      <div className="bg-white p-5 rounded-md">
        <div className="flex gap-6 items-center md:pl-5  w-full pb-4">
          <CreditCard />
          <h1 className="text-2xl font-bold">Registered Cards</h1>
        </div>
        <hr className="text-gray-200" />

        <div className="flex flex-col gap-4 ">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`flex gap-4 md:gap-6 md:px-5 w-full border-gray-200 ${
                index !== cards.length - 1 && "border-b"
              } py-4`}
            >
              <div className="flex flex-col gap-1">
                <CheckCircleOutlineOutlinedIcon className=" " />
                <CreditCard />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-secondaryTextColor">Bank</h3>
                {card.name}
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-secondaryTextColor">CVV</h3>
                {card.cvv}
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-secondaryTextColor">Card Number</h3>
                {card.number}
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-secondaryTextColor">Expiring Date</h3>
                {card.expiry}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center px-[5rem] mt-14">
        {/* <button className="bg-secondaryOrange w-full hover:border-secondaryOrange hover:bg-inherit hover:text-secondaryOrange border text-white  px-4 py-2 rounded-md mt-4">
          Add New Card
        </button> */}

        <CardDetailsModal
          btnText="Add New Card"
          btnColor="bg-secondaryOrange text-white hover:border-secondaryOrange hover:bg-inherit hover:text-secondaryOrange border"
        />
      </div>
    </div>
  );
}
