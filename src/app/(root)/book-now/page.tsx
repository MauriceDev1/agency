'use client'
import React, { useState } from 'react';

const City = () => {
    const options: { [key: string]: { [key: string]: string[] } } = {
        region: {
            'Region 1': ['City 1', 'City 2', 'City 3'],
            'Region 2': ['City 4', 'City 5', 'City 6'],
            'Region 3': ['City 7', 'City 8', 'City 9'],
        },
        area: { '': ['Area 1', 'Area 2', 'Area 3'] },
        duration: { '': ['1 hour', '2 hours', '3 hours'] },
        gender: { '': ['Male', 'Female', 'Other'] },
        time: { '': ['Morning', 'Afternoon', 'Evening'] },
    };

    const [selectedRegion, setSelectedRegion] = useState('');
    const [selectedCity, setSelectedCity] = useState('');

    const handleRegionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedRegion(event.target.value);
        setSelectedCity(''); // Reset city selection when region changes
    };

    const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCity(event.target.value);
    };

    return (
        <div>
            <div>
                <label>Region:</label>
                <select value={selectedRegion} onChange={handleRegionChange}>
                    <option value="">Select Region</option>
                    {Object.keys(options.region).map((region) => (
                        <option key={region} value={region}>
                            {region}
                        </option>
                    ))}
                </select>
            </div>

            {selectedRegion && (
                <div>
                    <label>City:</label>
                    <select value={selectedCity} onChange={handleCityChange}>
                        <option value="">Select City</option>
                        {options.region[selectedRegion].map((city) => (
                            <option key={city} value={city}>
                                {city}
                            </option>
                        ))}
                    </select>
                </div>
            )}

            {Object.keys(options).map((key) => {
                if (key === 'region') return null;
                return (
                    <div key={key}>
                        <label>{key.charAt(0).toUpperCase() + key.slice(1)}:</label>
                        <select>
                            {options[key][''].map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>
                );
            })}
        </div>
    );
};

export default City;