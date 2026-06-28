"use client";

import { Search, MapPin } from "lucide-react";

type SearchBarProps = {
  city: string;
  setCity: (value: string) => void;
  onSearch: () => void;
};

export default function SearchBar({
  city,
  setCity,
  onSearch,
}: SearchBarProps) {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-8">

      <div className="relative flex-1">

        <MapPin
          className="absolute left-4 top-4 text-gray-400"
          size={22}
        />

        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city..."
          className="
          w-full
          rounded-xl
          border
          border-gray-300
          bg-white
          py-4
          pl-12
          pr-4
          text-lg
          text-gray-900
          placeholder:text-gray-400
          shadow-sm
          outline-none
          focus:ring-2
          focus:ring-blue-500
          "
        />

      </div>

      <button
        onClick={onSearch}
        className="
        flex
        items-center
        justify-center
        gap-2
        rounded-xl
        bg-blue-600
        px-7
        py-3
        text-lg
        font-semibold
        text-white
        shadow-md
        transition
        hover:bg-blue-700
        hover:scale-105
        "
      >
        <Search size={20} />
        Search
      </button>

    </div>
  );
}