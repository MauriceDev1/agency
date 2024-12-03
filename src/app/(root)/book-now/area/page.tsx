'use client'
import React, { useState } from 'react';
import Area from './area'; // Adjust the import path as necessary
import cityData from '@/data/city.json'; // Import the city data

interface CityOption {
  name: string;
  count: number;
}

interface CityData {
  [key: string]: CityOption[];
}

const BookNowPage = () => {
  const [selectedCityId, setSelectedCityId] = useState<string | null>(null);
  const [selectedAreaId, setSelectedAreaId] = useState<string | null>(null);

  const handleSubOptionSelect = (cityId: string | null, areaId: string | null) => {
    setSelectedCityId(cityId);
    setSelectedAreaId(areaId);
  };

  const getHeadingText = () => {
    if (selectedCityId && selectedAreaId) {
      const city = Object.values(cityData).find(c => c.id === selectedCityId);
      const area = city?.areas.find(a => a.id === selectedAreaId);
      return `Book Now - ${area?.name || ''}`;
    }
    return 'Book Now';
  };

  const getSelectedSubOptionData = () => {
    if (selectedCityId && selectedAreaId) {
      const city = Object.values(cityData).find(c => c.id === selectedCityId);
      const area = city?.areas.find(a => a.id === selectedAreaId);
      return area ? `Count: ${area.count}` : '';
    }
    return '';
  };

  return (
    <div className="container mx-auto p-4">
      <Area cityData={cityData} onSubOptionSelect={handleSubOptionSelect} />
    </div>
  );
};

export default BookNowPage;