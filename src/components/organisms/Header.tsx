// 

import { Link } from "react-router-dom";
import { useCart } from "../../context/useCart";
//import Input from "../atoms/Input";
import SearchBar from "../molecules/SearchBar";
import amazonLogo from '../../assets/amazon.png'
import { Menu, MapPin } from "lucide-react";
import LanguageDropdown from "../molecules/LanguageDropdown";
import { useState } from "react";
//import { MapPin } from "lucide-react";
import Button from "../atoms/Button";

const Header = () => {
  const { state } = useCart();
  const [openLocation, setOpenLocation] = useState(false);
  const [location, setLocation] = useState("Kochi 682030");

  return (
    <header className="bg-[#131921] text-white">
      <div className="flex items-center justify-between px-6 py-3">
        
        {/* Logo */}
        {/* <Link to="/" className="text-2xl font-bold">
          amazon
        </Link> */}

        {/* Left Section */}
        <div className="flex items-center gap-6">

          <Link to="/" className="flex items-center gap-6">
          <img
              //src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
              src={amazonLogo}
              alt="Amazon"
              className="h-8"
          />
          </Link>

          {/* Location */}

          <div className="relative">
            {/* Main Location Display */}
            <div
              onClick={() => setOpenLocation(!openLocation)}
              className="flex items-center gap-2 text-sm cursor-pointer hover:border hover:border-white p-2 rounded"
            >
              <MapPin size={18} />
              <div className="leading-tight">
                <p className="text-gray-300 text-xs">Deliver to</p>
                <p className="font-semibold">{location}</p>
              </div>
            </div>

            {/* Dropdown */}
            {openLocation && (
              <div className="absolute top-12 left-0 bg-white text-black w-72 p-4 rounded shadow-lg z-50">
                <p className="font-semibold mb-2">Choose your location</p>

                <button
                  onClick={() => {
                    setLocation("Kochi 682030");
                    setOpenLocation(false);
                  }}
                  className="w-full bg-yellow-400 hover:bg-yellow-500 py-2 rounded font-semibold"
                >
                  Use Current Location
                </button>

                <input
                  type="text"
                  placeholder="Enter pincode"
                  className="mt-3 w-full border p-2 rounded mb-1"
                />
                {/* Apply Button */}
                <div className="flex justify-end">
                  <Button
                    onClick={() => {
                      if (tempPincode.trim() !== "") {
                        setLocation(tempPincode);
                        setTempPincode("");
                        setOpen(false);
                      }
                    }}
                    className="w-1/2 rounded"
                  >
                    Apply
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Search */}
        <div className="flex-1 mx-6">
          <SearchBar />
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-6">

            {/* Language */}
            <LanguageDropdown />

            {/* Account */}
            <div className="cursor-pointer text-sm">
              <p className="text-gray-300 text-xs">Hello, sign in</p>
              <p className="font-semibold">Account & Lists</p>
            </div>

            {/* Orders */}
            <div className="cursor-pointer text-sm">
              <p className="text-gray-300 text-xs">Returns</p>
              <p className="font-semibold">& Orders</p>
            </div>
            {/* Cart */}
            <Link to="/cart" className="flex items-center gap-2">
              🛒
              <span className="font-bold">{state.cart.length}</span>
            </Link>
        </div>
      </div>

      {/* Bottom Navbar */}
      <div className="bg-[#232f3e] text-white flex items-center gap-6 px-4 py-2 text-sm">
        <div className="flex items-center gap-1 cursor-pointer">
          <Menu size={20} />
          All
        </div>

        <p className="cursor-pointer">Fresh</p>
        <p className="cursor-pointer">MX Player</p>
        <p className="cursor-pointer">Sell</p>
        <p className="cursor-pointer">Bestsellers</p>
        <p className="cursor-pointer">Mobiles</p>
        <p className="cursor-pointer">Today's Deals</p>
        <p className="cursor-pointer">Customer Service</p>
        <p className="cursor-pointer">New Releases</p>
        <p className="cursor-pointer">Prime</p>
        <p className="cursor-pointer">Fashion</p>
        <p className="cursor-pointer">Amazon Pay</p>
        <p className="cursor-pointer">Electronics</p>
        <p className="cursor-pointer">Home & Kitchen</p>
        <p className="cursor-pointer">Computers</p>
        <p className="cursor-pointer">Books</p>
      </div>
    </header>
  );
};

export default Header;
