import React from 'react';

function CityPage(){
    const getRandomText = () => {
        const texts = [
            "Welcome to our booking page!",
            "Book your next adventure with us!",
            "Find the best deals in the city!",
            "Your journey starts here!",
            "Explore the city with our exclusive offers!"
        ];
        return texts[Math.floor(Math.random() * texts.length)];
    };

    return (
        <div>
            <h1>{getRandomText()}</h1>
        </div>
    );
};

export default CityPage;