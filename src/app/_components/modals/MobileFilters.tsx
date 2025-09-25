'use client';
import { useState } from 'react';
import ModalWrapper from './modalWrapper';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { IoFilterOutline } from 'react-icons/io5';
import {
  CarFiltersConfig,
  HouseFiltersConfig,
  LandFiltersConfig,
} from '@/app/config';
import FilterSection from '../home/FilterSection';

interface MobileFiltersProps {
  handleChange: (field: string, value: string | number) => () => void;
  onFilterApply: () => void;
  productType: 'sale' | 'auction';
  setProductType: (type: 'sale' | 'auction') => void;
  filterData: FilterData;
  setFilterData: React.Dispatch<React.SetStateAction<FilterData>>;
}

export const FiltersModal = ({
  handleChange,
  onFilterApply,
  filterData,
  productType,
  setProductType,
  setFilterData,
}: MobileFiltersProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [showFilter, setShowFilter] = useState({
    bedrooms: false,
    bathrooms: false,
    price_range: false,
    house_type: false,
    car_type: false,
    land_type: false,
    doc_type: false,
    furnished_status: false,
    accessibility: false,
    topography: false,
    fencing: false,
    condition: false,
    transmission: false,
    body_type: false,
    mileage: false,
    drive_type: false,
    fuel_type: false,
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
            <div className="space-y-4 border-b pb-4">
              {' '}
              <div className="w-full flex flex-col gap-2">
                <select
                  id="productType"
                  onChange={(e) =>
                    setProductType(e.target.value as 'sale' | 'auction')
                  }
                  name="productType"
                  value={productType}
                  className="p-2 outline-none w-full "
                >
                  <option disabled value="">
                    Select product type
                  </option>
                  <option value="auction">Auction</option>
                  <option value="sale">Sale</option>
                </select>
              </div>
              <div className="w-full flex flex-col gap-2">
                <select
                  id="type"
                  onChange={(e) =>
                    setFilterData((prev) => ({ ...prev, type: e.target.value }))
                  }
                  name="type"
                  value={filterData.type}
                  className="p-2 outline-none w-full "
                >
                  <option disabled value="">
                    Select product category
                  </option>
                  <option value="LAND">Land</option>
                  <option value="CAR">Car</option>
                  <option value="HOUSE">House</option>
                </select>
              </div>
            </div>
            {filterData.type === 'LAND' &&
              LandFiltersConfig.map(({ key, label, type, options }) => (
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

            {filterData.type === 'CAR' &&
              CarFiltersConfig.map(({ key, label, type, options }) => (
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

            {filterData.type === 'HOUSE' &&
              HouseFiltersConfig.map(({ key, label, type, options }) => (
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
