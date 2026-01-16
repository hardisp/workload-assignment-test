import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { MouseEvent, MouseEventHandler, useMemo } from "react";

type Props = {
    title?: string;
    cta: {
        label: string;
        onClick: (() => void) | string; 
    }
    handleOnNext?: (e?: MouseEvent<HTMLButtonElement>) => void;
    handleOnPrev?: (e?: MouseEvent<HTMLButtonElement>) => void; 
};
export function Headernav({cta, title, handleOnNext, handleOnPrev}: Props) {
    const ctaProps = useMemo(() => {
        switch (typeof cta.onClick) {
            case "string":
                return {
                    props: {
                        href: cta.onClick,
                    },
                    component: "a" as const,
                    }
                
            default:
                return {
                    props: {
                        onClick: cta.onClick,
                    },
                    component: "button" as const,
                }
        }
        
    }, [cta]);
  return (
    <div className="w-full flex justify-center py-4">
      <div className="flex lg:px-28 px-10 w-full justify-between h-15 items-center">
        <div className="text-lg">{title}</div>

        <div className="flex justify-between items-center">
          <button onClick={handleOnPrev}>
            <ChevronLeftIcon className="text-gray-700 text-2xl" height={'18px'} width={'18px'}/>
          </button>
          <ctaProps.component {...ctaProps.props} className="bg-blue-500 text-white px-6 py-3 rounded-xl font-bold">
            {cta.label}
          </ctaProps.component>
          <button onClick={handleOnNext}>
            <ChevronRightIcon className="text-gray-700" height={'18px'} width={'18px'} />
          </button>
        </div>
      </div>
    </div>
  );
}
