"use client";

import { useState } from "react";
import ModalWrapper from "./modalWrapper";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { InputEl } from "../common/input";

interface CardDetails {
  cardNumber: string;
  name: string;
  cvv: string;
  expiryDate: string;
}

export const CardDetailsModal = ({
  btnText,
  btnColor,
}: {
  btnText: string;
  btnColor?: string;
}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [cardDetails, setCardDetails] = useState<CardDetails>({
    cardNumber: "",
    name: "",
    cvv: "",
    expiryDate: "",
  });

  // handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setCardDetails((prevDetails) => ({
      ...prevDetails,
      [id]: value,
    }));
  };

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Perform validation and any other logic here

    console.log("Card Details:", cardDetails);
    // Perform any further actions with the card details here
  };

  return (
    <div>
      <button
        type="button"
        className={`border mt-10 ${
          btnColor
            ? btnColor
            : "border-primaryOrange  hover:bg-primaryOrange text-primaryOrange hover:text-white"
        }   w-full rounded-lg px-2 py-2`}
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        {btnText}
      </button>
      <ModalWrapper isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
        <div className="w-full p-4 bg-white rounded-lg  flex flex-col gap-4">
          <button
            className="absolute top-4 right-4 rounded-full p-2 bg-gray-200 text-gray-600 hover:bg-gray-400"
            onClick={() => {
              setIsModalOpen(false);
            }}
          >
            <CloseRoundedIcon />
          </button>
          <h2 className="text-2xl font-bold text-center">Card Details</h2>

          {/* Card inputs form*/}

          <form className="flex flex-col gap-2">
            <InputEl
              name="Card Number"
              type="text"
              id="cardNumber"
              value={cardDetails.cardNumber}
              onChange={handleChange}
              placeholder="1234 5678 9012 3456"
              imgSrc="/payments/creditCardBrands.png"
              className="p-2 px-4 rounded-md border border-[#DED9DD] outline-none flex gap-2"
            />
            <div className="flex gap-4">
              <InputEl
                name="Expiration"
                type="text"
                id="expiryDate"
                placeholder="MM/YY"
                value={cardDetails.expiryDate}
                onChange={handleChange}
                className="p-2 px-4 rounded-md border border-[#DED9DD] outline-none"
              />
              <InputEl
                name="CVV"
                type="text"
                id="cvv"
                placeholder="CVV"
                value={cardDetails.cvv}
                onChange={handleChange}
                imgSrc="/payments/cvv.png"
                className="p-2 px-4 rounded-md border border-[#DED9DD] outline-none flex gap-2 w-full"
              />
            </div>

            <InputEl
              name="Name"
              type="text"
              id="name"
              value={cardDetails.name}
              onChange={handleChange}
              placeholder="Name on Card"
              className="p-3 px-4 rounded-md border border-[#DED9DD] outline-none flex gap-2 w-full"
            />

            <button
              onClick={(e) => {
                e.preventDefault();
                handleSubmit(e as unknown as React.FormEvent<HTMLFormElement>);
              }}
              className="bg-primaryOrange text-white py-3 rounded-lg mx-auto px-5 mt-3"
            >
              Continue to Pay <span>(₦14,500)</span>
            </button>
          </form>
        </div>
      </ModalWrapper>
    </div>
  );
};
