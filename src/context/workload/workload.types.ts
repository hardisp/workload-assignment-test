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
      type: "UPDATE_MONTH_FIELDVALUE";
      month: Month;
      fieldValue: number | string;
    }
  | {
      type: "UPDATE_MONTH_VALUE";
      month: Month;
      value: number;
    }
  | {
      type: "TOGGLE_MONTH_DISABLED";
      month: Month;
      disabled: boolean;
    };
