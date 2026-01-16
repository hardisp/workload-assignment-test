import { twMerge } from "tailwind-merge";
import CheckedIcon from "../Icons/CheckedIcon";

type Props = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  className?: string;
  iconClassname?: string;
};

export function Checkbox({ checked, onChange, className, iconClassname}: Props) {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="peer sr-only"
      />
      <span
        className={twMerge(
          "w-5 h-5 rounded-md flex items-center justify-center border border-gray-300 bg-white transition-all duration-150 peer-checked:bg-orange-400 peer-checked:border-orange-400 peer-focus-visible:ring-2 peer-focus-visible:ring-orange-300",
          className
        )}
      >
        <span className={twMerge("text-xs text-white", iconClassname)}>
            <CheckedIcon />
        </span>
    </span> 
    </label>
  );
}
