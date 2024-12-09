"use client";
import React, { useState } from "react";

type Props = {};

function InputField({}: Props) {
  const [destination, setDestination] = useState("");
  const [input, setInput] = useState("");

  // change state for the select part
  const handleDestinationChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setDestination(event.target.value);
  };
  return (
    <div className="h-35 w-[340px] border">
      <input
        className="w-full text-black"
        type="Your Destination"
        placeholder="Your Destination"
      />
      <select
        onChange={handleDestinationChange}
        value={destination}
        name=""
        id=""
      >
        <option value="" disabled>
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
