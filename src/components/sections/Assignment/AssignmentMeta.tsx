import { AppTooltip } from "@/components/ui/Tooltip";
import { useCallback, useState } from "react";

const actingAsOptions = [
  { value: '', label: 'Acting As' },
  { value: 'reviewer', label: 'Reviewer' },
  { value: 'observer', label: 'Observer' },
];

export function AssignmentMeta() {
  const [inputs, setInputs] = useState({actingAs: '', comment: ''});

  const handleOnInputsChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setInputs((prev) => ({ ...prev, [name]: value }));
    },
    []
  );

  return (
    <div className="mt-6 grid grid-cols-[100px_repeat(1,1fr)] gap-6">
      <div></div>
      <div className="flex gap-2">
        <div className="px-2 bg-gray-200 text-gray-500 font-medium rounded-md">
          <select className="w-full input-no-border bg-transparent py-2 text-sm text-gray-500 font-medium" name="actingAs" onChange={handleOnInputsChange}>
            {/* <option>Acting As</option>
            <option>reviewer</option>
            <option>observer</option> */}
            {actingAsOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="flex-1 h-10"> 
          <AppTooltip content={inputs.comment || "Comment"} align="start" hideArrow sideOffset={2}>
            <textarea
              name="comment"
              value={inputs.comment}
              onChange={handleOnInputsChange}
              className="w-full bg-gray-200 input-no-border rounded-md px-3 py-2 text-sm h-full resize-y text-gray-500 focus:h-14"
              placeholder="Comment"
              rows={3}
            />
          </AppTooltip>
        </div>
      </div>
    </div>
  );
}
