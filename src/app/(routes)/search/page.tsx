'use client';
import { useState } from 'react';
import { filtersConfig } from '@/app/config';
import FilterSection from '@/app/_components/home/FilterSection';
import { repeatedComponents } from '@/app/_components/common/repeatComp';
import { ProductCard } from '@/app/_components/home/cards/product';

export default function SearchFilterPage() {
  const [filterData, setFilterData] = useState({
    bedrooms: [],
    bathrooms: [],
    priceRange: [],
    houseType: [],
    carType: [],
    landType: [],
    docType: [],
    furnishedStatus: [],
    accessibility: [],
    topography: [],
    fencing: '',
    condition: '',
    transmission: [],
    bodyType: [],
    propertyType: '',
  });
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

  const handleFilterToggle = (filter: string) => {
    setShowFilter((prev) => ({
      ...prev,
      [filter]: !prev[filter],
    }));
  };

  const handleChange = (field: string, value: string | number) => () => {
    setFilterData((prev) => {
      const currentField = prev[field];

      // If it's an array, toggle the value
      if (Array.isArray(currentField)) {
        const exists = currentField.includes(value);
        return {
          ...prev,
          [field]: exists
            ? currentField.filter((item) => item !== value) // remove
            : [...currentField, value], // add
        };
      }

      // If not an array, just set the value
      return {
        ...prev,
        [field]: value,
      };
    });
  };

  return (
    <div className="flex px-[5%] md:px-0 flex-col gap-5 md:gap-0 md:flex-row mt-16 md:mt-8">
      {/* desktop filter */}
      <div className="md:flex hidden  flex-col gap-7 md:pl-[4%] md:w-[30%]">
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

      {/* mobile filter */}
      <div>
        <button className="md:hidden">Filters</button>
      </div>
      {/* filter modal for mobile screen */}

      <div className="flex flex-col gap-4 md:w-[70%] md:px-[5%] ">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 ">
          {repeatedComponents(
            24,
            <ProductCard
              imageUrl="/home/auction-house.png"
              title="2601 Apapa close, Lekki"
              isActive={false}
            />
          )}
        </div>
      </div>
    </div>
  );
}
