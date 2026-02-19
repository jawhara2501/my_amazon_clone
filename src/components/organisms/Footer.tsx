const Footer = () => {
  return (
    <footer className="bg-[#232F3E] text-white mt-10">
      {/* Back to Top */}
      <div className="bg-[#37475A] text-center py-3 text-sm cursor-pointer hover:bg-[#485769]">
        Back to top
      </div>

      {/* Links Section */}
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        <div>
          <h3 className="font-bold mb-3">Get to Know Us</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:underline cursor-pointer">About Us</li>
            <li className="hover:underline cursor-pointer">Careers</li>
            <li className="hover:underline cursor-pointer">Press Releases</li>
            <li className="hover:underline cursor-pointer">Amazon Science</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-3">Connect with Us</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:underline cursor-pointer">Facebook</li>
            <li className="hover:underline cursor-pointer">Twitter</li>
            <li className="hover:underline cursor-pointer">Instagram</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-3">Make Money with Us</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:underline cursor-pointer">Sell on Amazon</li>
            <li className="hover:underline cursor-pointer">Become an Affiliate</li>
            <li className="hover:underline cursor-pointer">Advertise Your Products</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-3">Let Us Help You</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:underline cursor-pointer">Your Account</li>
            <li className="hover:underline cursor-pointer">Returns Centre</li>
            <li className="hover:underline cursor-pointer">Help</li>
          </ul>
        </div>
      </div>

      {/* Bottom Branding */}
      <div className="border-t border-gray-600 py-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Amazon Clone by Jawhara
      </div>
    </footer>
  );
};

export default Footer;
