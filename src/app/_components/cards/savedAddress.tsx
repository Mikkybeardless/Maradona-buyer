import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import AdjustRoundedIcon from "@mui/icons-material/AdjustRounded";
interface SavedAddressProps {
  name: string;
  address: string;
  groupName?: string;
  id: string; // Added for unique identification
  selected?: boolean; // Added to track selection state
  onChange?: (id: string) => void; // Added to handle selection
}

const SavedAddressCard = ({
  name,
  address,
  id,
  selected = false,
  groupName = "address",
  onChange,
}: SavedAddressProps) => {
  const handleClick = () => {
    if (onChange) {
      onChange(id);
    }
  };

  return (
    <label
      htmlFor={id}
      className={`flex justify-between items-center  p-4 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer ${
        selected ? "ring-1 ring-defaultBlue bg-blue-100" : ""
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
        <AdjustRoundedIcon className="absolute  rounded-full text-defaultBlue top-1/2 left-1 transform -translate-y-1/2 opacity-0 peer-checked:opacity-100" />
      </div>

      <div className="flex-1 ml-4">
        <h3 className="font-semibold mb-2">{name}</h3>
        <p className="mb-3 w-[80%] text-secondaryTextColor">{address}</p>
      </div>
    </label>
  );
};

export default SavedAddressCard;
