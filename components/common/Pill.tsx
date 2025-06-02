import React, { useState } from "react";

const filters = [
  "All",
  "Tiny Home",
  "Beach",
  "Countryside",
  "Luxe",
  "Cabin",
  "Amazing Views",
  "Mansion",
  "Tropical",
  "Pool",
  "Windmills",
];

const FilterPills = () => {
  const [active, setActive] = useState("All");

  return (
    <div className="overflow-x-auto border-b border-gray-200 bg-white py-3">
      <div className="flex space-x-3 px-4 w-max">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActive(filter)}
            className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium transition ${
              active === filter
                ? "bg-purple-600 text-white border-purple-600"
                : "text-gray-600 border-gray-300 hover:border-purple-400"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterPills;
