import cn from "../../util/cn";
interface containerTypes {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: containerTypes) => {
  return (
    <div
      className={cn(
        "mx-auto min-h-screen w-full max-w-2xl border-x border-neutral-200 dark:border-neutral-800",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Container;
