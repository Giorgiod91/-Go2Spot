"use client";

import React, { createContext, useContext, useState, type ReactNode } from "react";

export type ChosenSpot = {
  title: string;
  lat: number;
  lng: number;
} | null;

type ChooseContextType = {
  chosenSpot: ChosenSpot;
  setChosenSpot: (spot: ChosenSpot) => void;
  activeCity: string;
  setActiveCity: (city: string) => void;
  // legacy compat — kept so nothing breaks during transition
  choose: string;
  setChoose: (value: string) => void;
};

const ChooseContext = createContext<ChooseContextType | undefined>(undefined);

export const ChooseProvider = ({ children }: { children: ReactNode }) => {
  const [chosenSpot, setChosenSpot] = useState<ChosenSpot>(null);
  const [activeCity, setActiveCity] = useState("Barcelona");

  return (
    <ChooseContext.Provider
      value={{
        chosenSpot,
        setChosenSpot,
        activeCity,
        setActiveCity,
        choose: chosenSpot?.title ?? "",
        setChoose: (title) => {
          // legacy — callers that only had title won't provide coords
          setChosenSpot(chosenSpot && chosenSpot.title === title ? chosenSpot : { title, lat: 0, lng: 0 });
        },
      }}
    >
      {children}
    </ChooseContext.Provider>
  );
};

export const useChoose = () => {
  const context = useContext(ChooseContext);
  if (!context) throw new Error("useChoose must be used within a ChooseProvider");
  return context;
};
