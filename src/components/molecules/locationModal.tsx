import { useState } from "react";
import Button from "../atoms/Button";
import { X } from "lucide-react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  setLocation: (value: string) => void;
}

const LocationModal = ({ isOpen, onClose, setLocation }: Props) => {
  const [pincode, setPincode] = useState("");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white w-[420px] rounded-lg shadow-xl z-10">
        
        {/* Header */}
        <div className="flex justify-between items-center px-5 py-4 border-b">
          <h2 className="text-lg font-semibold">
            Choose your location
          </h2>
          <X
            size={20}
            className="cursor-pointer"
            onClick={onClose}
          />
        </div>

        {/* Body */}
        <div className="p-5">
          <p className="text-sm text-gray-600 mb-4">
            Select a delivery location to see product availability and delivery options
          </p>

          {/* Sign In Button */}
          <Button className="w-full rounded-full mb-4">
            Sign in to see your addresses
          </Button>

          {/* Divider */}
          <div className="flex items-center my-4">
            <div className="flex-1 border-t"></div>
            <span className="px-3 text-sm text-gray-500">
              or enter an Indian pincode
            </span>
            <div className="flex-1 border-t"></div>
          </div>

          {/* Input + Apply */}
          <div className="flex gap-3">
            <input
              type="text"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              placeholder=""
              className="flex-1 border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              onClick={() => {
                if (pincode.trim() !== "") {
                  setLocation(pincode);
                  onClose();
                }
              }}
              className="px-5 border border-gray-400 rounded-full hover:bg-gray-100"
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