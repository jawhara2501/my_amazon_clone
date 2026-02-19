import Input from "../atoms/Input";

const SearchBar = () => {
  return (
    <div className="flex w-1/1 border border-white rounded-md overflow-hidden">
      <select className="bg-gray-200 text-black px-2 rounded-l-md">
        <option>Deals</option>
        <option value="electronics">Electronics</option>
        <option value="fashion">Fashion</option>
        <option value="books">Books</option>
        <option value="home">Home</option>
        <option>All</option>
      </select>

      <div className="flex-1">
        <Input placeholder="Search Amazon" />
      </div>

      <button className="bg-yellow-400 px-4 rounded-r">
        🔍
      </button>
    </div>
  );
};

export default SearchBar;
