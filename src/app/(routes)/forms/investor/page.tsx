'use client';
import { useState } from 'react';
import { FaChevronRight } from 'react-icons/fa6';
import Link from 'next/link';

export default function InvestorForm() {
  const [currentTab, setCurrentTab] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    nationality: '',
    address: '',
    dob: '',
    state: '',
    city: '',
    investMentAmount: 0,
    primaryRevenue: '',
    sellingPlan: '',
    scalingPlan: '',
    expansionPlan: '',
    potentialRisks: '',
    businessName: '',
    businessType: 'individual' as 'individual' | 'partnership',
    challengePlan: '',
    existStrategy: '',
    alignment: '',
    futurePlan: '',
    aditionalInfo: '',
    coreFeatures: '',
    targetMarket: '',
    differentiation: '',
    valuePropositions: '',
    expectedRI: '',
    reasonForInvestment: '',
    confidentiality: false,
    expectedCost: '',
    expectedHoldingPeriod: '',
    investmentStructure: '',
  });

  const handleNextTab = () => {
    setCurrentTab((prev) => Math.min(prev + 1, 4));
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
    <section className="w-full h-screen overflow-y-auto overflow-x-hidden custom-scrollbar flex flex-col bg-[#F7F7F7] p-8">
      {/* Breadcrumb Navigation */}
      <div className="flex flex-wrap gap-x-2 gap-y-2 items-center text-xs">
        <Link href={`/`} className="">
          Home
        </Link>
        <FaChevronRight size={14} />
        <span className="text-xs text-[#787878] ">Become an Investor</span>
      </div>

      {/* Page Content  */}
      <div className="flex flex-col mt-10 items-center gap-y-10">
        <div className="uppercase text-3xl font-bold">INVESTOR FORM</div>
        <p className="text-sm text-center lg:w-1/2">
          <span className="font-bold">Purpose: </span> To raise capital for an
          e-commerce platform that facilitates the sale of distressed inventory,
          overstock, surplus stock, and liquidation sales.
        </p>
        <form className="w-full lg:w-5/6">
          {
            currentTab === 1 ? (
              // Tab One
              <div className="grid grid-cols-1 gap-y-2 md:grid-cols-3 justify-between md:gap-x-5 lg:gap-x-10">
                <div className="text-xs flex flex-col gap-y-8">
                  <div>
                    <div className="mb-1">Full Name:</div>
                    <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                      <input
                        className="bg-none outline-none text-[#A3A3B3] w-full"
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="Full name"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mb-1">Email:</div>
                    <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                      <input
                        className="bg-none outline-none text-[#A3A3B3] w-full"
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mb-1">Phone Number:</div>
                    <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                      <input
                        className="bg-none outline-none text-[#A3A3B3] w-full"
                        type="text"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        placeholder="Phone"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mb-1">Date of Birth (DOB)</div>
                    <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                      <input
                        className="bg-none outline-none text-[#A3A3B3] w-full"
                        type="date"
                        name="dob"
                        value={formData.dob}
                        onChange={handleInputChange}
                        placeholder="DOB"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mb-1">Nationality</div>
                    <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                      <input
                        className="bg-none outline-none text-[#A3A3B3] w-full"
                        type="text"
                        name="nationality"
                        value={formData.nationality}
                        onChange={handleInputChange}
                        placeholder="Nationality"
                      />
                    </div>
                  </div>
                </div>

                <div className="text-xs flex flex-col gap-y-8 justify-between">
                  <div>
                    <div className="mb-1">Address</div>
                    <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                      <input
                        className="bg-none outline-none text-[#A3A3B3] w-full"
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder="Address"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mb-1">State:</div>
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
                  <div>
                    <div className="mb-1">City:</div>
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
                  <div>
                    <div className="mb-1">Investment Amount (USD):</div>
                    <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                      <input
                        className="bg-none outline-none text-[#A3A3B3] w-full"
                        type="number"
                        name="investMentAmount"
                        value={formData.investMentAmount}
                        onChange={handleInputChange}
                        placeholder="Amount"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mb-1">Preferred Investment Structure:</div>
                    <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                      <input
                        className="bg-none outline-none text-[#A3A3B3] w-full"
                        type="text"
                        name="investmentStructure"
                        value={formData.investmentStructure}
                        onChange={handleInputChange}
                        placeholder="Equity"
                      />
                    </div>
                  </div>
                </div>

                <div className="text-xs flex flex-col gap-y-8 justify-between">
                  <div>
                    <div className="mb-1">Expected Holding Period (years):</div>
                    <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                      <input
                        className="bg-none outline-none text-[#A3A3B3] w-full"
                        type="text"
                        placeholder="Period"
                        name="expectedHoldingPeriod"
                        value={formData.expectedHoldingPeriod}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mb-1">
                      Why are you interested in investing in this e-commerce
                      platform?
                    </div>
                    <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                      <textarea
                        className="bg-none outline-none text-[#A3A3B3]"
                        rows={10}
                        name="reasonForInvestment"
                        value={formData.reasonForInvestment}
                        onChange={handleInputChange}
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mb-1">Type of Business:</div>
                    <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                      <select
                        name="businessType"
                        onChange={handleInputChange}
                        className="bg-none outline-none text-[#A3A3B3] w-full"
                      >
                        <option value="indivitual">Individual</option>
                        <option value="partnership">Partnership</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            ) : // Tab One End
            currentTab === 2 ? (
              // Tab Two
              <div className="grid grid-cols-1 gap-y-2 md:grid-cols-2 justify-between md:gap-x-5 lg:gap-x-10">
                <div className="text-xs flex flex-col gap-y-8 justify-between">
                  <div>
                    <div className="mb-1">
                      What are your expectations regarding returns on investment
                      (ROI)?
                    </div>
                    <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                      <textarea
                        className="bg-none outline-none text-[#A3A3B3]"
                        rows={8}
                        name="expectedRI"
                        value={formData.expectedRI}
                        onChange={handleInputChange}
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mb-1">
                      How does this investment align with your overall
                      investment strategy and risk tolerance?
                    </div>
                    <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                      <textarea
                        className="bg-none outline-none text-[#A3A3B3]"
                        rows={8}
                        name="alignment"
                        value={formData.alignment}
                        onChange={handleInputChange}
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mb-1">
                      Describe the target market for distress sales and
                      inventory liquidation:
                    </div>
                    <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                      <textarea
                        className="bg-none outline-none text-[#A3A3B3]"
                        rows={8}
                        name="targetMarket"
                        value={formData.targetMarket}
                        onChange={handleInputChange}
                        placeholder=""
                      />
                    </div>
                  </div>
                </div>

                <div className="text-xs flex flex-col gap-y-8 justify-between">
                  <div>
                    <div className="mb-1">
                      What are the core features and value propositions of the
                      platform?
                    </div>
                    <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                      <textarea
                        className="bg-none outline-none text-[#A3A3B3]"
                        rows={8}
                        name="coreFeatures"
                        value={formData.coreFeatures}
                        onChange={handleInputChange}
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mb-1">
                      How does this platform differentiate itself from other
                      e-commerce platforms focused on distress sales?
                    </div>
                    <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                      <textarea
                        className="bg-none outline-none text-[#A3A3B3]"
                        rows={8}
                        name="differentiation"
                        value={formData.differentiation}
                        onChange={handleInputChange}
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mb-1">
                      What are the primary revenue streams for the platform
                      (e.g., commissions on sales, subscription fees,
                      advertising)?
                    </div>
                    <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                      <textarea
                        className="bg-none outline-none text-[#A3A3B3]"
                        rows={8}
                        name="primaryRevenue"
                        value={formData.primaryRevenue}
                        onChange={handleInputChange}
                        placeholder=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            ) : // Tab Two End
            currentTab === 3 ? (
              // Tab Three
              <div className="grid grid-cols-1 gap-y-2 md:grid-cols-2 justify-between md:gap-x-5 lg:gap-x-10">
                <div className="text-xs flex flex-col gap-y-8 justify-between">
                  <div>
                    <div className="mb-1">
                      How do you plan to attract sellers to the platform?
                    </div>
                    <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                      <textarea
                        className="bg-none outline-none text-[#A3A3B3]"
                        rows={8}
                        name="sellingPlan"
                        value={formData.sellingPlan}
                        onChange={handleInputChange}
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mb-1">
                      What are the expected costs associated with running this
                      platform (e.g. operational costs, marketing, technology
                      infrastructure)?
                    </div>
                    <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                      <textarea
                        className="bg-none outline-none text-[#A3A3B3]"
                        rows={8}
                        name="expectedCost"
                        value={formData.expectedCost}
                        onChange={handleInputChange}
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mb-1">
                      How do you plan to scale the platform to achieve your
                      target market size?
                    </div>
                    <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                      <textarea
                        className="bg-none outline-none text-[#A3A3B3]"
                        rows={8}
                        name="scalingPlan"
                        value={formData.scalingPlan}
                        onChange={handleInputChange}
                        placeholder=""
                      />
                    </div>
                  </div>
                </div>

                <div className="text-xs flex flex-col gap-y-8 justify-between">
                  <div>
                    <div className="mb-1">
                      How do you plan to expand your customer base and increase
                      market penetration?
                    </div>
                    <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                      <textarea
                        className="bg-none outline-none text-[#A3A3B3]"
                        rows={8}
                        name="expansionPlan"
                        value={formData.expansionPlan}
                        onChange={handleInputChange}
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mb-1">
                      What are the potential risks associated with the
                      e-commerce platform and how do you plan to manage them?
                    </div>
                    <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                      <textarea
                        className="bg-none outline-none text-[#A3A3B3]"
                        rows={8}
                        name="potentialRisks"
                        value={formData.potentialRisks}
                        onChange={handleInputChange}
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mb-1">
                      How do you plan to address operational challenges (e.g.,
                      handling returns, inventory management, customer service
                      issues)?
                    </div>
                    <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                      <textarea
                        className="bg-none outline-none text-[#A3A3B3]"
                        rows={8}
                        name="challengePlan"
                        value={formData.challengePlan}
                        onChange={handleInputChange}
                        placeholder=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              // Tab Three End
              // Tab Four
              <div className="grid grid-cols-1 gap-y-2 md:grid-cols-2 justify-between md:gap-x-5 lg:gap-x-10">
                <div className="text-xs flex flex-col gap-y-8 justify-between">
                  <div>
                    <div className="mb-1">
                      What is your preferred exit strategy (e.g., acquisition by
                      a larger company, IPO, secondary market sales)?
                    </div>
                    <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                      <textarea
                        className="bg-none outline-none text-[#A3A3B3]"
                        rows={8}
                        name="existStrategy"
                        value={formData.existStrategy}
                        onChange={handleInputChange}
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mb-1">
                      How do you envision the future of the platform after the
                      investment period (e.g., industry consolidation,
                      competitive advantages, sustainability)?
                    </div>
                    <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                      <textarea
                        className="bg-none outline-none text-[#A3A3B3]"
                        rows={8}
                        name="futurePlan"
                        value={formData.futurePlan}
                        onChange={handleInputChange}
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mb-1">
                      Do you agree to maintain the confidentiality of sensitive
                      information shared during this investment process?
                    </div>
                    <div className="flex items-center gap-x-4">
                      <div className="flex items-center gap-x-2 mt-4">
                        <input
                          className=""
                          type="radio"
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              confidentiality: e.target.checked,
                            })
                          }
                          name="confidentiality"
                        />
                        <span>Yes</span>
                      </div>

                      <div className="flex items-center gap-x-2 mt-4">
                        <input
                          className=""
                          type="radio"
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              confidentiality: !e.target.checked,
                            })
                          }
                          name="confidentiality"
                        />
                        <span>No</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-xs flex flex-col gap-y-8 justify-between">
                  <div>
                    <div className="mb-1">
                      Please feel free to add any other information that you
                      believe is relevant to this investment opportunity:
                    </div>
                    <div className="bg-[#FFFFFF] border border-[#DED9DD] p-2 rounded">
                      <textarea
                        className="bg-none outline-none text-[#A3A3B3]"
                        rows={8}
                        name="aditionalInfo"
                        value={formData.aditionalInfo}
                        onChange={handleInputChange}
                        placeholder=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            )

            // Tab Four End
          }

          <div className="flex flex-col gap-y-4 md:flex-row justify-between mt-24">
            <div>
              <div
                onClick={() => handlePrevTab()}
                className={`${
                  currentTab === 1
                    ? 'border border-black text-black'
                    : 'border border-[#14199C] text-[#14199C] '
                } cursor-pointer text-center text-sm px-14 py-2 rounded`}
              >
                Back
              </div>
            </div>

            <div>
              {currentTab < 4 ? (
                <div
                  onClick={() => handleNextTab()}
                  className=" cursor-pointer border border-[#14199C] text-[#14199C] text-center text-sm px-14 py-2 rounded"
                >
                  Next
                </div>
              ) : (
                <button className="border border-[#14199C] text-[#14199C] cursor-pointer text-center text-sm px-14 py-2 rounded">
                  Submit
                </button>
              )}
            </div>
          </div>

          <div className="flex justify-center items-center gap-x-2 mt-4 mb-10">
            <div
              onClick={() => setCurrentTab(1)}
              className={`${
                currentTab === 1 ? 'bg-[#14199C]' : null
              } border border-[#14199C] p-1 rounded-2xl`}
            ></div>
            <div
              onClick={() => setCurrentTab(2)}
              className={`${
                currentTab === 2 ? 'bg-[#14199C]' : null
              } border border-[#14199C] p-1 rounded-2xl`}
            ></div>
            <div
              onClick={() => setCurrentTab(3)}
              className={`${
                currentTab === 3 ? 'bg-[#14199C]' : null
              } border border-[#14199C] p-1 rounded-2xl`}
            ></div>
            <div
              onClick={() => setCurrentTab(4)}
              className={`${
                currentTab === 4 ? 'bg-[#14199C]' : null
              } border border-[#14199C] p-1 rounded-2xl`}
            ></div>
          </div>
        </form>
      </div>
    </section>
  );
}
