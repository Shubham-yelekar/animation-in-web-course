import ComponentBlock from "../ui/ComponentBlock";

const CardHover = () => {
  return (
    <section>
      <div className="px-2 py-4">
        <h4 className="text-md font-semibold">Card Hover</h4>

        <p className="text-sm text-neutral-400 dark:text-neutral-500">
          Hover to reveal the information box
        </p>
      </div>
      <ComponentBlock>
        <CardHoverComponent />
      </ComponentBlock>
    </section>
  );
};

const CardHoverComponent = () => {
  return (
    <a
      href="#"
      className="group bg-card relative mx-auto mt-4 flex h-75 w-80 items-end overflow-hidden rounded-2xl no-underline shadow-sm ring-1 ring-black/10"
    >
      <div className="will-change-[transform, opacity] transition-[opacity, transform] ease-out-quint border-border bg-popover ring-px relative m-1.5 w-full translate-y-full transform rounded-xl border px-3.5 pt-2.5 pb-3 text-sm opacity-0 shadow-sm ring-black duration-500 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
        <h3 className="text-popover-foreground font-medium">Project name</h3>
        <p className="mt-1 leading-none text-zinc-500">Project description</p>

        {/* card-icon */}
      </div>
    </a>
  );
};

export default CardHover;
