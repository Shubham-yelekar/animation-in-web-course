import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Ring } from "./Ring";
import { Timer } from "./Timer";
const DynamicIsland = () => {
  const [view, setView] = useState("idle");
  const [variantKey, setVariantKey] = useState("idle");
  const activeStateWrapperRef = (el) => {
    if (!el) return;
  };
  const changeView = (newView) => {
    if (newView === view) return;
    setVariantKey(`${view}-${newView}`);
    setView(newView);
  };
  const content = useMemo(() => {
    switch (view) {
      case "ring":
        return <Ring />;
      case "timer":
        return <Timer />;
      case "idle":
        return <div className="h-7" />;
    }
  }, [view]);
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <motion.div layout className="flex h-[160px] justify-center">
        <motion.div
          layout
          transition={{
            type: "spring",
            bounce: BOUNCE_VARIANTS[variantKey] ?? 0.2,
          }}
          className="h-fit min-w-[100px] overflow-hidden bg-black"
          style={{ borderRadius: "36px" }}
        >
          <motion.div
            ref={activeStateWrapperRef}
            transition={{
              type: "spring",
              bounce: ANIMATION_VARIANTS[variantKey],
            }}
            initial={{
              scale: 0.9,
              opacity: 0,
              filter: "blur(5px)",
              originX: 0.5,
              originY: 0.5,
            }}
            animate={{
              scale: 1,
              opacity: 1,
              filter: "blur(0px)",
              originX: 0.5,
              originY: 0.5,
              transition: {
                delay: 0.05,
              },
            }}
            key={view}
          >
            {content}
          </motion.div>
        </motion.div>
        <div className="pointer-events-none absolute top-0 left-1/2 flex h-[200px] w-[300px] -translate-x-1/2 items-start justify-center">
          <AnimatePresence
            mode="popLayout"
            custom={ANIMATION_VARIANTS[variantKey]}
          >
            <motion.div
              initial={{ opacity: 0 }}
              exit="exit"
              variants={variants}
              key={view}
            >
              {content}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>

      <div className="flex justify-center gap-4">
        <button
          type="button"
          className="h-10 w-32 rounded-full bg-white px-2.5 py-1.5 text-sm font-medium text-gray-900 shadow-sm ring-1 ring-gray-300 ring-inset hover:bg-gray-50"
          onClick={() => changeView("idle")}
        >
          Idle
        </button>
        <button
          type="button"
          className="h-10 w-32 rounded-full bg-white px-2.5 py-1.5 text-sm font-medium text-gray-900 shadow-sm ring-1 ring-gray-300 ring-inset hover:bg-gray-50"
          onClick={() => changeView("ring")}
        >
          Ring
        </button>
        <button
          type="button"
          className="h-10 w-32 rounded-full bg-white px-2.5 py-1.5 text-sm font-medium text-gray-900 shadow-sm ring-1 ring-gray-300 ring-inset hover:bg-gray-50"
          onClick={() => changeView("timer")}
        >
          Timer
        </button>
      </div>
    </div>
  );
};
const variants = {
  exit: (customParams) => {
    return {
      opacity: 0,
      scale: 0.9,
      filter: "blur(4px)",
      transition: {
        type: "spring",
        bounce: customParams?.bounce ?? 0.3,
      },
    };
  },
};

const ANIMATION_VARIANTS = {
  "ring-idle": {
    scale: 0.9,
    scaleX: 0.9,
    bounce: 0.5,
  },
  "timer-ring": {
    scale: 0.7,
    y: -7.5,
    bounce: 0.35,
  },
  "ring-timer": {
    scale: 1.2,
    y: 7.5,
    bounce: 0.35,
  },
  "timer-idle": {
    scale: 0.7,
    y: -7.5,
    bounce: 0.3,
  },
};
const BOUNCE_VARIANTS = {
  idle: 0.5,
  "ring-idle": 0.5,
  "timer-ring": 0.35,
  "ring-timer": 0.35,
  "timer-idle": 0.3,
  "idle-timer": 0.3,
  "idle-ring": 0.5,
};

export default DynamicIsland;
