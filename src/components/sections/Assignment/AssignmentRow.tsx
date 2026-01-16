import { MONTHS } from "@/lib/workload";
import { validateWorkloadInput } from "@/lib/validation";
import { useCallback } from "react";
import { toast } from "sonner";
import { useWorkload } from "@/context/workload/WorkloadContext";
import { twMerge } from "tailwind-merge";
import { AppTooltip } from "@/components/ui/Tooltip";
import { Checkbox } from "@/components/ui/Forms";

export function AssignmentRow({ totals }: { totals: Record<string, number> }) {
  const { state, dispatch } = useWorkload();
  const assignment = state.assignment;

  const handleOnChangeCheckbox = useCallback(
    (month: string, disabled: boolean) => {
      dispatch({
        type: "TOGGLE_MONTH_DISABLED",
        month: month as keyof typeof assignment.workload,
        disabled,
      });
    },
    [dispatch]
  );

  const handleOnChange = useCallback(
    (month: string, value: string, disabled: boolean) => {
      const error = validateWorkloadInput(value);

      if (error) {
        toast.error(error);
        return;
      }
      if (disabled) {
        dispatch({
          type: "TOGGLE_MONTH_DISABLED",
          month: month as keyof typeof assignment.workload,
          disabled: true,
        });
      } else {
        dispatch({
          type: "UPDATE_MONTH_VALUE",
          month: month as keyof typeof assignment.workload,
          value: value,
        });
      }
    },
    [dispatch, assignment.workload]
  );

  return (
    <div className="grid grid-cols-[100px_repeat(1,1fr)] gap-2 items-center">
      {/* Label */}
      <div className="flex flex-col items-end justify-start text-right">
        <div className="text-sm text-gray-400">Total</div>
        <div className="text-sm gap-1 flex font-normal text-left self-start relative before:content-[''] before:w-2 before:h-5 before:rounded-lg before:bg-blue-500 before:block">
          {assignment.label}
        </div>
      </div>

      {/* Month Inputs */}
      <div className="flex gap-2">
        {MONTHS.map((month) => {
          const cell = assignment.workload[month];

          return (
            <div
              className="flex flex-col justify-start items-center"
              key={month}
            >
              <div className="text-sm text-gray-900 text-center font-bold">
                {totals[month]}
              </div>
              <div
                className={twMerge(
                  "flex items-center gap-1 py-1 px-2",
                  cell.disabled ? "label-warn" : "label-success"
                )}
              >
                <input
                  type="text"
                  value={cell.fieldValue}
                  disabled={cell.disabled}
                  onChange={(e) => {
                    handleOnChange(month, e.target.value, cell.disabled);
                  }}
                  className="w-8 px-1 py-0 text-sm input-no-border rounded-md  text-center font-medium"
                />
                <AppTooltip content="Mark as fictive"> 
                  <div className="">
                    <Checkbox
                      checked={cell.disabled}
                      onChange={(e) => handleOnChangeCheckbox(month, e)}
                    />
                  </div>
                </AppTooltip>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
