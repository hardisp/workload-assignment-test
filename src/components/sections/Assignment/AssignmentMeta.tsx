import * as Select from "@radix-ui/react-select";
import React, { useCallback, useState } from "react";
import { CheckIcon, ChevronDownIcon } from "@radix-ui/react-icons";
import { twMerge } from "tailwind-merge";
import { AppTooltip } from "@/components/ui/Systems";

interface SelectItemProps {
  children: React.ReactNode;
  className?: string;
  value: string;
  disabled?: boolean;
}

const SelectItem = React.forwardRef<HTMLDivElement, SelectItemProps>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <Select.Item
        className={twMerge("SelectItem", className)}
        {...props}
        ref={forwardedRef}
      >
        <Select.ItemText>{children}</Select.ItemText>
        <Select.ItemIndicator className="SelectItemIndicator">
          <CheckIcon />
        </Select.ItemIndicator>
      </Select.Item>
    );
  }
);

SelectItem.displayName = "SelectItem";

const actingAsOptions = [
  { value: "actingAs", label: "Acting As" },
  { value: "reviewer", label: "Reviewer" },
  { value: "observer", label: "Observer" },
];

export function AssignmentMeta() {
  const [inputs, setInputs] = useState({ actingAs: "", comment: "" });

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
        <div className="px-2 bg-gray-200 text-gray-500 font-medium rounded-md flex items-center">
          <div className="w-25 flex justify-between items-center">
            <Select.Root
              onValueChange={(s) => {
                setInputs((prev) => ({ ...prev, actingAs: s }));
              }}
            >
              <Select.Trigger
                className="SelectTrigger flex justify-between items-center w-full focus-visible:outline-0"
                aria-label="Food"
              >
                <Select.Value placeholder="Acting As" />
                <Select.Icon className="SelectIcon text-blue-500">
                  <ChevronDownIcon />
                </Select.Icon>
              </Select.Trigger>
              <Select.Portal>
                <Select.Content
                  className="SelectContent"
                  position="popper"
                  sideOffset={5}
                >
                  <Select.Viewport
                    className="SelectViewport bg-gray-300 rounded-md"
                  >
                    {actingAsOptions.map((option) => (
                      <SelectItem
                        key={option.value}
                        value={option.value}
                        className="[&>.SelectItemIndicator]:hidden focus-visible:outline-0 cursor-default hover:bg-gray-400  px-4 py-2 "
                      >
                        {option.label}
                      </SelectItem>
                    ))}
                  </Select.Viewport>
                  <Select.ScrollDownButton className="SelectScrollButton">
                    <ChevronDownIcon />
                  </Select.ScrollDownButton>
                </Select.Content>
              </Select.Portal>
            </Select.Root>
          </div>
        </div>

        <div className="flex-1 h-10">
          <AppTooltip
            content={inputs.comment || "Comment"}
            align="start"
            hideArrow
            sideOffset={2}
          >
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
