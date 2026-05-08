"use client";
import React, { useState } from "react";

function Arrow() {
  const [newHref, setNewHref] = useState("");

  const navigateOnPress = () => {
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
