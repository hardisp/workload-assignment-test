"use client";

import * as Tooltip from "@radix-ui/react-tooltip";
import { ReactNode } from "react";

type Props = {
  content: string;
  children: ReactNode;
  side?: "top" | "right" | "bottom" | "left";
  align?: "center" | "start" | "end";
  sideOffset?: number;
  hideArrow?: boolean;
};

export function AppTooltip({ content, children, align, side, sideOffset, hideArrow = false }: Props) {
  return (
    <Tooltip.Provider delayDuration={300}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          {children}
        </Tooltip.Trigger>

        <Tooltip.Portal>
          <Tooltip.Content
            side={side ?? 'top'}
            align={align ?? 'center'}
            sideOffset={sideOffset ?? 7}
            className="bg-gray-500 text-white text-xs px-3 py-1.5 rounded-lg shadow-lg select-none"
          >
            {content}
            {!hideArrow && <Tooltip.Arrow className="fill-gray-500" />}
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
