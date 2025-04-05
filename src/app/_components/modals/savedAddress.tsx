"use client";

import { useState } from "react";
import ModalWrapper from "./modalWrapper";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import SavedAddressCard from "../cards/savedAddress";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

export const SavedAddressModal = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedAddress, setSelectedAddress] = useState<string | null>(null);

  const savedAddress = [
    {
      id: "address-1",
      name: "Rosemary Sunday",
      address: `Mubinu. Osogbo, Osun, Ifedayo, Osun
07063797396.`,
    },
    {
      id: "address-2",
      name: "Rosemary Sunday",
      address: `Mubinu. Osogbo, Osun, Ifedayo, Osun
07063797396.`,
    },
    {
      id: "address-3",
      name: "Rosemary Sunday",
      address: `Mubinu. Osogbo, Osun, Ifedayo, Osun
07063797396.`,
    },
  ];

  const handleAddressChange = (id: string) => {
    console.log("Selected shipping method:", id);
    setSelectedAddress(id);
  };
  return (
    <div>
      <button
        type="button"
        className={`border mt-10  border-primaryOrange  hover:bg-primaryOrange text-primaryOrange hover:text-white"
        }   w-full rounded-lg px-2 py-2`}
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        Edit
      </button>
      <ModalWrapper isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
        <div className="w-full p-4  bg-white rounded-lg  flex flex-col gap-4">
          <button
            className="absolute top-4 right-4  p-2 text-gray-600 hover:text-gray-400"
            onClick={() => {
              setIsModalOpen(false);
            }}
          >
            <CloseRoundedIcon />
          </button>
          <h2 className="text-2xl font-bold ">Saved Address</h2>
          <div className="flex flex-col gap-4">
            {savedAddress.map((address) => (
              <SavedAddressCard
                key={address.id}
                {...address}
                onChange={handleAddressChange}
                groupName="address"
                selected={selectedAddress === address.id}
              />
            ))}
          </div>

          <button className="flex gap-3 text-secondaryTextColor">
            <AddRoundedIcon className="text-defaultBlue" /> Add new addres
          </button>
          <div className="flex gap-3 justify-end">
            <button className="hover:text-white text-defaultBlue border-defaultBlue hover:bg-defaultBlue px-3 py-2  border rounded-lg">
              Cancel
            </button>
            <button className="text-white bg-defaultBlue px-4 py-2 hover:bg-inherit hover:border-defaultBlue hover:text-defaultBlue border rounded-lg">
              Use this address
            </button>
          </div>
        </div>
      </ModalWrapper>
    </div>
  );
};
