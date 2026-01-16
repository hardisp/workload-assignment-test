import { Assignment, MONTHS } from "./workload";

const defaultWorkload = () =>
  Object.fromEntries(
    MONTHS.map((m) => [m, { value: 1, fieldValue: '1', disabled: false }])
  ) as Assignment["workload"];

export const ASSIGNMENTS: Assignment[] = [
  {
    id: "de-mr10r801",
    label: "DE | MR10R801",
    workload: {
      ...defaultWorkload(),
      Mar: { value: 0.3, fieldValue: '0.3', disabled: false },
      Apr: { value: 0.3, fieldValue: '0.3', disabled: true },
    },
  },
];
