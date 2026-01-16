import { produce } from "immer";
import { WorkloadAction, WorkloadState } from "./workload.types";

export const workloadReducer = produce(
  (state: WorkloadState, action: WorkloadAction) => {
    switch (action.type) {
      case "UPDATE_MONTH_VALUE": {
        const cell = state.assignment.workload[action.month];
        const value = Number(action.value);

        cell.value = Number.isNaN(value) ? 0 : value;
        return;
      }

      case "UPDATE_MONTH_FIELDVALUE": {
        const cell = state.assignment.workload[action.month];
        cell.fieldValue = action.fieldValue;
        return;
      }

      case "TOGGLE_MONTH_DISABLED": {
        state.assignment.workload[action.month].disabled = action.disabled;
        return;
      }
    }
  }
);
