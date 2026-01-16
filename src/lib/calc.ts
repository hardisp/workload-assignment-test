import { Assignment, Month, MONTHS } from "./workload";

export function calculateMonthlyTotals(
  assignments: Assignment[]
): Record<Month, number> {
  const totals = {} as Record<Month, number>;

  MONTHS.forEach((month) => {
    totals[month] = assignments.reduce((sum, a) => {
      const cell = a.workload[month];
      return sum + (cell.disabled ? 0 : cell.value);
    }, 0);
  });

  return totals;
}
