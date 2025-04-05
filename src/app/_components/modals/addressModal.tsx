"use client";

import { useState } from "react";
import ModalWrapper from "./modalWrapper";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { InputEl } from "../common/input";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";

interface AddressDetails {
  email: string;
  fName: string;
  lName: string;
  address: string;
  city: string;
  phone: string;
}

export const AddressModal = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [addressDetails, setAddressDetails] = useState<AddressDetails>({
    email: "",
    fName: "",
    lName: "",
    address: "",
    city: "",
    phone: "",
  });

  // handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setAddressDetails((prevDetails) => ({
      ...prevDetails,
      [id]: value,
    }));
  };

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Perform validation and any other logic here

    console.log("Card Details:", addressDetails);
    // Perform any further actions with the card details here
  };

  const handleCountryChange = (val: string) => {
    setCountry(val);
  };

  const handleRegionChange = (val: string) => {
    setRegion(val);
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
          <h2 className="text-2xl font-bold ">Edit Address</h2>

          <form className="flex flex-col w-full gap-3">
            <div className="space-y-3">
              <InputEl
                name="Email"
                onChange={handleChange}
                value={addressDetails.email}
                id="email"
                placeholder="Email"
                type="email"
              />
              <CountryDropdown
                // placeholder="Country/Region"
                className="py-2 text-gray-500 px-4 rounded-lg border border-[#DED9DD] outline-none bg-white w-full"
                value={country}
                onChange={handleCountryChange}
              />

              <div className="flex justify-between gap-4">
                <InputEl
                  name="First name"
                  value={addressDetails.fName}
                  onChange={handleChange}
                  id="fName"
                  placeholder="First name"
                />
                <InputEl
                  name="Last name"
                  onChange={handleChange}
                  value={addressDetails.lName}
                  id="lName"
                  placeholder="Last name"
                />
              </div>

              <InputEl
                name="Address"
                value={addressDetails.address}
                onChange={handleChange}
                id="address"
                placeholder="Address"
              />

              <div className="flex justify-between gap-4">
                <RegionDropdown
                  className="p-2 px-4 text-gray-500  rounded-lg border border-[#DED9DD] outline-none bg-white"
                  country={country}
                  value={region}
                  onChange={handleRegionChange}
                />
                <InputEl
                  name="City"
                  value={addressDetails.city}
                  onChange={handleChange}
                  id="city"
                  placeholder="City"
                />
              </div>
              <InputEl
                name="Phone number"
                value={addressDetails.phone}
                onChange={handleChange}
                id="phone"
                placeholder="Phone number"
              />
            </div>
            <div className="flex justify-end">
              <button className="hover:text-white text-defaultBlue border-defaultBlue hover:bg-defaultBlue px-3 py-2  border rounded-lg">
                Cancel
              </button>
              <button className="text-white bg-defaultBlue px-4 py-2 hover:bg-inherit hover:border-defaultBlue hover:text-defaultBlue border rounded-lg">
                Save
              </button>
            </div>
          </form>
        </div>
      </ModalWrapper>
    </div>
  );
};
