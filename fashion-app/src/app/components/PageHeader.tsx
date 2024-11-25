"use client";

import React, { useState }  from 'react';
import SearchBar from './SearchBar';
import { grotesk } from './Fonts';

interface PageHeaderProps {
  header: string
  initialItems: any[];
}

export default function PageHeader ({header, initialItems }:PageHeaderProps)  {
  const [items, setItems] = useState(initialItems);

  const handleSearch = async (query:string) => {
    const filteredItems = await fetch(`/api/items?q=${query}`).then((res) => res.json());
    setItems(filteredItems);
  }
  return (
    <header className={`flex items-center justify-between px-12 py-4 ${grotesk.className}`}>
      <div className="flex items-center space-x-4">
        <h1 className={`text-4xl font-medium ${grotesk.className}`}>{header}</h1>
      </div>
      <SearchBar onSearch = {handleSearch}/>
    </header>
  );
};


