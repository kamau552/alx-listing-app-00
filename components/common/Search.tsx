import React from "react";
import { FiSearch } from "react-icons/fi";

interface SearchProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
}

const Search: React.FC<SearchProps> = ({ placeholder, onSearch }) => {
  return (
     <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 shadow-md w-15">
      <FiSearch className="text-gray-500 w-7" />
      <input
        type="text"
        placeholder={placeholder}
        onChange={e => onSearch && onSearch(e.target.value)}
        className="outline-none w-full bg-transparent text-sm text-gray-700"
      />
    </div>
  );
};

export default Search;