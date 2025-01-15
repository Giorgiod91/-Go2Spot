"use client";

import React, { useState } from "react";
import ImageCard from "./ImageCard";
import { CityData } from "./HardCodedData";
import InputField from "./InputField";
import Arrow from "./Arrow";

type Props = {};

function LandingPage({}: Props) {
  const [selectedCity, setSelectedCity] = useState("Barcelona");

  // Function to handle city change
  const handleCityChange = (city: string) => {
    setSelectedCity(city);
  };
  // i can map over the original Citydata so i create a variable that holds the array of location data
  const cityData = CityData[selectedCity];

  return (
    <div className="flex max-w-7xl flex-col items-center">
      <h1 className="text-7xl font-black text-white">
        Find places with go2spot
      </h1>
      <p className="text-lg text-[#b0b0b0]">
        Find cool locations in your destination area
      </p>

      <div>
        <InputField onCityChange={handleCityChange} />
      </div>

      <div className="flex flex-row space-x-5 p-2">
        {cityData?.map((place) => (
          <ImageCard
            key={place.id}
            title={place.title}
            img={place.img}
            description={place.description}
            location={place.location}
          />
        ))}
      </div>
      <Arrow />
    </div>
  );
}

export default LandingPage;
