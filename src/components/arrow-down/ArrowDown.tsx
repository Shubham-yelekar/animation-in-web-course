import ComponentBlock from "../ui/ComponentBlock";

const ArrowDown = () => {
  return (
    <section>
      <div className="px-2 py-4">
        <h4 className="text-md">Down Arrow</h4>

        <p className="text-sm text-neutral-400 dark:text-neutral-500">
          Hover to move the arrow
        </p>
      </div>
      <ComponentBlock>
        <DownloadArrow />
      </ComponentBlock>
    </section>
  );
};

function DownloadArrow() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <button
        className="group ease-out-circle grid h-10 w-10 transform place-items-center overflow-clip rounded-full bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.08),0px_2px_2px_rgba(0,0,0,0.04)] transition duration-150"
        aria-label="Download PDF"
      >
        <ArrowDownIcon className="ease-in-out-expo transition-transform duration-300 [grid-area:1/1] group-hover:translate-y-8" />
        <ArrowDownIcon className="ease-in-out-expo -translate-y-8 transition-transform duration-300 [grid-area:1/1] group-hover:translate-y-0" />
      </button>
    </div>
  );
}

const ArrowDownIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.25 14L12 20.25L5.75 14M12 19.5V3.75"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowDown;
