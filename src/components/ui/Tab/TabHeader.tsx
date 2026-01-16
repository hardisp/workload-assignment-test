
import { twMerge } from "tailwind-merge";
import { useTab } from "./TabContext";
import { useEffect } from "react";

type TabHeader = {
  label: string;
  id: string;
};
 

export function TabHeader({headers}: {headers: TabHeader[]}) {
  const {activeTab, setActiveTab} = useTab()

  useEffect(() => {
    if (headers.length > 0) {
      setActiveTab(headers[0].id);
    }
  }, [headers]);

  const handleOnChangeTab = (id: string) => {
    setActiveTab(id);
  };
 
  return (
    <div>
      <div className="mb-4">
        <nav className="-mb-px flex" aria-label="Tabs">
          {headers.map((tab, i) => (
            <button
              key={tab.id}
              className={twMerge(
                "relative whitespace-nowrap cursor-pointer py-2 px-2 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 after:content-[''] after:absolute after:top-3.5 after:w-px after:h-1/2 after:bg-gray-300 after:right-0",
                tab.id === activeTab && "text-black font-semibold",
                i === 0 && "pl-0",
                i === headers.length - 1 && "after:hidden"
              )}
              onClick={() => handleOnChangeTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div> 
    </div>
  );
}
