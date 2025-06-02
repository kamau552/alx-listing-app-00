import React from "react";
import { FiSearch } from "react-icons/fi";

interface SearchProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
}

const Search: React.FC<SearchProps> = ({ placeholder, onSearch }) => {
  return (
    <div className="flex items-center bg-amber-400 rounded-full px-6 py-4 w-full sm:w-auto max-w-xs sm:max-w-sm md:max-w-md">
      <FiSearch className="text-white w-5 h-5 mr-2" />
      <input
        type="text"
        placeholder={placeholder}
        onChange={(e) => onSearch && onSearch(e.target.value)}
        className="outline-none w-full bg-transparent text-sm text-gray-700 placeholder:text-gray-400"
      />
    </div>
  );
};

export default Search;
