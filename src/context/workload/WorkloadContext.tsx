"use client";

import {
  createContext,
  useContext,
  useReducer,
  ReactNode,
} from "react";
import { workloadReducer } from "./workload.reducer";
import { WorkloadState, WorkloadAction } from "./workload.types";
import { ASSIGNMENTS } from "@/lib/data";

type ContextValue = {
  state: WorkloadState;
  dispatch: React.Dispatch<WorkloadAction>;
};

const WorkloadContext = createContext<ContextValue | null>(null);

const initialState: WorkloadState = {
  assignment: ASSIGNMENTS[0],
};

export function WorkloadProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [state, dispatch] = useReducer(
    workloadReducer,
    initialState
  );

  return (
    <WorkloadContext.Provider value={{ state, dispatch }}>
      {children}
    </WorkloadContext.Provider>
  );
}

export function useWorkload() {
  const ctx = useContext(WorkloadContext);
  if (!ctx) {
    throw new Error(
      "useWorkload must be used inside WorkloadProvider"
    );
  }
  return ctx;
}
