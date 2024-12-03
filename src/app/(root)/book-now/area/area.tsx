'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface AreaProps {
  cityData: Record<string, { name: string; count: number }[]>;
  onSubOptionSelect: (subOptionId: string | null) => void;
}

const Area: React.FC<AreaProps> = ({ cityData, onSubOptionSelect }) => {
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
        {Object.keys(cityData).map((city) => (
          <li key={city} className="text-gray-700 cursor-pointer" onClick={() => handleOptionClick(city)}>
            {city}
            {selectedOption === city && (
              <ul className="pl-5 mt-2 space-y-1">
                {cityData[city].map((subOption) => (
                  <li key={subOption.name} className="text-gray-600 cursor-pointer" onClick={() => handleSubOptionClick(subOption.name)}>
                    {subOption.name}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Area;