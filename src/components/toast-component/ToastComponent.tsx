import { useState, useEffect } from "react";
import ComponentBlock from "../ui/ComponentBlock";
import cn from "../../util/cn";
const ToastComponent = () => {
  return (
    <section>
      <div className="px-2 py-4">
        <h4 className="text-md font-semibold">Toast Component</h4>

        <p className="text-sm text-neutral-400 dark:text-neutral-500">
          toast component with animation on add and remove. Click the button to
          add a
        </p>
      </div>
      <ComponentBlock>
        <Toaster />
      </ComponentBlock>
    </section>
  );
};

function Toaster() {
  const [toasts, setToasts] = useState(0);

  return (
    <div className="bg-background relative flex h-full w-full flex-col items-center p-6">
      <div className="absolute bottom-[80px] left-1/2 flex w-[356px] -translate-x-1/2 flex-col gap-4">
        {Array.from({ length: toasts }).map((_, i) => (
          <Toast key={i} index={toasts - 1 - i} />
        ))}
      </div>
      <button
        className="btn"
        onClick={() => {
          setToasts(toasts + 1);
        }}
      >
        Add toast
      </button>
    </div>
  );
}

function Toast({ index }: { index: number }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 10);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div
      style={{ "--index": index, "--gap": "12px" }}
      className={cn(
        "bg-card ring-border ease-out-expo absolute bottom-0 flex w-full transform flex-col gap-1 rounded-lg px-3.5 pt-2.5 pb-3 text-[13px] shadow-sm ring-1 transition-all duration-500",
        mounted
          ? "-translate-y-[calc(var(--index)*(100%+var(--gap)))] scale-100 opacity-100"
          : "translate-y-8 scale-95 opacity-0",
      )}
    >
      <span className="text-card-foreground font-medium">Event Created </span>
      <span className="text-muted-foreground leading-none">
        Monday, January 3rd at 6:00pm
      </span>
    </div>
  );
}
export default ToastComponent;
