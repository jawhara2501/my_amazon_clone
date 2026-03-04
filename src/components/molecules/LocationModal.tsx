import { useState, useEffect, useRef } from "react";
//import Button from "../atoms/Button";
import { X } from "lucide-react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  setLocation: (value: string) => void;
}

const LocationModal = ({ isOpen, onClose, setLocation }: Props) => {
  const [pincode, setPincode] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  // ✅ Auto focus when modal opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  // ✅ Allow only numbers & max 6 digits
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 6);
    setPincode(value);
  };

  const isValid = pincode.length === 6;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 font-sans">
      
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white w-[420px] rounded-lg shadow-2xl z-10">
        
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b">
          <h2 className="text-lg font-semibold text-black">
            Choose your location
          </h2>
          <X
            size={20}
            className="cursor-pointer text-gray-600 hover:text-black"
            onClick={onClose}
          />
        </div>

        {/* Body */}
        <div className="px-6 py-5">
          <p className="text-sm text-gray-600 leading-5 mb-5">
            Select a delivery location to see product availability and delivery options
          </p>

          {/* Sign In Button */}
          <button className="w-full bg-yellow-400 hover:bg-yellow-500 transition rounded-full py-2.5 text-sm font-medium text-black shadow-sm">
            Sign in to see your addresses
          </button>

          {/* Divider */}
          <div className="flex items-center my-5">
            <div className="flex-1 border-t border-gray-300"></div>
            <span className="px-3 text-sm text-gray-500 whitespace-nowrap">
              or enter an Indian pincode
            </span>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>

          {/* Input + Apply */}
          <div className="flex gap-3">
            <input
              ref={inputRef}
              type="text"
              value={pincode}
              onChange={handleChange}
              inputMode="numeric"
              pattern="[0-9]*"
              placeholder="Enter pincode"
              className="flex-1 border border-gray-400 rounded-md px-3 py-2 text-sm
                         text-black placeholder-gray-500
                         focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-500"
            />

            <button
              disabled={!isValid}
              onClick={() => {
                if (isValid) {
                  setLocation(pincode);
                  onClose();
                }
              }}
              className={`px-5 rounded-full text-sm font-semibold transition
                ${isValid
                  ? "border border-gray-400 text-black hover:bg-gray-100"
                  : "border border-gray-200 text-gray-400 cursor-not-allowed bg-gray-100"
                }`}
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationModal;