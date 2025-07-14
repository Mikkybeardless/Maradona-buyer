// components/SearchBox.tsx
'use client';

import Autosuggest, {
  ChangeEvent as AutosuggestInputOnChangeData,
} from 'react-autosuggest';
import { Combobox } from '@headlessui/react';
import { useEffect, useState } from 'react';
import { useDebounce } from '../hooks/useDebounce';

// Simulated data
const innerData = ['Apple', 'Banana', 'Orange', 'Grapes', 'Mango'];

interface SearchBoxProps<T> {
  data?: T[];
  onSearch?: (query: string) => void;
}
export default function SearchBox({
  data = innerData,
  onSearch = () => {},
}: SearchBoxProps<string>) {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [value, setValue] = useState('');
  const onSuggestionsFetchRequested = ({ value }: { value: string }) => {
    const filtered = data.filter((item) =>
      item.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(filtered);
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const getSuggestionValue = (suggestion: string) => suggestion;

  const renderSuggestion = (suggestion: string) => (
    <Combobox.Option
      key={suggestion}
      value={suggestion}
      className="cursor-pointer px-4 py-2 hover:bg-gray-100"
    >
      {suggestion}
    </Combobox.Option>
  );

  const debouncedValue = useDebounce(value, 300);

  useEffect(() => {
    onSearch(debouncedValue);
  }, [debouncedValue]);

  return (
    <div className="w-full">
      <Combobox value={value} onChange={setValue}>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={onSuggestionsFetchRequested}
          onSuggestionsClearRequested={onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={{
            value: value,
            onChange: (
              _event: React.FormEvent<HTMLInputElement>,
              data: AutosuggestInputOnChangeData
            ) => {
              setValue(data.newValue);
            },
            placeholder: 'property type, location, price range',
            className:
              'w-full focus:outline-none focus:ring-2 focus:ring-primaryOrange rounded-lg px-4 py-2 border border-gray-300',
          }}
          theme={{
            container: 'relative',
            suggestionsContainer:
              'absolute z-10 bg-white border rounded mt-1 w-full shadow-lg',
            suggestionsList: 'list-none m-0 p-0',
            suggestion: '',
            suggestionHighlighted: 'bg-gray-100',
          }}
        />
      </Combobox>
    </div>
  );
}
