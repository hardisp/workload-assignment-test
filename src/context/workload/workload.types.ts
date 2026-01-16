import { Month } from "@/lib/workload";

export type MonthCell = {
  value: number;
  fieldValue: number | string;
  disabled: boolean;
};

export type Assignment = {
  id: string;
  label: string;
  workload: Record<Month, MonthCell>;
};

export type WorkloadState = {
  assignment: Assignment;
};

export type WorkloadAction =
  | {
      type: "UPDATE_MONTH_VALUE";
      month: Month;
      value: number | string;
    }
  | {
      type: "TOGGLE_MONTH_DISABLED";
      month: Month;
      disabled: boolean;
    };
