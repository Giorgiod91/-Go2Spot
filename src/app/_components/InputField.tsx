"use client";
import React, { useState } from "react";

type Props = {
  onCityChange: (city: string) => void;
};

function InputField({ onCityChange }: Props) {
  const [destination, setDestination] = useState("");
  const [input, setInput] = useState("");

  // change state for the select part
  const handleDestinationChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const city = event.target.value;
    setDestination(city);
    onCityChange(city);
  };
  return (
    <div className="h-[140px] w-[440px] p-5 shadow-md">
      <input
        className="flex h-[60px] w-full justify-center rounded-lg border-2 border-[#e0e0e0] text-[#333333] placeholder-gray-400 transition-all duration-300 ease-in-out hover:shadow-md focus:border-[#4a90e2]"
        type="text"
        placeholder="Type Your Destination Here"
      />
      <select
        className="mt-4 w-full rounded-lg border-2 border-[#e0e0e0] bg-white text-[#333333] transition-all duration-300 ease-in-out hover:shadow-md focus:border-[#4a90e2]"
        onChange={handleDestinationChange}
        value={destination}
      >
        <option className="bg-gray-600 text-black" value="" disabled>
          Check out most viewed ones
        </option>
        <option value="Barcelona">Barcelona</option>
        <option value="London">London</option>
        <option value="Berlin">Berlin</option>
      </select>
    </div>
  );
}

export default InputField;
