"use client";

import { useEffect } from "react";

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  modalWidth?: string;
  setIsOpen: (isOpen: boolean) => void;
}
const ModalWrapper = ({
  children,
  isOpen,
  setIsOpen,
  modalWidth = "max-w-lg",
}: ModalProps) => {
  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isOpen && e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, setIsOpen]);

  // Close modal when clicking on the overlay
  const handleOverlayClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
    >
      <div
        className={`bg-white relative rounded-xl shadow-xl p-6 ${modalWidth} mx-auto`}
      >
        {children}
      </div>
    </div>
  );
};

export default ModalWrapper;
