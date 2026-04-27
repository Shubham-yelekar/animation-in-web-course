const Heading = ({ module, title }: { module: string; title: string }) => {
  return (
    <div className="border-y border-neutral-200 px-2 py-4 dark:border-neutral-800">
      <p className="text-xs text-neutral-400 dark:text-neutral-500">
        {" "}
        Module {module}
      </p>
      <h2 className="text-md font-semibold">{title}</h2>
    </div>
  );
};

export default Heading;
