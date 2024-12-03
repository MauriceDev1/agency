'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAreaStore } from '@/store/areaStore'

interface AreaData {
  id: string;
  name: string;
  count: number;
}

interface CityData {
  id: string;
  areas: AreaData[];
}

interface AreaProps {
  cityData: Record<string, CityData>;
  onSubOptionSelect: (cityId: string | null, areaId: string | null) => void;
}

const Area: React.FC<AreaProps> = ({ cityData, onSubOptionSelect }) => {
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const setSelectedArea = useAreaStore((state) => state.setSelectedArea)
  const [selectedArea, setSelectedAreaState] = useState<string | null>(null);
  const router = useRouter();

  const handleCityClick = (cityName: string) => {
    setSelectedCity(selectedCity === cityName ? null : cityName);
    setSelectedAreaState(null);
    onSubOptionSelect(cityData[cityName].id, null);
    setSelectedArea('Area'); // Reset to default when city is clicked
  };

  const handleAreaClick = (e: React.MouseEvent, cityName: string, areaId: string) => {
    e.stopPropagation();
    const areaName = cityData[cityName].areas.find(area => area.id === areaId)?.name || 'Area';
    setSelectedArea(areaName); // Update the store with area name
    setSelectedCity(null);
    onSubOptionSelect(cityData[cityName].id, areaId);
  };

  useEffect(() => {
    if (selectedArea) {
      router.push(`#${selectedArea}`);
    } else if (selectedCity) {
      router.push(`#${selectedCity}`);
    }
  }, [selectedCity, selectedArea, router]);

  return (
    <div>
      <ul className="list-disc pl-5 space-y-2">
        {Object.entries(cityData).map(([cityName, city]) => (
          <li key={city.id} className="text-gray-700 cursor-pointer" onClick={() => handleCityClick(cityName)}>
            {cityName}
            {selectedCity === cityName && (
              <ul className="pl-5 mt-2 space-y-1">
                {city.areas.map((area) => (
                  <li 
                    key={area.id} 
                    className="text-gray-600 cursor-pointer" 
                    onClick={(e) => handleAreaClick(e, cityName, area.id)}
                  >
                    {area.name} ({area.count})
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