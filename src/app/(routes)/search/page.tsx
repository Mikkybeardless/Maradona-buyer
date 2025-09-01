'use client';
import { useCallback, useEffect, useState } from 'react';
import { filtersConfig } from '@/app/config';
import FilterSection from '@/app/_components/home/FilterSection';
import { ProductCard } from '@/app/_components/home/cards/product';
import { FiltersModal } from '@/app/_components/modals/MobileFilters';
import { useSearchParams } from 'next/navigation';
import { buildCleanParams } from '@/app/Utils/util';

import { Spinner } from '@/app/_components/common/spinner';

export default function SearchFilterPage() {
  const searchParams = useSearchParams();

  // Get initial query from URL
  const searchQuery = searchParams.get('query') || '';
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

  const [results, setResults] = useState<
    (ProductDetails & {
      id: number;
      belongs_to_admin: boolean;
      seller: { name: string };
    })[]
  >([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
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

  // Fetch search results
  const fetchSearchResults = async (
    query: string,
    currentFilters?: Record<string, string | string[]>
  ) => {
    if (!query.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const params = buildCleanParams(currentFilters, query);
      const response = await fetch(`/api/products?${params}`);

      if (!response.ok) {
        throw new Error('Search failed');
      }

      const { data } = await response.json();
      setResults(data.data.data || []);
    } catch (err) {
      setError('Failed to fetch search results');
      console.error('Search error:', err);
    } finally {
      setLoading(false);
    }
  };

  // Effect for search and filter changes
  useEffect(() => {
    if (searchQuery) {
      fetchSearchResults(searchQuery, filterData);
    }
  }, [searchQuery]);

  const handleSearchAndFilter = useCallback(() => {
    fetchSearchResults(searchQuery, filterData);
  }, [searchQuery, filterData]);

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
      } else if (typeof currentField === 'string') {
        return {
          ...prev,
          [field]: currentField === value ? '' : value,
        };
      } else if (typeof currentField === 'number') {
        return {
          ...prev,
          [field]: currentField === value ? null : value,
        };
      }

      // If not an array, just set the value
      return {
        ...prev,
        [field]: value,
      };
    });
  };

  if (error) return <p className="text-red-500">{error}</p>;

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

        <div className="flex justify-center items-center">
          <button
            onClick={handleSearchAndFilter}
            className="px-4 py-2 bg-orange-600 text-white rounded"
          >
            Apply Filters
          </button>
        </div>
      </div>

      {/* mobile filter */}
      <div>
        <FiltersModal
          onFilterApply={handleSearchAndFilter}
          handleChange={handleChange}
          filterData={filterData}
        />
      </div>
      {/* filter modal for mobile screen */}

      {/* results */}
      {loading ? (
        // <ProductLoadingSkeleton />
        <div className="flex justify-center mt-[200px] w-full">
          <Spinner borderColor="border-orange-600" size="w-20 h-20" />
        </div>
      ) : (
        <div className="flex flex-col  gap-4 md:w-[70%] md:px-[5%] ">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 ">
            {results.map((product) => (
              <ProductCard
                key={product.id}
                isAdminProduct={product.belongs_to_admin}
                seller={product.seller.name}
                productType="sale"
                imageUrl={product.media[0]}
                product={product}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
