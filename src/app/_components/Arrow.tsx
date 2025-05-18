"use client";
import React, { useState } from "react";

type Props = {};

function Arrow({}: Props) {
  // useState for changing the href for navigation
  const [newHref, setNewHref] = useState("");
  // this is a simple function that fires onclick that will navigate to a specific area inside the app

  const navigateOnPress = (newHref: any) => {
    setNewHref("#showcase");
  };
  return (
    <div className="z-0 cursor-pointer hover:scale-110">
      <a href={newHref}>
        <button onClick={navigateOnPress}>
          <h1 className="text-center text-6xl font-bold text-black">⬇️</h1>
        </button>
      </a>
    </div>
  );
}

export default Arrow;
