import ComponentBlock from "../ui/ComponentBlock";

const CardHover = () => {
  return (
    <section>
      <div className="px-2 py-4">
        <h4 className="text-md">Card Hover</h4>

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
      className="group relative mx-auto mt-4 flex h-75 w-80 items-end overflow-hidden rounded-2xl bg-white no-underline shadow-sm ring-1 ring-zinc-900/10"
    >
      <div className="will-change-[transform, opacity] transition-[opacity, transform] ease-out-quint relative m-1.5 w-full translate-y-full transform rounded-xl border border-white bg-neutral-50 px-3.5 pt-2.5 pb-3 text-sm opacity-0 shadow-sm ring-1 ring-black/5 duration-500 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
        <h3 className="font-medium text-zinc-900">Project name</h3>
        <p className="mt-1 leading-none text-zinc-500">Project description</p>

        {/* card-icon */}
        <svg
          width="11"
          height="11"
          viewBox="0 0 11 11"
          fill="none"
          className="absolute top-4 right-4"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.33333 0.4375C6.33333 0.195877... (truncated for brevity) ...0.5 10.0625V6.27083Z"
            fill="#58585F"
          />
        </svg>
      </div>
    </a>
  );
};

export default CardHover;
