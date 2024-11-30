"use client";
import React, { useState } from "react";
import ImageCard from "./ImageCard";

type Props = {};

function LandingPage({}: Props) {
  const [input, setInput] = useState("");
  return (
    <div className="w-7xl flex flex-col">
      <h1 className="text-7xl font-black">Find places with go2spot</h1>
      <p className="">find cool locations in your destination area</p>

      <div className="flex flex-row space-x-2 p-2">
        <ImageCard />
        <ImageCard />
        <ImageCard />
      </div>
    </div>
  );
}

export default LandingPage;
