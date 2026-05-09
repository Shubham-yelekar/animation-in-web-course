import ComponentBlock from "../ui/ComponentBlock";

const CardStacking = () => {
  return (
    <section>
      <div className="px-2 py-4">
        <h4 className="text-md font-semibold">Cards Stacking</h4>

        <p className="text-sm text-neutral-400 dark:text-neutral-500">
          This is similar to the sonnar components.
        </p>
      </div>
      <ComponentBlock>
        <StackedComponent />
      </ComponentBlock>
    </section>
  );
};

const LENGTH = 3;
const StackedComponent = () => {
  return (
    <div className="grid h-full w-full items-center justify-center">
      {new Array(LENGTH).fill(0).map((_, i) => (
        <div
          style={{ "--index": LENGTH - i }}
          className="shadow-accent-foreground bg-card h-18 w-80 origin-bottom translate-y-[calc(-13%*var(--index))] scale-[calc(1-var(--index)*0.05)] rounded-xl border border-neutral-200 shadow-xs [grid-area:1/1] dark:border-neutral-700"
          key={i}
        />
      ))}
    </div>
  );
};

export default CardStacking;
