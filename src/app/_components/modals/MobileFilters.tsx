'use client';
import { useState } from 'react';
import ModalWrapper from './modalWrapper';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { IoFilterOutline } from 'react-icons/io5';
import { filtersConfig } from '@/app/config';
import FilterSection from '../home/FilterSection';

export const FiltersModal = ({
  handleChange,
  onFilterApply,
  filterData,
}: {
  handleChange: (field: string, value: string | number) => () => void;
  filterData: {
    bedrooms: string[];
    bathrooms: string[];
    priceRange: string[];
    houseType: string[];
    carType: string[];
    landType: string[];
    docType: string[];
    furnishedStatus: string[];
    accessibility: string[];
    topography: string[];
    fencing: string;
    condition: string;
    transmission: string[];
    bodyType: string[];
    propertyType: string;
  };
  onFilterApply: () => void;
}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [showFilter, setShowFilter] = useState({
    bedrooms: false,
    bathrooms: false,
    priceRange: false,
    houseType: false,
    carType: false,
    landType: false,
    docType: false,
    furnishedStatus: false,
    accessibility: false,
    topography: false,
    fencing: false,
    condition: false,
    transmission: false,
    bodyType: false,
    mileage: false,
    driveType: false,
    fuelType: false,
  });

  const handleApplyFilter = () => {
    onFilterApply();
    setIsModalOpen(false);
  };
  const handleFilterToggle = (filter: string) => {
    setShowFilter((prev) => ({
      ...prev,
      [filter]: !prev[filter],
    }));
  };

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          setIsModalOpen(true);
        }}
        className="md:hidden flex items-center gap-2 border-[#D0D5DD] border rounded-xl px-4 py-2"
      >
        <IoFilterOutline />
        Filters
      </button>
      <ModalWrapper
        modalWidth="md:w-[50%]  w-[95%]  my-5"
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
      >
        <div className="w-full p-3 md:p-4 bg-white rounded-lg  flex flex-col gap-2 overflow-y-auto max-h-[70vh]">
          <button
            className="absolute hover:bg-gray-100   top-4 right-4 rounded-full p-2 "
            onClick={() => {
              setIsModalOpen(false);
            }}
          >
            <CloseRoundedIcon />
          </button>
          <h2 className="text-lg md:text-2xl font-bold text-center">
            Add Filters
          </h2>
          <hr />
          <div className="flex flex-col gap-7 md:pl-[2%] ">
            {filtersConfig.map(({ key, label, type, options }) => (
              <FilterSection
                key={key}
                keyName={key}
                label={label}
                type={type as 'button' | 'checkbox' | 'range'}
                options={options}
                show={showFilter[key]}
                onToggle={() => handleFilterToggle(key)}
                onChange={handleChange}
                selected={filterData[key]}
              />
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center">
          <button
            onClick={handleApplyFilter}
            className="px-4 py-2 bg-orange-600 text-white rounded"
          >
            Apply Filters
          </button>
        </div>
      </ModalWrapper>
    </div>
  );
};
