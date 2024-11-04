"use client";

import React from 'react';
import SearchBar from './SearchBar';
import { grotesk } from './Fonts';

export default function ProfileHeader ()  {
  return (
    <header className={`flex items-center justify-between px-8 py-4 ${grotesk.className}`}>
      <div className="flex items-center space-x-4">
        <h1 className="text-4xl">Your Closet</h1>
      </div>
      <SearchBar/>
    </header>
  );
};


