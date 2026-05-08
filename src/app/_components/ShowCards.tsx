"use client";

import React, { useState } from "react";
import InputField from "./InputField";
import ImageCard from "./ImageCard";
import { CityData } from "./HardCodedData";

export default function ShowCards() {
  const [city, setCity] = useState("Barcelona");

  // creating new variable to be able to map over cause initial data is an object
  const spots = CityData[city];

  return (
    <div className="flex flex-col items-center space-y-8">
      <h1 className="max-w-4xl text-center text-4xl font-bold leading-tight text-neutral-800 md:text-6xl dark:text-slate-200">
        Explore Spots
      </h1>
      <InputField onCityChange={(newCity) => setCity(newCity)} />
      <div className="grid w-full max-w-5xl grid-cols-1 gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3">
        {spots?.map((spot) => (
          <ImageCard
            key={spot.id}
            title={spot.title}
            img={spot.img}
            description={spot.description}
            location={spot.location}
          />
        ))}
      </div>
    </div>
  );
}
