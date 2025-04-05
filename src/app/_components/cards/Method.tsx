import { formatAmount } from "@/app/Utils/util";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
interface CheckoutProps {
  title: string;
  description: string;
  iconSrc: string;
  price?: number;
  groupName: string;
  id: string; // Added for unique identification
  selected?: boolean; // Added to track selection state
  onChange?: (id: string) => void; // Added to handle selection
}

const CheckoutMethod = ({
  title,
  description,
  iconSrc,
  price,
  id,
  selected = false,
  groupName,
  onChange,
}: CheckoutProps) => {
  const handleClick = () => {
    if (onChange) {
      onChange(id);
    }
  };

  return (
    <label
      htmlFor={id}
      className={`flex justify-between items-center bg-white p-4 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer ${
        selected ? "ring-1 ring-primaryOrange" : ""
      }`}
      onClick={handleClick}
    >
      <div className="relative flex items-center">
        <input
          type="radio"
          id={id}
          name={groupName}
          checked={selected}
          onChange={() => {}}
          className="appearance-none w-5 h-5 border-2 border-gray-300 rounded-full checked:invisible relative peer cursor-pointer"
        />
        <CheckCircleRoundedIcon className="absolute  rounded-full text-primaryOrange top-1/2 left-1 transform -translate-y-1/2 opacity-0 peer-checked:opacity-100" />
      </div>

      <div className="flex-1 ml-4">
        <h3 className="font-semibold">{title}</h3>
        <p className="mb-3 w-[80%] text-secondaryTextColor">{description}</p>

        {price && (
          <p className="text-xl text-defaultBlue font-semibold">
            {formatAmount(price)}
          </p>
        )}
      </div>

      <div>
        <div className="relative w-16 h-10 rounded-md">
          <img
            className="w-full h-full object-contain"
            src={iconSrc}
            alt={`${title} icon`}
          />
        </div>
      </div>
    </label>
  );
};

export default CheckoutMethod;
