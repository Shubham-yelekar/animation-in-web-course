import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Dots from "../ui/Dots";

import ComponentBlock from "../ui/ComponentBlock";

const buttonCopy = {
  idle: "Send me a login link",
  loading: <Dots />,
  success: "Login link sent!",
};

const SmoothButtonComponent = () => {
  return (
    <section>
      <div className="px-2 py-4">
        <h4 className="text-md font-semibold">Smooth Button</h4>

        <p className="text-sm text-neutral-400 dark:text-neutral-500">
          Smooth Button
        </p>
      </div>
      <ComponentBlock>
        <SmoothButton />
      </ComponentBlock>
    </section>
  );
};

const variants = {
  initial: { opacity: 0, y: -25 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 25 },
};

function SmoothButton() {
  const [buttonState, setButtonState] = useState("idle");

  return (
    <div className="outer-wrapper flex h-full w-full items-center justify-center">
      <button
        className="blue-button relative flex h-9 min-w-48 items-center justify-center overflow-hidden rounded-md bg-linear-to-b from-blue-400 from-0% to-blue-600 to-100% py-2 text-sm"
        disabled={buttonState !== "idle"}
        onClick={() => {
          // This code is just a placeholder
          setButtonState("loading");

          setTimeout(() => {
            setButtonState("success");
          }, 3000);

          setTimeout(() => {
            setButtonState("idle");
          }, 5000);
        }}
      >
        <AnimatePresence mode="popLayout">
          <motion.span
            key={buttonState}
            transition={{ type: "spring", duration: 0.3, bounce: 0 }}
            variants={variants}
            initial={variants.initial}
            animate={variants.visible}
            exit={variants.exit}
          >
            {buttonCopy[buttonState]}
          </motion.span>
        </AnimatePresence>
      </button>
    </div>
  );
}

export default SmoothButtonComponent;
