"use client";
import React, { useState } from "react";

type Props = {};

function RecommendationsCards({}: Props) {
  const [step, setStep] = useState(1);
  const [preferences, setPreferences] = useState({
    vibe: "",
    groupsize: "",
    time: "",
    budget: "",
  });
  const [travelRecommendationBasedOnSize, setTravelRecommendationBasedOnSize] =
    useState(0);
  const [travelRecommendation, setTravelRecommendation] = useState("");
  // function to set the group size with the state
  const handleGroupSizeClick = (size: string) => {
    setPreferences((prev) => ({
      ...prev,
      groupsize: size,
    }));
  };

  // Recommendation logic based on group size
  const recommendBasedOnGroupSize = (groupsize: string) => {
    switch (groupsize) {
      case "1":
        setTravelRecommendation(
          "Solo travel: Explore peaceful spots and hidden gems.",
        );
        break;
      case "2-4":
        setTravelRecommendation(
          "Small groups: Discover fun activities and cozy cafes.",
        );
        break;
      case "5+":
        setTravelRecommendation(
          "Large groups: Check out spacious venues and events.",
        );
        break;
      default:
        setTravelRecommendation("Select a group size for recommendations.");
    }
  };

  return (
    <div>
      {step == 1 ? (
        <div className="carousel rounded-box">
          <h2>What is Your Vibe ?</h2>
          <div className="carousel-item cursor-pointer hover:scale-105">
            <img
              src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
              alt="Vibe 1"
            />
          </div>
          <div className="carousel-item cursor-pointer hover:scale-105">
            <img
              src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
              alt="Vibe 2"
            />
          </div>
          <div className="carousel-item cursor-pointer hover:scale-105">
            <img
              src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
              alt="Vibe 3"
            />
          </div>
        </div>
      ) : step == 2 ? (
        <div className="carousel rounded-box">
          <h2>With how many people do you Travel?</h2>
          <div
            onClick={() => handleGroupSizeClick("1")}
            className="carousel-item cursor-pointer hover:scale-105"
          >
            <img
              src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
              alt="Solo"
            />
          </div>
          <div
            onClick={() => handleGroupSizeClick("2-4")}
            className="carousel-item cursor-pointer hover:scale-105"
          >
            <img
              src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
              alt="Small Group"
            />
          </div>
          <div
            onClick={() => handleGroupSizeClick("5+")}
            className="carousel-item cursor-pointer hover:scale-105"
          >
            <img
              src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
              alt="Large Group"
            />
          </div>
        </div>
      ) : (
        <div className="p-6 text-center">
          <p>No more steps available.</p>
        </div>
      )}
    </div>
  );
}

export default RecommendationsCards;
