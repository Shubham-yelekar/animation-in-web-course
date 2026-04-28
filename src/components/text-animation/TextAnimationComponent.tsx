import { useState, useEffect } from "react";
import ComponentBlock from "../ui/ComponentBlock";
import cn from "../../util/cn";
const TextAnimationComponent = () => {
  return (
    <section>
      <div className="px-2 py-4">
        <h4 className="text-md font-semibold">Text Animation</h4>

        <p className="text-sm text-neutral-400 dark:text-neutral-500">
          Each letter is animated with slight delay.
        </p>
      </div>
      <ComponentBlock>
        <TextReveal />
      </ComponentBlock>
    </section>
  );
};

const TEXT = "Animations";

function TextReveal() {
  const [reset, setReset] = useState(0);

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4">
      <div key={reset}>
        <h1 className="overflow-hidden text-4xl font-semibold tracking-tight">
          {TEXT.split("").map((letter, index) => {
            return (
              <span
                key={index}
                className="animate-text-reveal inline-block transition-transform"
                style={{ animationDelay: `${index * 0.03}s` }}
              >
                {letter === " " ? "\u00A0" : letter}
              </span>
            );
          })}
        </h1>
      </div>

      <button className="btn mt-4!" onClick={() => setReset(reset + 1)}>
        Replay animation
      </button>
    </div>
  );
}

export default TextAnimationComponent;
