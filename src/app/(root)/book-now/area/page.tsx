'use client'
import React, { useState } from 'react';

const Area = () => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleOptionClick = (optionIndex: number) => {
    setSelectedOption(selectedOption === optionIndex ? null : optionIndex);
  };

  return (
    <div>
      <ul className="list-disc pl-5 space-y-2">
        <li className="text-gray-700 cursor-pointer" onClick={() => handleOptionClick(1)}>
          Option 1
          {selectedOption === 1 && (
            <ul className="pl-5 mt-2 space-y-1">
              <li className="text-gray-600">Sub-option 1.1</li>
              <li className="text-gray-600">Sub-option 1.2</li>
              <li className="text-gray-600">Sub-option 1.3</li>
            </ul>
          )}
        </li>
        <li className="text-gray-700 cursor-pointer" onClick={() => handleOptionClick(2)}>
          Option 2
          {selectedOption === 2 && (
            <ul className="pl-5 mt-2 space-y-1">
              <li className="text-gray-600">Sub-option 2.1</li>
              <li className="text-gray-600">Sub-option 2.2</li>
              <li className="text-gray-600">Sub-option 2.3</li>
            </ul>
          )}
        </li>
        <li className="text-gray-700 cursor-pointer" onClick={() => handleOptionClick(3)}>
          Option 3
          {selectedOption === 3 && (
            <ul className="pl-5 mt-2 space-y-1">
              <li className="text-gray-600">Sub-option 3.1</li>
              <li className="text-gray-600">Sub-option 3.2</li>
              <li className="text-gray-600">Sub-option 3.3</li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Area;