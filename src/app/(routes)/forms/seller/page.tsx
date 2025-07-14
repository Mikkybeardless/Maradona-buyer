'use client';

import {
  Box,
  FormControl,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { useState } from 'react';
import { FaChevronRight } from 'react-icons/fa6';
import { useDropzone } from 'react-dropzone';
import { FiUploadCloud } from 'react-icons/fi';
import Link from 'next/link';

export default function SellerForm() {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    businessRegNo: '',
    businessAddress: '',
    city: '',
    state: '',
    website: '',
    businessName: '',
    nin: '',
    typeOfBusiness: 'Individual' as 'individual' | 'partnership',
    typeOfProducts: [],
    productsDescription: '',
    yearsOfExperience: '',
    shippingLocations: [],
    salesChannel: '',
    pricingStrategy: '',
    promotionalActivities: '',
    shippingMethod: '',
    marketingStrategy: '',
    preferredContactMethod: '',
    returnPolicy: '',
    termsOfSale: '',
    bestTimeToContact: '',
    additionalComments: '',
  } as {
    [key: string]: string | string[];
  });
  const [currentTab, setCurrentTab] = useState(1);

  const handleNextTab = () => {
    setCurrentTab((prev) => Math.min(prev + 1, 3));
  };

  const handlePrevTab = () => {
    setCurrentTab((prev) => Math.max(prev - 1, 1));
  };
  const products = ['Cars', 'Land', 'Houses', 'Electronics', 'Food'];

  const locations = [
    'Abuja',
    'Adamawa',
    'Lagos',
    'Kano',
    'Kaduna',
    'Oyo',
    'Ogun',
  ];

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const [productName, setProductName] = useState<string[]>([]);

  const [locationName, setLocationName] = useState<string[]>([]);

  const handleProductTypeChange = (
    event: SelectChangeEvent<typeof productName>
  ) => {
    const {
      target: { value },
    } = event;
    setProductName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };

  const handleLocationChange = (
    event: SelectChangeEvent<typeof locationName>
  ) => {
    const {
      target: { value },
    } = event;
    setLocationName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
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
        <span className="text-xs text-[#787878] ">Become a Vendor</span>
      </div>

      {/* Page Content  */}
      <div className="flex flex-col mt-10 items-center gap-y-10">
        <div className="uppercase text-3xl font-bold">SELLER FORM</div>
        <div className="w-full lg:w-5/6">
          {
            currentTab === 1 ? (
              // Tab One
              <div className="grid grid-cols-1 gap-y-2 md:grid-cols-3 justify-between md:gap-x-5 lg:gap-x-10">
                <div className="text-xs flex flex-col gap-y-8">
                  <div>
                    <label htmlFor="fullName" className="mb-1">
                      Full Name:
                    </label>
                    <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                      <input
                        className="bg-none outline-none text-[#A3A3B3] w-full"
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        id="fullName"
                        placeholder="Full name"
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
                        value={formData.email}
                        onChange={handleInputChange}
                        id="email"
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
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        id="phoneNumber"
                        placeholder="Phone"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="businessRegNo" className="mb-1">
                      Business Registration No (if applicable):
                    </label>
                    <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                      <input
                        className="bg-none outline-none text-[#A3A3B3] w-full"
                        type="text"
                        name="businessRegNo"
                        value={formData.businessRegNo}
                        onChange={handleInputChange}
                        id="businessRegNo"
                        placeholder="Reg No."
                      />
                    </div>
                  </div>
                </div>

                <div className="text-xs flex flex-col gap-y-8 justify-between">
                  <div>
                    <label htmlFor="businessAddress" className="mb-1">
                      Business Address
                    </label>
                    <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                      <input
                        className="bg-none outline-none text-[#A3A3B3] w-full"
                        type="text"
                        name="businessAddress"
                        value={formData.businessAddress}
                        onChange={handleInputChange}
                        id="businessAddress"
                        placeholder="Address"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="city" className="mb-1">
                      City:
                    </label>
                    <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                      <input
                        className="bg-none outline-none text-[#A3A3B3] w-full"
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        id="city"
                        placeholder="City"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="state" className="mb-1">
                      State:
                    </label>
                    <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                      <input
                        className="bg-none outline-none text-[#A3A3B3] w-full"
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        id="state"
                        placeholder="State"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="website" className="mb-1">
                      Website (if applicable):
                    </label>
                    <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                      <input
                        className="bg-none outline-none text-[#A3A3B3] w-full"
                        type="text"
                        name="website"
                        value={formData.website}
                        onChange={handleInputChange}
                        id="website"
                        placeholder="https://"
                      />
                    </div>
                  </div>
                </div>

                <div className="text-xs flex flex-col gap-y-8">
                  <div>
                    <label htmlFor="businessName" className="mb-1">
                      Business name:
                    </label>
                    <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                      <input
                        className="bg-none outline-none text-[#A3A3B3] w-full"
                        type="text"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleInputChange}
                        id="businessName"
                        placeholder="Business name"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="nin" className="mb-1">
                      NIN:
                    </label>
                    <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                      <input
                        className="bg-none outline-none text-[#A3A3B3] w-full"
                        type="text"
                        name="nin"
                        value={formData.nin}
                        onChange={handleInputChange}
                        id="nin"
                        placeholder="NIN"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="typeOfBusiness" className="mb-1">
                      Type of Business:
                    </label>
                    <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                      <select
                        name="typeOfBusiness"
                        value={formData.typeOfBusiness}
                        onChange={handleInputChange}
                        id="typeOfBusiness"
                        className="bg-none outline-none text-[#A3A3B3] w-full"
                      >
                        <option value="individual">Individual</option>
                        <option value="partnership">Partnership</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            ) : // Tab One End
            currentTab === 2 ? (
              // Tab Two
              <div className="grid grid-cols-1 gap-y-2 md:grid-cols-3 justify-between md:gap-x-5 lg:gap-x-10">
                <div className="text-xs flex flex-col gap-y-8 justify-between">
                  <div>
                    <label htmlFor="typeOfProducts" className="mb-1">
                      Type of Products:
                    </label>
                    <div>
                      <FormControl className="w-full" size="small">
                        <Select
                          labelId="demo-multiple-chip-label"
                          id="typeOfProducts"
                          multiple
                          value={productName}
                          onChange={handleProductTypeChange}
                          inputProps={{ 'aria-label': 'Without label' }}
                          input={
                            <OutlinedInput
                              id="select-multiple-chip"
                              label="Chip"
                            />
                          }
                          renderValue={(selected) => (
                            <Box
                              sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}
                            >
                              {selected.map((value, index) => (
                                <div
                                  key={index}
                                  className="border border-[#DED9DD] pl-2 rounded pr-8 py-2 text-xs"
                                >
                                  {value}
                                </div>
                              ))}
                            </Box>
                          )}
                        >
                          {products.map((product) => (
                            <MenuItem
                              key={product}
                              value={product}
                              // style={getStyles(product, personName, theme)}
                            >
                              {product}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="productsDescription" className="mb-1">
                      Products Description:
                    </label>
                    <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                      <textarea
                        className="bg-none outline-none text-[#A3A3B3]"
                        rows={5}
                        name="productsDescription"
                        value={formData.productsDescription}
                        onChange={handleInputChange}
                        id="productsDescription"
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="yearsOfExperience" className="mb-1">
                      Years of Experience
                    </label>
                    <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                      <input
                        className="bg-none outline-none text-[#A3A3B3] w-full"
                        type="text"
                        name="yearsOfExperience"
                        value={formData.yearsOfExperience}
                        onChange={handleInputChange}
                        id="yearsOfExperience"
                        placeholder="Order Number"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="shippingLocations" className="mb-1">
                      Shipping Locations
                    </label>
                    <div>
                      <FormControl className="w-full" size="small">
                        <Select
                          labelId="demo-multiple-chip-label"
                          id="shippingLocations"
                          multiple
                          value={locationName}
                          onChange={handleLocationChange}
                          inputProps={{ 'aria-label': 'Without label' }}
                          input={
                            <OutlinedInput
                              id="select-multiple-chip"
                              label="Chip"
                            />
                          }
                          renderValue={(selected) => (
                            <Box
                              sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}
                            >
                              {selected.map((value, index) => (
                                <div
                                  key={index}
                                  className="border border-[#DED9DD] pl-2 rounded pr-8 py-2 text-xs"
                                >
                                  {value}
                                </div>
                              ))}
                            </Box>
                          )}
                        >
                          {locations.map((location) => (
                            <MenuItem
                              key={location}
                              value={location}
                              // style={getStyles(product, personName, theme)}
                            >
                              {location}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                </div>

                <div className="text-xs flex flex-col gap-y-8 justify-between">
                  <div>
                    <label htmlFor="salesChannel" className="mb-1">
                      Sales Channel:
                    </label>
                    <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                      <input
                        className="bg-none outline-none text-[#A3A3B3] w-full"
                        type="text"
                        name="salesChannel"
                        value={formData.salesChannel}
                        onChange={handleInputChange}
                        id="salesChannel"
                        placeholder="Online market place"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="pricingStrategy" className="mb-1">
                      Pricing Strategy:
                    </label>
                    <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                      <input
                        className="bg-none outline-none text-[#A3A3B3] w-full"
                        type="text"
                        name="pricingStrategy"
                        value={formData.pricingStrategy}
                        onChange={handleInputChange}
                        id="pricingStrategy"
                        placeholder="Competitive Pricing"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="promotionalActivities" className="mb-1">
                      Promotional Activities:
                    </label>
                    <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                      <input
                        className="bg-none outline-none text-[#A3A3B3] w-full"
                        type="text"
                        name="promotionalActivities"
                        value={formData.promotionalActivities}
                        onChange={handleInputChange}
                        id="promotionalActivities"
                        placeholder="Discount"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="shippingMethod" className="mb-1">
                      Shipping Method:
                    </label>
                    <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                      <input
                        className="bg-none outline-none text-[#A3A3B3] w-full"
                        type="text"
                        name="shippingMethod"
                        value={formData.shippingMethod}
                        onChange={handleInputChange}
                        id="shippingMethod"
                        placeholder="Third Party Logistics"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="marketingStrategy" className="mb-1">
                      Marketing Strategy:
                    </label>
                    <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                      <input
                        className="bg-none outline-none text-[#A3A3B3] w-full"
                        type="text"
                        name="marketingStrategy"
                        value={formData.marketingStrategy}
                        onChange={handleInputChange}
                        id="marketingStrategy"
                        placeholder="Social media"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="preferredContactMethod" className="mb-1">
                      Preferred Contact Method:
                    </label>
                    <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                      <input
                        className="bg-none outline-none text-[#A3A3B3] w-full"
                        type="text"
                        name="preferredContactMethod"
                        value={formData.preferredContactMethod}
                        onChange={handleInputChange}
                        placeholder="method"
                        id="preferredContactMethod"
                      />
                    </div>
                  </div>
                </div>

                <div className="text-xs flex flex-col gap-y-8 justify-between">
                  <div>
                    <label htmlFor="returnPolicy" className="mb-1">
                      Return Policy:
                    </label>
                    <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                      <textarea
                        className="bg-none outline-none text-[#A3A3B3]"
                        rows={8}
                        name="returnPolicy"
                        value={formData.returnPolicy}
                        onChange={handleInputChange}
                        id="returnPolicy"
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor=" termsOfSale" className="mb-1">
                      Terms of Sale (e.g., payment, shipping terms)
                    </label>
                    <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                      <textarea
                        className="bg-none outline-none text-[#A3A3B3]"
                        rows={8}
                        name="termsOfSale"
                        value={formData.termsOfSale}
                        onChange={handleInputChange}
                        id="termsOfSale"
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="bestTimeToContact" className="mb-1">
                      Best Time to Contact:
                    </label>
                    <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                      <input
                        className="bg-none outline-none text-[#A3A3B3] w-full"
                        type="text"
                        name="bestTimeToContact"
                        id="bestTimeToContact"
                        onChange={handleInputChange}
                        value={formData.bestTimeToContact}
                        placeholder="Time"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              // Tab Two End
              // Tab Three
              <div className="flex flex-col items-center">
                <div className="flex flex-col text-xs w-full lg:w-1/2 gap-y-8">
                  <div>
                    <label htmlFor="upload" className="mb-1">
                      Upload Documents (e.g., business registration, product
                      catalog, photos):
                    </label>
                    <div className="text-[#6F6F6F] bg-[#FFFFFF] border border-[#DED9DD] px-10 py-14 rounded-lg flex justify-center items-center">
                      <div {...getRootProps({ className: 'dropzone' })}>
                        <input id="upload" {...getInputProps()} />
                        <div className="font-light">
                          <FiUploadCloud size={80} />
                        </div>
                        <div className="-ml-3 text-xs">Upload Documents</div>
                      </div>
                    </div>
                    {/* Uploaded Files */}
                    <div>
                      <ul>{files}</ul>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="additionalComments" className="mb-1">
                      Additional Comments or Questions:
                    </label>
                    <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                      <textarea
                        className="bg-none outline-none text-[#A3A3B3]"
                        rows={10}
                        name="additionalComments"
                        value={formData.additionalComments}
                        onChange={handleInputChange}
                        id="additionalComments"
                        placeholder=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            )

            // Tab Three End
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
              {currentTab < 3 ? (
                <button
                  type="button"
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
            <button
              onClick={() => setCurrentTab(3)}
              className={`${currentTab === 3 ? 'bg-[#14199C]' : null} border border-[#14199C] p-1 rounded-2xl`}
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
}
