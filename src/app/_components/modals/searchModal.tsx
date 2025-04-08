import { useState } from "react";
import ModalWrapper from "./modalWrapper";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import Image from "next/image";

export const SearchModal = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const prevSearches = [
    {
      name: "Toyota Camry SE (2024)",
      amount: "₦ 2,500,000",
      imgSrc: "/categories/car.png",
    },
    {
      name: "Toyota Camry SE (2024)",
      amount: "₦ 2,500,000",
      imgSrc: "/categories/car.png",
    },
  ];
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
        Search
      </button>
      <ModalWrapper isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
        <div className="w-full px-10 py-4 bg-[#F5F5F5] rounded-lg  flex flex-col gap-4">
          <button
            className="absolute top-4 right-4  p-2 text-gray-600 hover:text-gray-400"
            onClick={() => {
              setIsModalOpen(false);
            }}
          >
            <CloseRoundedIcon />
          </button>
          <h2 className="text-darkBlue text-lg">
            Search related to this product
          </h2>

          <div className="grid grid-cols-4 gap-4">
            {prevSearches.map((prev) => (
              <div key={prev.name} className="flex flex-col gap-2">
                <Image
                  src={prev.imgSrc}
                  alt={prev.name}
                  className="w-full h-32 object-cover rounded-lg"
                />
                <h3 className="text-lg font-semibold text-secondaryTextColor">
                  {prev.name}
                </h3>
                <p className="text-defaultBlue text-2xl">{prev.amount}</p>
              </div>
            ))}
          </div>
        </div>
      </ModalWrapper>
    </div>
  );
};
