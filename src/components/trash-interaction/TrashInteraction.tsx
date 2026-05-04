import ComponentBlock from "../ui/ComponentBlock";
import { TrashAnimation } from "./TrashAnimation";

const TrashInteraction = () => {
  return (
    <section>
      <div className="px-2 py-4">
        <h4 className="text-md font-semibold">Multi step component</h4>

        <p className="text-sm text-neutral-400 dark:text-neutral-500">
          Multi step form component with animation that moves forward and back.
        </p>
      </div>
      <ComponentBlock>
        <TrashAnimation />
      </ComponentBlock>
    </section>
  );
};

export default TrashInteraction;
