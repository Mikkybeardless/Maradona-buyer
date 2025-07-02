// components/SearchBox.tsx
'use client';

import Autosuggest, {
  ChangeEvent as AutosuggestInputOnChangeData,
} from 'react-autosuggest';
import { Combobox } from '@headlessui/react';
import { useState } from 'react';

// Simulated data
const fakeData = ['Apple', 'Banana', 'Orange', 'Grapes', 'Mango'];

export default function SearchBox() {
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const onSuggestionsFetchRequested = ({ value }: { value: string }) => {
    const filtered = fakeData.filter((item) =>
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
            value,
            onChange: (
              _event: React.FormEvent<any>,
              data: AutosuggestInputOnChangeData
            ) => setValue(data.newValue),
            placeholder: 'property type, location, price range',
            className: 'w-full',
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
