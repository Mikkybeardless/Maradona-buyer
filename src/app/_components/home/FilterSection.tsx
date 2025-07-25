// components/FilterSection.tsx

import { IoChevronDownSharp, IoChevronUpSharp } from 'react-icons/io5';
import { CustomCheckbox } from '../common/customCheckInput';

type Option = { id: string | number; label: string };

type FilterSectionProps = {
  keyName: string;
  label: string;
  type: 'button' | 'checkbox' | 'range';
  options: Option[];
  show: boolean;
  onToggle: () => void;
  onChange: (key: string, id: string | number) => () => void;
  selected: string | number | (string | number)[];
};

const FilterSection = ({
  keyName,
  label,
  type,
  options,
  show,
  onToggle,
  onChange,
  selected,
}: FilterSectionProps) => {
  return (
    <div className="w-full space-y-6">
      <div className="flex justify-between">
        <h2 className="font-medium text-[16px]">{label}</h2>
        <button onClick={onToggle}>
          {show ? <IoChevronUpSharp /> : <IoChevronDownSharp />}
        </button>
      </div>

      {show && (
        <div
          className={
            type === 'button'
              ? ' flex items-center gap-3 flex-wrap  px-[2%]'
              : type === 'range'
                ? 'flex gap-3 items-center'
                : 'flex flex-col gap-2 px-[2%]'
          }
        >
          {options.map(({ id, label }) => {
            const isSelected = Array.isArray(selected)
              ? (selected as (string | number)[]).includes(id)
              : selected === id;

            return type === 'button' ? (
              <button
                key={id}
                onClick={onChange(keyName, id)}
                className={` rounded-3xl px-4 py-2 border border-[#BFBFBF] hover:bg-primaryOrange hover:text-white ${
                  isSelected ? 'bg-primaryOrange text-white' : ''
                }`}
              >
                {label}
              </button>
            ) : (
              <CustomCheckbox
                key={id}
                id={`${keyName}-${id}`}
                label={label}
                checked={isSelected}
                onChange={onChange(keyName, id)}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default FilterSection;
