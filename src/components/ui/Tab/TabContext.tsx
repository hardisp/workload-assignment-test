"use client"

import { createContext, useContext, useState } from "react"; 

type ContextValue = { 
    activeTab: string;
    setActiveTab: (tab: string) => void; 
};

const TabContext = createContext<ContextValue | null>(null);

export function Tabs({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <TabContext.Provider value={{   activeTab, setActiveTab }}>
      {children}
    </TabContext.Provider>
  );
}

export function useTab() {
  const ctx = useContext(TabContext);
  if (!ctx) {
    throw new Error(
      "useTab must be used inside Tabs"
    );
  }
  return ctx;
}