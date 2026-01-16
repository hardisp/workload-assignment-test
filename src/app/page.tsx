"use client";

import { calculateMonthlyTotals } from "@/lib/calc"; 
import { useWorkload } from "@/context/workload/WorkloadContext";
import { TabHeader, Tabs } from "@/components/ui/Tab";
import { WorkloadSummary } from "@/components/sections/Workload";
import Assignment from "@/components/sections/Assignment/Assignment";
import TabBody from "@/components/ui/Tab/TabBody"; 

const tabHeaders = [
  { label: "Serial Life PSA", id: "serial-life-psa" },
  { label: "Europe", id: "europe" },
  { label: "STELLANTIS", id: "stellantis" },
  { label: "PSA", id: "psa" },
];

export default function Home() {
  const { state } = useWorkload();

  const totals = calculateMonthlyTotals([state.assignment]);

  return (
    <div className="p-6 max-w-7xl mx-auto"> 
      <WorkloadSummary totals={totals} />
      <hr className="border-gray-300 mb-4" /> 
      <Tabs>
        <TabHeader headers={tabHeaders} />
        <TabBody items={[
          {id: tabHeaders[0].id, content: <Assignment totals={totals} />},
          {id: tabHeaders[1].id, content: <div>Content for Europe</div>},
          {id: tabHeaders[2].id, content: <div>Content for STELLANTIS</div>},
          {id: tabHeaders[3].id, content: <div>Content for PSA</div>},
        ]}
        />
        <hr className="border-gray-300 my-4" /> 
      </Tabs>
    </div>
  );
}
