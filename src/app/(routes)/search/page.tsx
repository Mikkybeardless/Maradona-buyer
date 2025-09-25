'use client';
import { useEffect, useState } from 'react';
import {
  CarFiltersConfig,
  HouseFiltersConfig,
  LandFiltersConfig,
} from '@/app/config';
import FilterSection from '@/app/_components/home/FilterSection';
import { ProductCard } from '@/app/_components/home/cards/product';
import { FiltersModal } from '@/app/_components/modals/MobileFilters';
import { useSearchParams } from 'next/navigation';
import { buildCleanParams } from '@/app/Utils/util';
import DefaultImage from '../../_assets/images/no-image.png';
import { Spinner } from '@/app/_components/common/spinner';

export default function SearchFilterPage() {
  const searchParams = useSearchParams();

  // Get initial query from URL
  const searchQuery = searchParams.get('query') || '';
  const [filterData, setFilterData] = useState({
    price_range: [],
    house_type: [],
    car_type: [],
    land_type: [],
    doc_type: [],
    furnished_status: [],
    accessibility: [],
    topography: [],
    fencing: '',
    condition: '',
    transmission: [],
    body_type: [],
    type: '',
  });
  const [productType, setProductType] = useState<'sale' | 'auction'>('sale');
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

      if (productType === 'sale') {
        const response = await fetch(`/api/products?${params}`);
        if (!response.ok) {
          throw new Error('Search sale failed');
        }

        const { data } = await response.json();
        console.log('Search results:', data.data);
        setResults(data.data || []);
      } else if (productType === 'auction') {
        const response = await fetch(`/api/auctions?${params}`);
        if (!response.ok) {
          throw new Error('Search auction failed');
        }
        const { data } = await response.json();
        console.log('Search results:', data.data);
        setResults(data.data || []);
      }
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

  const handleSearchAndFilter = () => {
    fetchSearchResults(searchQuery, filterData);
  };

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
          productType={productType}
          setProductType={setProductType}
          setFilterData={setFilterData}
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
          {results.length === 0 ? (
            <h2 className="text-lg my-20 text-center font-bold">
              No Product Found
            </h2>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 ">
              {results.map((product) => (
                <ProductCard
                  key={product.id}
                  isAdminProduct={product.belongs_to_admin}
                  seller={product.seller.name}
                  productType="sale"
                  imageUrl={product.media[0] || DefaultImage.src}
                  product={product}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
