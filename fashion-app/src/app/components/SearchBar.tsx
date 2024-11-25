"use client";

import React, { useState } from 'react';
import Button from './Button';
import FilterSVG from './svg/FilterSVG';
import OrangeBlockSVG from './svg/OrangeBlockSVG';
import SearchSVG from './svg/SearchSVG';

interface SearchBarProps {
  onSearch: (query: string) => void;
  // Passed on prop to handle search
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearchClick = () => {
    onSearch(searchQuery);
  };
  return (
    <div className="relative flex items-center space-x-4">
      {/* Search Input with Orange Block on Right */}
      <div className="relative flex-grow">
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input w-full h-9 px-4 pr-16 text-gray-700 placeholder-gray-600 rounded-2xl"
        />

        {/* Orange Block Positioned Absolutely to the Right */}
        <div className="absolute inset-y-0 right-0 flex items-center">
          {/* Background SVG as the Orange Block */}
          <OrangeBlockSVG width={40} height={35} />

          {/* Search Icon SVG Positioned on Top */}
          <Button
            label=""
            styles="absolute inset-0 flex items-center justify-center border-none"
            handleClick={handleSearchClick}
          >
            <SearchSVG />
          </Button>
        </div>
      </div>

      {/* Filter Button */}
      <Button
        label=""
        styles="border-none"
        handleClick={() => console.log('Filter button clicked')}
      >
        <FilterSVG />
      </Button>
    </div>
  );
};
