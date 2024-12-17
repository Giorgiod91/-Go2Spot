"use client";

import React, { useState } from "react";
import RecommendationsCards from "./RecommendationsCards";

type Props = {};

function PersonalRecommendation({}: Props) {
  return (
    <div>
      <h2> Personalize Your Experience </h2>
      <p> Answer a few questions to get tailored recommendations.</p>
      <RecommendationsCards />
    </div>
  );
}

export default PersonalRecommendation;
