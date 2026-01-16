import { WorkloadAction, WorkloadState } from "./workload.types";

export function workloadReducer(
  state: WorkloadState,
  action: WorkloadAction
): WorkloadState {
  switch (action.type) {
    case "UPDATE_MONTH_VALUE": {
      return {
        ...state,
        assignment: {
          ...state.assignment,
          workload: {
            ...state.assignment.workload,
            [action.month]: {
              ...state.assignment.workload[action.month],
              value: isNaN(Number(action.value)) ? 0 : Number(action.value),
              fieldValue: action.value,
            },
          },
        },
      };
    }

    case "TOGGLE_MONTH_DISABLED": {
      return {
        ...state,
        assignment: {
          ...state.assignment,
          workload: {
            ...state.assignment.workload,
            [action.month]: {
              ...state.assignment.workload[action.month],
              disabled: action.disabled,
            },
          },
        },
      };
    }

    default:
      return state;
  }
}
