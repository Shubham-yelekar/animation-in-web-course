import { useState, useEffect } from "react";
import ComponentBlock from "../ui/ComponentBlock";
import cn from "../../util/cn";
const OrbitingComponent = () => {
  return (
    <section>
      <div className="px-2 py-4">
        <h4 className="text-md font-semibold">Orbiting Elements</h4>

        <p className="text-sm text-neutral-400 dark:text-neutral-500">
          Css animation with z-index and transform
        </p>
      </div>
      <ComponentBlock>
        <Orbit />
      </ComponentBlock>
    </section>
  );
};

function Orbit() {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center gap-4 perspective-near transform-3d">
      <div className="z-10 h-20 w-20 rounded-full bg-blue-600" />
      <div className="animate-orbiting absolute top-1/2 left-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-slate-300" />
    </div>
  );
}

export default OrbitingComponent;
