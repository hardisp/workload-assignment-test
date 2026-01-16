export type Month =
  | "Jan" | "Feb" | "Mar" | "Apr"
  | "May" | "Jun" | "Jul" | "Aug"
  | "Sep" | "Oct" | "Nov" | "Dec";

export const MONTHS: Month[] = [
  "Jan", "Feb", "Mar", "Apr",
  "May", "Jun", "Jul", "Aug",
  "Sep", "Oct", "Nov", "Dec",
];

export type MonthValue = {
  value: number;
  fieldValue: string | number;
  disabled: boolean;
};

export type Assignment = {
  id: string;
  label: string;
  workload: Record<Month, MonthValue>;
};
