'use client';

import { Add } from 'iconsax-react';
import { useState } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EditPasswordModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [formData, setFormData] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPass: '',
  });

  if (!isOpen) return null;

  const handleBackgroundClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSave = () => {
    console.log('Password changed:', formData);
    onClose();
  };

  return (
    <div
      onClick={handleBackgroundClick}
      aria-label="Change Password Modal"
      className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
    >
      <div className="bg-white space-y-11 p-6 rounded-lg shadow-lg w-[500px] max-w-[700px]">
        <header className="w-full flex items-center justify-between">
          <h5 className="text-3xl text-[#1F0E1C] font-semibold">
            Change Password
          </h5>
          <button
            type="button"
            onClick={onClose}
            className="bg-[#F4F1F3] rounded-full size-12 grid place-items-center"
          >
            <Add size={32} className="rotate-45" />
          </button>
        </header>
        <form className="grid grid-cols-1  gap-y-4">
          <div className="space-y-1.5">
            <label htmlFor="oldPassword" className="text-gray-800 font-medium">
              Old Password
            </label>
            <input
              type="password"
              id="oldPassword"
              placeholder="Old Password"
              value={formData.oldPassword}
              onChange={handleInputChange}
              className="w-full px-4 text-sm py-2.5 border border-[#B5ABB3] rounded-lg focus:outline-none focus:ring-2 focus:ring-orange"
            />
          </div>
          <div className="space-y-1.5">
            <label htmlFor="newPassword" className="text-gray-800 font-medium">
              New Password
            </label>
            <input
              type="password"
              id="newPassword"
              placeholder="New Password"
              value={formData.newPassword}
              onChange={handleInputChange}
              className="w-full px-4 text-sm py-2.5 border border-[#B5ABB3] rounded-lg focus:outline-none focus:ring-2 focus:ring-orange"
            />
          </div>
          <div className="space-y-1.5">
            <label htmlFor="confirmPass" className="text-gray-800 font-medium">
              Confirm New Password
            </label>
            <input
              type="password"
              id="confirmPass"
              placeholder="Confirm new Password"
              value={formData.confirmPass}
              onChange={handleInputChange}
              className="w-full px-4 text-sm py-2.5 border border-[#B5ABB3] rounded-lg focus:outline-none focus:ring-2 focus:ring-orange"
            />
          </div>
        </form>
        <div className="flex items-center gap-3 ml-auto w-fit">
          <button
            onClick={onClose}
            className="px-10 py-2.5 rounded-lg border-primaryOrange text-primaryOrange border focus:outline-none"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-10 py-2.5 rounded-lg border-orange bg-primaryOrange text-white border focus:outline-none"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};
