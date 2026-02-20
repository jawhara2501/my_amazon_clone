import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const languages = ["EN", "HI", "ML", "TA"];

const LanguageDropdown = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("EN");
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={dropdownRef}
      className="relative px-2 py-1 hover:border hover:border-white cursor-pointer"
    >
      {/* Selected Language */}
      <div
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 text-sm font-bold"
      >
        {selected}
        <ChevronDown size={16} />
      </div>

      {/* Dropdown */}
      {open && (
        <div className="absolute top-10 right-0 bg-white text-black shadow-lg rounded w-24 z-50">
          {languages.map((lang) => (
            <div
              key={lang}
              onClick={() => {
                setSelected(lang);
                setOpen(false);
              }}
              className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm"
            >
              {lang}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
