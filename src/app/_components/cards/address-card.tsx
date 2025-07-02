import { CiLocationOn, CiUser } from 'react-icons/ci';

interface AddressProps {
  details: {
    full_name: string;
    phone: string;
    location: string;
  };
}

export const AddressCard = ({ details }: AddressProps) => {
  return (
    <div className="bg-white p-4 rounded-lg flex flex-col gap-2  transition-shadow duration-300">
      <p className="flex gap-1">
        <CiUser size={20} />
        <span className="text-darkBlue text-[16px] font-semibold">
          {details.full_name}, {details.phone}
        </span>
      </p>

      <p className="flex gap-2">
        <span>
          <CiLocationOn size={20} />
        </span>
        <span className="text-[14px] text-[#585858]">{details.location}</span>
      </p>

      <div className="flex justify-end gap-10 mt-4">
        <button className="text-blue-600 hover:underline">Edit</button>
        <button className="text-blue-600 hover:underline">Delete</button>
      </div>
    </div>
  );
};
