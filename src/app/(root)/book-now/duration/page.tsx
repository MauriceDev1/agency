'use client'
import React, { useState } from 'react';

const DurationSelector = () => {
  const [duration, setDuration] = useState(1);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDuration(Number(event.target.value));
  };

  const handlePlusButtonClick = () => {
    setDuration((prevDuration) => prevDuration + 1);
  };

  const handleMinusButtonClick = () => {
    setDuration((prevDuration) => Math.max(1, prevDuration - 1));
  };

  return (
    <div className="p-4">
      <div className="flex items-center space-x-4">
        <button
          onClick={handleMinusButtonClick}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          -
        </button>
        <input
          type="range"
          min="1"
          max="10"
          value={duration}
          onChange={handleSliderChange}
          className="w-full"
        />
        <button
          onClick={handlePlusButtonClick}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          +
        </button>
      </div>
      <div className="mt-4 text-center">
        <span className="text-lg font-semibold">Duration: {duration} hour(s)</span>
      </div>
    </div>
  );
};

export default DurationSelector;