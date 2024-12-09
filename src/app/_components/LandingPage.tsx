"use client";

import React, { useState } from "react";
import ImageCard from "./ImageCard";
import { Barcelona } from "./HardCodedData";
import InputField from "./InputField";

type Props = {};

function LandingPage({}: Props) {
  const [clicked, setClicked] = useState(false);
  const [input, setInput] = useState("");

  return (
    <div className="w-7xl flex flex-col items-center">
      <h1 className="text-7xl font-black">Find places with go2spot</h1>
      <p className="">Find cool locations in your destination area</p>
      <div>
        <InputField />
      </div>

      <div className="flex flex-row space-x-2 p-2">
        {Barcelona.map((place) => (
          <ImageCard
            key={place.id}
            title={place.title}
            img={place.img}
            description={place.description}
            location={place.location}
          />
        ))}
      </div>
    </div>
  );
}

export default LandingPage;
