"use client";

import React from 'react';
import SearchBar from './SearchBar';
import { grotesk } from './Fonts';

interface PageHeaderProps {
  header: string
}

export default function PageHeader ({header}:PageHeaderProps)  {
  return (
    <header className={`flex items-center justify-between px-12 py-4 ${grotesk.className}`}>
      <div className="flex items-center space-x-4">
        <h1 className={`text-4xl font-medium ${grotesk.className}`}>{header}</h1>
      </div>
      {/* <SearchBar/> */}
    </header>
  );
};


