"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type ChooseContextType = {
  choose: string;
  setChoose: (value: string) => void;
};

const ChooseContext = createContext<ChooseContextType | undefined>(undefined);

export const ChooseProvider = ({ children }: { children: ReactNode }) => {
  const [choose, setChoose] = useState("");

  return (
    <ChooseContext.Provider value={{ choose, setChoose }}>
      {children}
    </ChooseContext.Provider>
  );
};

export const useChoose = () => {
  const context = useContext(ChooseContext);
  if (!context) {
    throw new Error("useChoose must be used within a ChooseProvider");
  }
  return context;
};
