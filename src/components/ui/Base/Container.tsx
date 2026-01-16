import { twMerge } from "tailwind-merge";

type ContainerProps = {
  className?: string;
  children: React.ReactNode;
};

export default function Container({ className, children }: ContainerProps) {
  return (
    <div
      className={twMerge("max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 bg-white rounded-2xl", className)}
    >
      {children}
    </div>
  );
}
