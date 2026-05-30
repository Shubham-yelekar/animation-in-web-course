import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { Ring } from "./Ring";
import { Timer } from "./timer";
const DynamicIsland = () => {
  const [view, setView] = useState("idle");

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
          className="h-fit min-w-[100px] overflow-hidden bg-black"
          style={{ borderRadius: "36px" }}
        >
          {content}
        </motion.div>
      </motion.div>
      <div className="flex justify-center gap-4">
        <button
          type="button"
          className="h-10 w-32 rounded-full bg-white px-2.5 py-1.5 text-sm font-medium text-gray-900 shadow-sm ring-1 ring-gray-300 ring-inset hover:bg-gray-50"
          onClick={() => setView("idle")}
        >
          Idle
        </button>
        <button
          type="button"
          className="h-10 w-32 rounded-full bg-white px-2.5 py-1.5 text-sm font-medium text-gray-900 shadow-sm ring-1 ring-gray-300 ring-inset hover:bg-gray-50"
          onClick={() => setView("ring")}
        >
          Ring
        </button>
        <button
          type="button"
          className="h-10 w-32 rounded-full bg-white px-2.5 py-1.5 text-sm font-medium text-gray-900 shadow-sm ring-1 ring-gray-300 ring-inset hover:bg-gray-50"
          onClick={() => setView("timer")}
        >
          Timer
        </button>
      </div>
    </div>
  );
};

export default DynamicIsland;
