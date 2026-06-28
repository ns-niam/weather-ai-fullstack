"use client";

import { Search, MapPin } from "lucide-react";

type SearchBarProps = {
  city: string;
  setCity: React.Dispatch<React.SetStateAction<string>>;
  onSearch: () => void;
};

export default function SearchBar({
  city,
  setCity,
  onSearch,
}: SearchBarProps) {
  return (
    <div className="flex flex-col gap-4 md:flex-row">

      <div className="relative flex-1">

        <MapPin
          size={22}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type="text"
          value={city}
          placeholder="Enter city name..."
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onSearch();
            }
          }}
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
            shadow-sm
            outline-none
            transition
            focus:border-blue-500
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
          px-8
          py-4
          text-lg
          font-semibold
          text-white
          transition
          hover:bg-blue-700
        "
      >
        <Search size={20} />
        Search
      </button>

    </div>
  );
}