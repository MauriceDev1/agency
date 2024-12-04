'use client'
import React, { useState } from 'react';
import { useDurationStore } from '@/store/durationStore';
import { useRouter } from 'next/navigation';

const DurationSelector = () => {
  const [duration, setDuration] = useState(1);
  const setSelectedDuration = useDurationStore((state) => state.setSelectedDuration);
  const router = useRouter();

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDuration(Number(event.target.value));
  };

  const handlePlusButtonClick = () => {
    setDuration((prevDuration) => prevDuration + 1);
  };

  const handleMinusButtonClick = () => {
    setDuration((prevDuration) => Math.max(1, prevDuration - 1));
  };

  const handleSetDuration = () => {
    setSelectedDuration(duration);
    router.push('/book-now/gender'); // Changed from '/book-now' to '/book-now/gender'
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
      <div className="mt-4 text-center flex flex-col items-center gap-4">
        <span className="text-lg font-semibold">Duration: {duration} hour(s)</span>
        <button
          onClick={handleSetDuration}
          className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition-colors"
        >
          Set Duration
        </button>
      </div>
    </div>
  );
};

export default DurationSelector;