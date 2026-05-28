import type { ReactNode } from "react";

const ComponentBlock = ({ children }: { children: ReactNode }) => {
  return (
    <div className="shadow-accent-foreground aspect-square w-full overflow-hidden border-y border-neutral-200 bg-white sm:aspect-video dark:border-neutral-800 dark:bg-black">
      {children}
    </div>
  );
};
export default ComponentBlock;
