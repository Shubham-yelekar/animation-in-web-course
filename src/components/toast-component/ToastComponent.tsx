import { useState } from "react";
import ComponentBlock from "../ui/ComponentBlock";

const ToastComponent = () => {
  return (
    <section>
      <div className="px-2 py-4">
        <h4 className="text-md font-semibold">Down Arrow</h4>

        <p className="text-sm text-neutral-400 dark:text-neutral-500">
          Hover to move the arrow
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
    <div className="bg-background relative flex h-full w-full flex-col items-end p-6">
      <div className="toaster">
        {Array.from({ length: toasts }).map((_, i) => (
          <Toast key={i} />
        ))}
      </div>
      <button
        className="button"
        onClick={() => {
          setToasts(toasts + 1);
        }}
      >
        Add toast
      </button>
    </div>
  );
}

function Toast() {
  return (
    <div className="toast">
      <span className="title">Event Created </span>
      <span className="description">Monday, January 3rd at 6:00pm</span>
    </div>
  );
}
export default ToastComponent;
