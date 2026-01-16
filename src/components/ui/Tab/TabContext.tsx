"use client"

import { createContext, useContext, useState } from "react"; 

type ContextValue = { 
    activeTab: string;
    setActiveTab: (tab: string) => void; 
};

const ThemeContext = createContext<ContextValue | null>(null);

export function Tabs({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <ThemeContext.Provider value={{   activeTab, setActiveTab }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTab() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error(
      "useTab must be used inside Tabs"
    );
  }
  return ctx;
}