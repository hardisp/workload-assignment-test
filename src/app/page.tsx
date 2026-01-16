"use client";

import { WorkloadProvider } from "@/context/workload/WorkloadContext";
import Homepage from "@/pages/Homepage";

export default function Home() {
  return (
    <WorkloadProvider>
      <Homepage />
    </WorkloadProvider>
  );
}
