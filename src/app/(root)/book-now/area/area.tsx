'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface AreaProps {
  onSubOptionSelect: (subOptionId: string | null) => void;
}

const Area: React.FC<AreaProps> = ({ onSubOptionSelect }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [selectedSubOption, setSelectedSubOption] = useState<string | null>(null);
  const router = useRouter();

  const handleOptionClick = (optionId: string) => {
    setSelectedOption(selectedOption === optionId ? null : optionId);
    setSelectedSubOption(null); // Reset sub-option when a new option is selected
    onSubOptionSelect(null); // Notify parent about the reset
  };

  const handleSubOptionClick = (subOptionId: string) => {
    setSelectedSubOption(subOptionId);
    onSubOptionSelect(subOptionId); // Notify parent about the selected sub-option
  };

  useEffect(() => {
    if (selectedSubOption) {
      router.push(`#${selectedSubOption}`);
    } else if (selectedOption) {
      router.push(`#${selectedOption}`);
    }
  }, [selectedOption, selectedSubOption, router]);

  return (
    <div>
      <ul className="list-disc pl-5 space-y-2">
        <li className="text-gray-700 cursor-pointer" onClick={() => handleOptionClick('option1')}>
          Option 1
          {selectedOption === 'option1' && (
            <ul className="pl-5 mt-2 space-y-1">
              <li className="text-gray-600 cursor-pointer" onClick={() => handleSubOptionClick('sub-option1.1')}>Sub-option 1.1</li>
              <li className="text-gray-600 cursor-pointer" onClick={() => handleSubOptionClick('sub-option1.2')}>Sub-option 1.2</li>
              <li className="text-gray-600 cursor-pointer" onClick={() => handleSubOptionClick('sub-option1.3')}>Sub-option 1.3</li>
            </ul>
          )}
        </li>
        <li className="text-gray-700 cursor-pointer" onClick={() => handleOptionClick('option2')}>
          Option 2
          {selectedOption === 'option2' && (
            <ul className="pl-5 mt-2 space-y-1">
              <li className="text-gray-600 cursor-pointer" onClick={() => handleSubOptionClick('sub-option2.1')}>Sub-option 2.1</li>
              <li className="text-gray-600 cursor-pointer" onClick={() => handleSubOptionClick('sub-option2.2')}>Sub-option 2.2</li>
              <li className="text-gray-600 cursor-pointer" onClick={() => handleSubOptionClick('sub-option2.3')}>Sub-option 2.3</li>
            </ul>
          )}
        </li>
        <li className="text-gray-700 cursor-pointer" onClick={() => handleOptionClick('option3')}>
          Option 3
          {selectedOption === 'option3' && (
            <ul className="pl-5 mt-2 space-y-1">
              <li className="text-gray-600 cursor-pointer" onClick={() => handleSubOptionClick('sub-option3.1')}>Sub-option 3.1</li>
              <li className="text-gray-600 cursor-pointer" onClick={() => handleSubOptionClick('sub-option3.2')}>Sub-option 3.2</li>
              <li className="text-gray-600 cursor-pointer" onClick={() => handleSubOptionClick('sub-option3.3')}>Sub-option 3.3</li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Area;