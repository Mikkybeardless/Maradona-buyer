"use client";

import { useState } from "react";
import ModalWrapper from "./modalWrapper";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { formatAmount } from "@/app/Utils/util";

interface TransactionDetails {
  amount: number;
  product: string;
  date: string;
  status: string;
  transactionId: string;
  cardType: string;
  ipAddress: string;
  device: string;
  referrence: string;
  attemps: number;
  bank: string;
}

export const TransactionDetailsModal = ({
  btnText,
  btnColor,
}: {
  btnText: string;
  btnColor?: string;
  // transactionDetails: TransactionDetails;
}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const transactionDetails: TransactionDetails = {
    amount: 3000,
    product: "Used HP laptop",
    date: "2023-10-01",
    status: "Pending",
    transactionId: "73KJFHIUDF4",
    cardType: "Visa",
    referrence: "73KJFHIUDF4",
    ipAddress: "189.2345.7885.67",
    device: "Mobile",
    attemps: 2,
    bank: "First Bank",
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
          <h2 className="text-2xl font-semibold text-center">
            Transaction 73KJFHIUDF4
          </h2>

          {/*transaction details*/}

          <div className="flex flex-col gap-4">
            <div className="border border-gray-300 rounded-lg p-4">
              <div className="flex justify-center items-center">
                <p>Amount</p>
                <p className="text-3xl text-secondaryOrange font-bold">
                  {formatAmount(transactionDetails.amount)}
                </p>
                <p
                  className={`${
                    transactionDetails.status === "Succesful"
                      ? "text-green-500"
                      : "text-red-400"
                  }`}
                >
                  {transactionDetails.status}
                </p>
              </div>

              <div className=" flex flex-col gap-4 mt-4">
                <div className="flex justify-between">
                  <p>Product</p>
                  <p>{transactionDetails.product}</p>
                </div>

                <div className="flex justify-between">
                  <p>Paid on</p>
                  <p>{transactionDetails.date}</p>
                </div>

                <div className="flex justify-between">
                  <p>Card Type</p>
                  <p>{transactionDetails.cardType}</p>
                </div>

                <div className="flex justify-between">
                  <p>Transaction ID</p>
                  <p>{transactionDetails.transactionId}</p>
                </div>

                <div className="flex justify-between">
                  <p>Referrence</p>
                  <p>{transactionDetails.referrence}</p>
                </div>

                <div className="flex justify-between">
                  <p>Bank and Country</p>
                  <p>{transactionDetails.bank}</p>
                </div>

                <div className="flex justify-between">
                  <p>IP Address</p>
                  <p>{transactionDetails.ipAddress}</p>
                </div>

                <div className="flex justify-between">
                  <p>Device Type</p>
                  <p>{transactionDetails.device}</p>
                </div>

                <div className="flex justify-between">
                  <p>Attempts</p>
                  <p>{transactionDetails.attemps} attemps</p>
                </div>

                <div className="flex justify-between">
                  <p>Errors</p>
                  <p>0 error</p>
                </div>
              </div>
            </div>

            {/* footer */}
            <div className="border bg-[#FCFDFD] border-gray-300 rounded-lg p-4">
              <h3>Activities</h3>
              <p className="flex gap-4">
                <span className="text-green-500">00:09</span>
                <span>Attemp to pay with Card</span>
              </p>
              <p className="flex gap-4">
                <span className="text-green-500">00:09</span>
                <span>Attemp to pay with Card</span>
              </p>
            </div>
          </div>
        </div>
      </ModalWrapper>
    </div>
  );
};
