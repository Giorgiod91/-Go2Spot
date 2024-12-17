"use client";
import React, { useState } from "react";

type Props = {};
//::TODO: i shouold refactor the function handleVibeClick to make one function out of it

function RecommendationsCards({}: Props) {
  const [step, setStep] = useState(1);
  const [clicked, setClicked] = useState(false);
  const [preferences, setPreferences] = useState({
    vibe: "",
    groupsize: "",
    time: "",
    budget: "",
  });
  const [travelRecommendation, setTravelRecommendation] = useState("");

  const handlePreferenceClick = (
    key: keyof typeof preferences,
    value: string,
  ) => {
    setPreferences((prev) => ({
      ...prev,
      [key]: value,
    }));

    if (key === "groupsize") {
      recommendBasedOnGroupSize(value);
    }
  };

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
  // functions to set the vibe base on user and get to step 2
  const handleVibeClick = () => {
    handlePreferenceClick("vibe", "Adventure");
    setClicked(true);
    setStep(2);
  };
  const handleVibeClick2 = () => {
    handlePreferenceClick("vibe", "Relaxation");
    setClicked(true);
    setStep(2);
  };
  const handleVibeClick3 = () => {
    handlePreferenceClick("vibe", "NightLife");
    setClicked(true);
    setStep(2);
  };
  // functions to set the group size based on users click

  const handleGroupsizeClick = () => {
    handlePreferenceClick("groupsize", "1");
    setClicked(true);
    setStep(3);
  };
  const handleGroupsizeClick2 = () => {
    handlePreferenceClick("groupsize", "2");
    setClicked(true);
    setStep(3);
  };
  const handleGroupsizeClick3 = () => {
    handlePreferenceClick("groupsize", "3");
    setClicked(true);
    setStep(3);
  };

  return (
    <div>
      {step === 1 ? (
        <div className="carousel rounded-box">
          <h2>What is Your Vibe?</h2>
          <div
            onClick={handleVibeClick}
            className="carousel-item relative cursor-pointer hover:scale-105"
          >
            <img
              src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
              alt="Adventure Vibe"
              className="h-auto w-full"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-lg font-semibold text-white">
              Adventure
            </div>
          </div>
          <div
            onClick={handleVibeClick2}
            className="carousel-item relative cursor-pointer hover:scale-105"
          >
            <img
              src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
              alt="Relaxation Vibe"
              className="h-auto w-full"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-lg font-semibold text-white">
              Relaxation
            </div>
          </div>
          <div
            onClick={handleVibeClick3}
            className="carousel-item relative cursor-pointer hover:scale-105"
          >
            <img
              src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
              alt="Nightlife Vibe"
              className="h-auto w-full"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-lg font-semibold text-white">
              Nightlife
            </div>
          </div>
        </div>
      ) : step === 2 ? (
        <div className="carousel rounded-box">
          <h2>With how many people do you travel?</h2>
          <div
            onClick={() => handlePreferenceClick("groupsize", "1")}
            className="carousel-item relative cursor-pointer hover:scale-105"
          >
            <img
              src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
              alt="Solo"
              className="h-auto w-full"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-lg font-semibold text-white">
              Solo
            </div>
          </div>
          <div
            onClick={() => handlePreferenceClick("groupsize", "2-4")}
            className="carousel-item relative cursor-pointer hover:scale-105"
          >
            <img
              src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
              alt="Small Group"
              className="h-auto w-full"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-lg font-semibold text-white">
              Small Group
            </div>
          </div>
          <div
            onClick={() => handlePreferenceClick("groupsize", "5+")}
            className="carousel-item relative cursor-pointer hover:scale-105"
          >
            <img
              src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
              alt="Large Group"
              className="h-auto w-full"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-lg font-semibold text-white">
              Large Group
            </div>
          </div>
        </div>
      ) : (
        <div className="p-6 text-center">
          <p>{travelRecommendation || "No more steps available."}</p>
        </div>
      )}
    </div>
  );
}

export default RecommendationsCards;
