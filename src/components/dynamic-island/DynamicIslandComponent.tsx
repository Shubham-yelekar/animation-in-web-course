import ComponentBlock from "../ui/ComponentBlock";
import DynamicIsland from "./DynamicIsland";

const DynamicIslandComponent = () => {
  return (
    <section>
      <div className="px-2 py-4">
        <h4 className="text-md font-semibold">Dynamic Island</h4>

        <p className="text-sm text-neutral-400 dark:text-neutral-500">
          Apple iOS Dynamic Island
        </p>
      </div>
      <ComponentBlock>
        <DynamicIsland />
      </ComponentBlock>
    </section>
  );
};

export default DynamicIslandComponent;
