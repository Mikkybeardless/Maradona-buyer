'use client';

import { useState } from 'react';
import { FaChevronRight } from 'react-icons/fa6';
import Link from 'next/link';

export default function ReturnForm() {
  const [currentTab, setCurrentTab] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    lastName: '',
    orderNumber: '',
    phoneNumber: '',
    dateOfPurchase: '',
    additonalInformation: '',
    packaging: '',
    originalPackaging: false,
    city: '',
    state: '',
    contactRef: '',
    condition: 'unUsed' as 'used' | 'unUsed',
    productSKU: '',
    quantity: '',
    productName: '',
    refundMethod: '',
    contactTime: '',
    shippingInstructions: '',
    shipping: false,
    zipCode: '',
    reasonsForReturn: '',
  });

  const handleNextTab = () => {
    setCurrentTab((prev) => Math.min(prev + 1, 2));
  };

  const handlePrevTab = () => {
    setCurrentTab((prev) => Math.max(prev - 1, 1));
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="w-full h-screen overflow-y-auto overflow-x-hidden custom-scrollbar flex flex-col bg-[#F7F7F7] p-8">
      {/* Breadcrumb Navigation */}
      <div className="flex flex-wrap gap-x-2 gap-y-2 items-center text-xs">
        <Link href={`/`} className="">
          Home
        </Link>
        <FaChevronRight size={14} />
        <Link href={`/return-policy`} className="">
          Returns and Refunds
        </Link>
        <FaChevronRight size={14} />
        <span className="text-xs text-[#787878] ">Return Form</span>
      </div>

      {/* Page Content  */}
      <div className="flex flex-col mt-10 items-center gap-y-10">
        <div className="uppercase text-3xl font-bold">Refund Form</div>
        <form className="w-full lg:w-5/6">
          {
            currentTab === 1 ? (
              // Tab One
              <div className="grid grid-cols-1 gap-y-2 md:grid-cols-3 justify-between md:gap-x-5 lg:gap-x-10">
                <div className="text-xs flex flex-col gap-y-8">
                  <div>
                    <label htmlFor="firstName" className="mb-1">
                      First Name:
                    </label>
                    <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                      <input
                        className="bg-none outline-none text-[#A3A3B3] w-full"
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="First name"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1">
                      Email:
                    </label>
                    <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                      <input
                        className="bg-none outline-none text-[#A3A3B3] w-full"
                        type="text"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phoneNumber" className="mb-1">
                      Phone Number:
                    </label>
                    <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                      <input
                        className="bg-none outline-none text-[#A3A3B3] w-full"
                        type="text"
                        name="phoneNumber"
                        id="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        placeholder="Phone"
                      />
                    </div>
                  </div>
                </div>

                <div className="text-xs flex flex-col gap-y-8">
                  <div>
                    <label htmlFor="lastName" className="mb-1">
                      Last Name:
                    </label>
                    <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                      <input
                        className="bg-none outline-none text-[#A3A3B3] w-full"
                        type="text"
                        name="lastName"
                        id="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="First name"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="orderNumber" className="mb-1">
                      Order Number:
                    </label>
                    <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                      <input
                        className="bg-none outline-none text-[#A3A3B3] w-full"
                        type="text"
                        name="orderNumber"
                        id="orderNumber"
                        value={formData.orderNumber}
                        onChange={handleInputChange}
                        placeholder="Order Number"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="dateOfPurchase" className="mb-1">
                      Date of Purchase:
                    </label>
                    <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                      <input
                        className="bg-none outline-none text-[#A3A3B3] w-full"
                        type="text"
                        name="dateOfPurchase"
                        id="dateOfPurchase"
                        value={formData.dateOfPurchase}
                        onChange={handleInputChange}
                        placeholder="Type"
                      />
                    </div>
                  </div>
                </div>

                <div className="text-xs flex flex-col gap-y-8">
                  <div>
                    <label htmlFor="additonalInformation" className="mb-1">
                      Reasons for Return:
                    </label>
                    <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                      <input
                        className="bg-none outline-none text-[#A3A3B3] w-full"
                        type="text"
                        name="reasonsForReturn"
                        id="reasonsForReturn"
                        value={formData.reasonsForReturn}
                        onChange={handleInputChange}
                        placeholder="Reasons for Return"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="additonalInformation" className="mb-1">
                      Additional Information:
                    </label>
                    <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                      <textarea
                        className="bg-none outline-none text-[#A3A3B3]"
                        rows={10}
                        id="additonalInformation"
                        name="additonalInformation"
                        value={formData.additonalInformation}
                        onChange={handleInputChange}
                        placeholder=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              // Tab One End
              // Tab Two
              <div className="grid grid-cols-1 gap-y-2 md:grid-cols-3 justify-between md:gap-x-5 lg:gap-x-10">
                <div className="text-xs flex flex-col gap-y-8">
                  <div>
                    <label htmlFor="productName" className="mb-1">
                      Product Name:
                    </label>
                    <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                      <input
                        className="bg-none outline-none text-[#A3A3B3] w-full"
                        type="text"
                        name="productName"
                        id="productName"
                        value={formData.productName}
                        onChange={handleInputChange}
                        placeholder="Product Name"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="quantity" className="mb-1">
                      Quantity:
                    </label>
                    <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                      <input
                        className="bg-none outline-none text-[#A3A3B3] w-full"
                        type="text"
                        id="quantity"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleInputChange}
                        placeholder="Quantity"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="productSKU" className="mb-1">
                      Product SKU/ID:
                    </label>
                    <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                      <input
                        className="bg-none outline-none text-[#A3A3B3] w-full"
                        type="text"
                        id="productSKU"
                        name="productSKU"
                        value={formData.productSKU}
                        onChange={handleInputChange}
                        placeholder="Order Number"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="condition" className="mb-1">
                      Condition:
                    </label>
                    <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                      <select
                        name="condition"
                        value={formData.condition}
                        onChange={handleInputChange}
                        className="bg-none outline-none text-[#A3A3B3] w-full"
                      >
                        <option value="unused">Unused</option>
                        <option value="used">Used</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                      <input
                        className="bg-none outline-none text-[#A3A3B3] w-full"
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        placeholder="City"
                      />
                    </div>
                  </div>
                </div>

                <div className="text-xs flex flex-col gap-y-8 justify-between">
                  <div>
                    <label htmlFor="packaging" className="mb-1">
                      Packaging:
                    </label>
                    <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                      <input
                        className="bg-none outline-none text-[#A3A3B3] w-full"
                        type="text"
                        name="packaging"
                        id="packaging"
                        value={formData.packaging}
                        onChange={handleInputChange}
                        placeholder="Packaging"
                      />
                    </div>
                    <div className="flex items-center gap-x-2 mt-8">
                      <input
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            originalPackaging: e.target.checked,
                          })
                        }
                        checked={formData.originalPackaging}
                        name="originalPackaging"
                        id="originalPackaging"
                        className=""
                        type="radio"
                      />
                      <span>Original packaging included</span>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="refundMethod" className="mb-1">
                      Refund Method:
                    </label>
                    <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                      <input
                        className="bg-none outline-none text-[#A3A3B3] w-full"
                        type="text"
                        name="refundMethod"
                        value={formData.refundMethod}
                        onChange={handleInputChange}
                        placeholder="Refund to original payment method"
                      />
                    </div>
                    <div className="mt-8">
                      <p className="mb-4">Return Shipping:</p>
                      <div className="flex items-center gap-x-2">
                        <input
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              shipping: e.target.checked,
                            })
                          }
                          checked={formData.shipping}
                          id="shipping"
                          name="shipping"
                          className=""
                          type="radio"
                        />
                        <label htmlFor="shipping">
                          I will ship the item(s) back
                        </label>
                      </div>
                      <div className="flex items-center gap-x-2 mt-2">
                        <input
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              shipping: !e.target.checked,
                            })
                          }
                          checked={!formData.shipping}
                          name="pickUp"
                          id="pickUp"
                          className=""
                          type="radio"
                        />
                        <label htmlFor="pickUp">Arrange for pickup</label>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                      <input
                        className="bg-none outline-none text-[#A3A3B3] w-full"
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        placeholder="State"
                      />
                    </div>
                  </div>
                </div>

                <div className="text-xs flex flex-col gap-y-8 justify-between">
                  <div>
                    <label htmlFor="contactRef" className="mb-1">
                      Contact Preferences:
                    </label>
                    <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                      <input
                        className="bg-none outline-none text-[#A3A3B3] w-full"
                        type="text"
                        id="contactRef"
                        name="contactRef"
                        value={formData.contactRef}
                        onChange={handleInputChange}
                        placeholder="Contact Preferences"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="contactTime" className="mb-1">
                      Best Time to Contact:
                    </label>
                    <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                      <input
                        className="bg-none outline-none text-[#A3A3B3] w-full"
                        type="text"
                        id="contactTime"
                        name="contactTime"
                        value={formData.contactTime}
                        onChange={handleInputChange}
                        placeholder="Best Time to Contact"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="shippingInstruction" className="mb-1">
                      Shipping Instructions (if applicable):
                    </label>
                    <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                      <input
                        className="bg-none outline-none text-[#A3A3B3] w-full"
                        type="text"
                        id="shippingInstruction"
                        name="shippingInstructions"
                        value={formData.shippingInstructions}
                        onChange={handleInputChange}
                        placeholder="Contact Preferences"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                      <input
                        className="bg-none outline-none text-[#A3A3B3] w-full"
                        type="text"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        placeholder="Zip Code"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )

            // Tab Two End
          }

          <div className="flex flex-col gap-y-4 md:flex-row justify-between mt-24">
            <div>
              <button
                onClick={() => handlePrevTab()}
                className={`${
                  currentTab === 1
                    ? 'border border-black text-black'
                    : 'border border-[#14199C] text-[#14199C] '
                } cursor-pointer text-center text-sm px-14 py-2 rounded`}
              >
                Back
              </button>
            </div>

            <div>
              {currentTab === 1 ? (
                <button
                  onClick={() => handleNextTab()}
                  className=" cursor-pointer border border-[#14199C] text-[#14199C] text-center text-sm px-14 py-2 rounded"
                >
                  Next
                </button>
              ) : (
                <button className="border border-[#14199C] text-[#14199C] cursor-pointer text-center text-sm px-14 py-2 rounded">
                  Submit
                </button>
              )}
            </div>
          </div>

          <div className="flex justify-center items-center gap-x-2 mt-4 mb-10">
            <button
              onClick={() => setCurrentTab(1)}
              className={`${currentTab === 1 ? 'bg-[#14199C]' : null} border border-[#14199C] p-1 rounded-2xl`}
            ></button>
            <button
              onClick={() => setCurrentTab(2)}
              className={`${currentTab === 2 ? 'bg-[#14199C]' : null} border border-[#14199C] p-1 rounded-2xl`}
            ></button>
          </div>
        </form>
      </div>
    </div>
  );
}
