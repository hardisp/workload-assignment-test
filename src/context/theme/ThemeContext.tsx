"use client"

import { createContext, useContext, useState } from "react"; 

type ContextValue = {
  tabs: {
    activeTab: string;
    setActiveTab: (tab: string) => void;
  }
};

const ThemeContext = createContext<ContextValue | null>(null);

export function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <ThemeContext.Provider value={{ tabs: { activeTab, setActiveTab } }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error(
      "useTheme must be used inside ThemeProvider"
    );
  }
  return ctx;
}