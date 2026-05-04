import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import ComponentBlock from "../ui/ComponentBlock";

import useMeasure from "react-use-measure";

const MultiStepComponent = () => {
  return (
    <section>
      <div className="px-2 py-4">
        <h4 className="text-md font-semibold">Multi step component</h4>

        <p className="text-sm text-neutral-400 dark:text-neutral-500">
          Multi step form component with animation that moves forward and back.
        </p>
      </div>
      <ComponentBlock>
        <MultiStep />
      </ComponentBlock>
    </section>
  );
};

function MultiStep() {
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for back
  const [ref, { height }] = useMeasure();

  const content = useMemo(() => {
    switch (currentStep) {
      case 0:
        return (
          <div key="step0" className="relative">
            <h2 className="mb-2 text-lg font-semibold text-neutral-900 dark:text-neutral-100">
              Step One: Introduction
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Welcome to the setup. This stage explains the core benefits of our
              integration and why you should proceed.
            </p>
            <div className="mt-5 flex flex-col gap-2">
              <div className="h-4 w-64 animate-pulse rounded-md bg-neutral-100 dark:bg-neutral-800" />
              <div className="h-4 w-48 animate-pulse rounded-md bg-neutral-100 dark:bg-neutral-800" />
              <div className="h-4 w-full animate-pulse rounded-md bg-neutral-100 dark:bg-neutral-800" />
              <div className="h-4 w-56 animate-pulse rounded-md bg-neutral-100 dark:bg-neutral-800" />
            </div>
          </div>
        );
      case 1:
        return (
          <div key="step1" className="relative">
            <h2 className="mb-2 text-lg font-semibold text-neutral-900 dark:text-neutral-100">
              Step Two: Preferences
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Customize your experience. Usually, we would present a few toggles
              or input fields here to gather user data.
            </p>
            <div className="mt-5 flex flex-col gap-2">
              <div className="h-4 w-64 animate-pulse rounded-md bg-neutral-100 dark:bg-neutral-800" />
              <div className="h-4 w-48 animate-pulse rounded-md bg-neutral-100 dark:bg-neutral-800" />
              <div className="h-4 w-56 animate-pulse rounded-md bg-neutral-100 dark:bg-neutral-800" />
            </div>
          </div>
        );
      case 2:
        return (
          <div key="step2">
            <h2 className="mb-2 text-lg font-semibold text-neutral-900 dark:text-neutral-100">
              Step Three: Confirmation
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              You are all set! Review the details below and hit finish to
              complete the onboarding process.
            </p>
            <div className="mt-5 flex flex-col gap-2">
              <div className="h-4 w-64 animate-pulse rounded-md bg-neutral-100 dark:bg-neutral-800" />
              <div className="h-4 w-32 animate-pulse rounded-md bg-neutral-100 dark:bg-neutral-800" />
              <div className="h-4 w-56 animate-pulse rounded-md bg-neutral-100 dark:bg-neutral-800" />
              <div className="h-4 w-full animate-pulse rounded-md bg-neutral-100 dark:bg-neutral-800" />
            </div>
          </div>
        );
      default:
        return null;
    }
  }, [currentStep]);

  const variants = {
    initial: (direction) => ({
      x: direction > 0 ? 40 : -40,
      opacity: 0,
      filter: "blur(4px)",
    }),
    active: {
      x: 0,
      opacity: 1,
      filter: "blur(0px)",
    },
    exit: (direction) => ({
      x: direction > 0 ? -40 : 40,
      opacity: 0,
      filter: "blur(4px)",
    }),
  };

  return (
    <div className="flex h-full items-center justify-center p-4">
      <motion.div
        animate={{ height: height > 0 ? height : "auto" }}
        transition={{ type: "spring", bounce: 0, duration: 0.4 }}
        className="dark:bg-card border-border relative w-full max-w-90 overflow-hidden rounded-3xl border bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_2px_2px_rgba(0,0,0,0.04),0_8px_8px_-8px_rgba(0,0,0,0.04)]"
      >
        <div ref={ref} className="p-4">
          <div className="relative overflow-hidden">
            <AnimatePresence
              mode="popLayout"
              initial={false}
              custom={direction}
            >
              <motion.div
                key={currentStep}
                custom={direction}
                variants={variants}
                initial="initial"
                animate="active"
                exit="exit"
                transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              >
                {content}
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.div layout className="mt-8 flex justify-between">
            <button
              disabled={currentStep === 0}
              onClick={() => {
                setDirection(-1);
                setCurrentStep((prev) => prev - 1);
              }}
              className="shadow-xm border-border h-8 w-20 rounded-full border text-sm font-medium text-neutral-400 opacity-100 transition-colors disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:text-neutral-500 dark:text-neutral-500 hover:dark:text-neutral-400"
            >
              Back
            </button>
            <button
              disabled={currentStep === 2}
              onClick={() => {
                setDirection(1);
                setCurrentStep((prev) => prev + 1);
              }}
              className="relative h-8 w-30 overflow-hidden rounded-full bg-linear-to-b from-[#1994ff] to-[#157cff] text-sm font-semibold text-white shadow-[inset_0_0_1px_1px_rgba(255,255,255,0.08),0_1px_1.5px_0_rgba(0,0,0,0.32),0_0_0_0.5px_#1a94ff] transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <span className="flex items-center justify-center [text-shadow:0_1px_1.5px_rgba(0,0,0,0.16)]">
                Continue
              </span>
            </button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
export default MultiStepComponent;
