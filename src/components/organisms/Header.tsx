// 

import { Link } from "react-router-dom";
import { useCart } from "../../context/useCart";
//import Input from "../atoms/Input";
import SearchBar from "../molecules/SearchBar";
import amazonLogo from '../../assets/amazon.png'
import { Menu } from "lucide-react";


const Header = () => {
  const { state } = useCart();

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
          <div className="text-sm cursor-pointer">
            <p className="text-gray-300 text-xs"> Delivering to Kochi 682030 </p>
            <p className="font-semibold"> Update location</p>
          </div>
        </div>

        {/* Search */}
        <div className="flex-1 mx-6">
          <SearchBar />
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-6">

            {/* Language */}
            <div className="cursor-pointer text-sm font-semibold">
              EN
            </div>

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
          <Menu size={18} />
          All
        </div>

        <p className="cursor-pointer">Fresh</p>
        <p className="cursor-pointer">MX Player</p>
        <p className="cursor-pointer">Sell</p>
        <p className="cursor-pointer">Bestsellers</p>
        <p className="cursor-pointer">Mobiles</p>
        <p className="cursor-pointer">Today's Deals</p>
        <p className="cursor-pointer">Customer Service</p>
        <p className="cursor-pointer">Electronics</p>
        <p className="cursor-pointer">Home & Kitchen</p>
      </div>

    </header>
  );
};

export default Header;
