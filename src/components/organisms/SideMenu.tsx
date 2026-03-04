import { X, ChevronRight } from "lucide-react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const SideMenu = ({ isOpen, onClose }: Props) => {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
      />

      {/* Side Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-white z-50 transform transition-transform duration-300 text-black ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between bg-gray-800 text-white px-4 py-3">
          <span className="font-semibold text-lg">Hello, sign in</span>
          <button onClick={onClose}>
            <X size={22} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto h-full pb-20">
          {/* Section */}
          <div className="p-4">
            <h3 className="font-semibold mb-2">Trending</h3>
            <MenuItem text="Bestsellers" />
            <MenuItem text="New Releases" />
            <MenuItem text="Movers and Shakers" />
          </div>

          <hr />

          <div className="p-4">
            <h3 className="font-semibold mb-2">
              Digital Content and Devices
            </h3>
            <MenuItem text="Echo & Alexa" />
            <MenuItem text="Fire TV" />
            <MenuItem text="Kindle E-Readers & eBooks" />
            <MenuItem text="Amazon Prime Video" />
          </div>

          <hr />

          <div className="p-4">
            <h3 className="font-semibold mb-2">Shop by Category</h3>
            <MenuItem text="Mobiles, Computers" />
            <MenuItem text="TV, Appliances, Electronics" />
            <MenuItem text="Men's Fashion" />
            <MenuItem text="Women's Fashion" />
          </div>
        </div>
      </div>
    </>
  );
};

const MenuItem = ({ text }: { text: string }) => (
  <div className="flex justify-between items-center py-2 cursor-pointer hover:bg-gray-100 px-2 rounded">
    <span className="text-sm">{text}</span>
    <ChevronRight size={16} />
  </div>
);

export default SideMenu;