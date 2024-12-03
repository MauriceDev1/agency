'use client'
import React, { useState } from 'react';
import Area from './area'; // Adjust the import path as necessary
import cityData from '@/data/city.json'; // Import the city data

const BookNowPage = () => {
  const [selectedSubOption, setSelectedSubOption] = useState<string | null>(null);

  const handleSubOptionSelect = (subOptionId: string | null) => {
    setSelectedSubOption(subOptionId);
  };

  const getHeadingText = () => {
    if (selectedSubOption) {
      return `Book Now - ${selectedSubOption}`;
    }
    return 'Book Now';
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{getHeadingText()}</h1>
      <Area cityData={cityData} onSubOptionSelect={handleSubOptionSelect} />
      {selectedSubOption && (
        <div className="mt-4">
          <h2 className="text-xl font-semibold">Selected Sub-option: {selectedSubOption}</h2>
          {/* Add more content based on the selected sub-option here */}
        </div>
      )}
    </div>
  );
};

export default BookNowPage;