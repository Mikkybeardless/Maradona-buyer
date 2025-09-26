// components/SearchBox.tsx
'use client';

import { Combobox } from '@headlessui/react';
import { useEffect, useState } from 'react';
import { useDebounce } from '../hooks/useDebounce';

// Simulated data
const innerData = [
  { name: 'Apple', id: 1 },
  { name: 'Banana', id: 2 },
  { name: 'Orange', id: 3 },
  { name: 'Grapes', id: 4 },
  { name: 'Mango', id: 5 },
];

type SearchProduct = {
  name: string;
  id: number;
};

interface SearchBoxProps {
  data?: SearchProduct[];
  onSearch?: (query: string) => void;
  value?: string;
  onChange?: (value: string) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

export default function SearchBox({
  data = innerData,
  onSearch = () => {},
  value: controlledValue,
  onChange: controlledOnChange,
  onKeyDown,
}: SearchBoxProps) {
  const [internalValue, setInternalValue] = useState('');

  // Use controlled value if provided, otherwise use internal state
  const value = controlledValue !== undefined ? controlledValue : internalValue;
  const setValue = controlledOnChange || setInternalValue;

  const [filteredData, setFilteredData] = useState<SearchProduct[]>([]);

  const debouncedValue = useDebounce(value, 300);

  // Filter suggestions based on current input value
  useEffect(() => {
    if (value && value.length > 0) {
      const filtered = data.filter((item) =>
        item.name?.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredData(filtered.slice(0, 5)); // Limit to 5 suggestions
    } else {
      setFilteredData([]);
    }
  }, [value, data]);

  // Call onSearch with debounced value
  useEffect(() => {
    if (debouncedValue) {
      onSearch(debouncedValue);
    }
  }, [debouncedValue, onSearch]);

  // Handle input changes - this updates the value immediately
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  // Handle suggestion selection - this also updates the value
  const handleSuggestionSelect = (selectedValue: string) => {
    setValue(selectedValue);
  };

  return (
    <div className="w-full">
      <Combobox value={value} onChange={handleSuggestionSelect}>
        <div className="relative">
          <Combobox.Input
            onKeyDown={onKeyDown}
            className="w-full focus:outline-none focus:ring-2 focus:ring-primaryOrange rounded-lg px-4 py-2 border border-gray-300"
            placeholder="property type, location, price range"
            onChange={handleInputChange} // This will update value on every keystroke
            displayValue={(value: string) => value} // Display the actual string value
          />

          {filteredData.length > 0 && (
            <Combobox.Options className="absolute z-10 bg-white border rounded mt-1 w-full shadow-lg max-h-60 overflow-auto">
              {filteredData.map((item) => (
                <Combobox.Option
                  key={item.id}
                  value={item.name}
                  className={({ active }) =>
                    `cursor-pointer px-4 py-2 ${
                      active ? 'bg-gray-100' : 'bg-white'
                    }`
                  }
                >
                  {item.name}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          )}
        </div>
      </Combobox>
    </div>
  );
}
