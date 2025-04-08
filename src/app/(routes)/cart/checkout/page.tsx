"use client";

import CheckoutMethod from "@/app/_components/cards/Method";
import OrderSummary from "@/app/_components/cart/OrderSummary";
import { InputEl } from "@/app/_components/common/input";
import { CardDetailsModal } from "@/app/_components/modals/cardDetails";
import BeenhereRoundedIcon from "@mui/icons-material/BeenhereRounded";
import { useState } from "react";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";

export default function Page() {
  const [selectedShipping, setSelectedShipping] = useState<string | null>(null);
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null);
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const shippingMethods = [
    {
      id: "GIG",
      title: "Good Is Good Logistics (GIG)",
      description: "Delivers within 1 to 4 business days. Insurance available.",
      iconSrc: "/shippings/gig.png",
      price: 4000,
    },
    {
      id: "Courier",
      title: "Courier Plus Logistics Int.",
      description: "Delivers within 1 to 4 business days. Insurance available.",
      iconSrc: "/shippings/courier.png",
      price: 3500,
    },
    {
      id: "Benue-links",
      title: "Benue Links",
      description: "Delivers within 2 business days. Insurance available.",
      iconSrc: "/shippings/benue-links.png",
      price: 3500,
    },
  ];

  const paymentMethods = [
    {
      id: "Card",
      title: "Debit Card",
      description:
        "Pay instantly and securely with your credit/debit card. You will be redirected to another page.",
      iconSrc: "/payments/cards.png",
    },
    {
      id: "Paystack",
      title: "Paystack",
      description:
        "Pay instantly and securely with your credit/debit card. You will be redirected to another page.",
      iconSrc: "/payments/paystack.png",
    },
    {
      id: "Flutterwave",
      title: "Flutterwave",
      description: "Instant and effortless payment.",
      iconSrc: "/payments/flutterwave.png",
    },
  ];

  const handleShippingChange = (id: string) => {
    console.log("Selected shipping method:", id);
    setSelectedShipping(id);
  };
  const handlePaymentChange = (id: string) => {
    console.log("Selected shipping method:", id);
    setSelectedPayment(id);
  };

  const handleCountryChange = (val: string) => {
    setCountry(val);
  };

  const handleRegionChange = (val: string) => {
    setRegion(val);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    switch (name) {
      case "country":
        setCountry(value);
        break;
      case "region":
        setRegion(value);
        break;
      default:
        break;
    }
  };
  return (
    <section className="p-4 md:pr-10 md:pl-14 md:py-10">
      <div>BreadCrum</div>
      <div className="flex items-center gap-2 mb-5">
        <BeenhereRoundedIcon className="text-primaryOrange" />{" "}
        <h1 className="font-bold text-2xl">Secure Contact</h1>
      </div>
      <div className="flex flex-col justify-between md:flex-row gap-10  ">
        {/* left side */}
        <div className="flex flex-col w-full md:w-[50%] gap-3">
          <h2 className="font-semibold text-xl mb-4">Delivery</h2>
          {isEditing ? (
            <form className="">
              <div className="space-y-4">
                <InputEl
                  onChange={handleChange}
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
                    onChange={handleChange}
                    id="f-name"
                    placeholder="First name"
                  />
                  <InputEl
                    onChange={handleChange}
                    id="l-name"
                    placeholder="Last name"
                  />
                </div>

                <InputEl
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
                    onChange={handleChange}
                    id="city"
                    placeholder="City"
                  />
                </div>
                <InputEl
                  onChange={handleChange}
                  id="phone"
                  placeholder="Phone number"
                />
              </div>
              <div className="flex justify-between mt-3 ">
                <button
                  type="button"
                  className="hover:text-white text-defaultBlue border-defaultBlue hover:bg-defaultBlue px-3 py-2  border rounded-lg"
                  onClick={() => setIsEditing(false)}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="text-white bg-defaultBlue px-4 py-2 hover:bg-inherit hover:border-defaultBlue hover:text-defaultBlue border rounded-lg"
                  onClick={() => setIsEditing(false)}
                >
                  Save
                </button>
              </div>
            </form>
          ) : (
            <div className="flex justify-between items-center rounded-lg border border-[#DED9DD] p-4 mt-4">
              <div>
                <h3 className="text-darkBlue font-semibold">Rosemary Sunday</h3>
                <p className="text-secondaryTextColor w-[80%]">
                  Mubinu. Osogbo, Osun, Ifedayo, Osun 07063797396.
                </p>
              </div>
              <button
                onClick={() => setIsEditing(true)}
                className="text-defaultBlue border border-defaultBlue rounded-3xl px-4 py-2 flex items-center gap-2"
              >
                <BorderColorOutlinedIcon /> <span className="">Edit</span>
              </button>
            </div>
          )}
          {/* shipping */}

          <div>
            <h2 className="font-semibold text-xl mb-4">Shipping Method</h2>
            <div className="space-y-4">
              {shippingMethods.map((option) => (
                <CheckoutMethod
                  key={option.id}
                  {...option}
                  groupName="shippingMethod"
                  selected={selectedShipping === option.id}
                  onChange={handleShippingChange}
                />
              ))}
            </div>
          </div>

          {/* payment  */}
          <div className="">
            <h2 className="font-semibold text-xl mb-4">Payment Method</h2>
            <div className="space-y-4">
              {paymentMethods.map((option) => (
                <CheckoutMethod
                  key={option.id}
                  {...option}
                  groupName="paymentMethod"
                  selected={selectedPayment === option.id}
                  onChange={handlePaymentChange}
                />
              ))}
            </div>
          </div>
          <CardDetailsModal btnText="Continue to pay" />
        </div>

        {/* right side */}
        <div className="flex w-full md:right-10 md:fixed md:w-[40%] max-h-screen">
          <OrderSummary btnText="Proceed" btnType="submit" />
        </div>
      </div>
    </section>
  );
}
