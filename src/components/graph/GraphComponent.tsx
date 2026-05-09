import { useRef } from "react";
import ComponentBlock from "../ui/ComponentBlock";
import {
  motion,
  useSpring,
  useMotionValue,
  useMotionTemplate,
} from "motion/react";

const GraphComponent = () => {
  return (
    <section>
      <div className="px-2 py-4">
        <h4 className="text-md font-semibold">Graph Component</h4>

        <p className="text-sm text-neutral-400 dark:text-neutral-500">
          Using the motion values to change the clippath size.{" "}
        </p>
      </div>
      <ComponentBlock>
        <div className="mx-auto flex h-full">
          <Graph />
        </div>
      </ComponentBlock>
    </section>
  );
};

function Graph() {
  const clipPathValue = useMotionValue(0);
  const timeoutRef = useRef(null);
  const smoothClipPath = useSpring(clipPathValue, {
    stiffness: 150,
    damping: 20,
  });
  const clipPathTemplate = useMotionTemplate`inset( 0px ${smoothClipPath}% 0px 0px)`;
  function onPointerMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const distanceFromRight = Math.max(rect.right - e.clientX, 0);
    const percentageFromRight = Math.min(
      (distanceFromRight / rect.width) * 100,
      100,
    );
    clipPathValue.set(percentageFromRight);
  }
  return (
    <div
      className="relative flex h-full w-full items-center justify-center px-8"
      onPointerMove={onPointerMove}
      onPointerLeave={() => {
        timeoutRef.current = setTimeout(() => {
          smoothClipPath.set(0);
        }, 1000);
      }}
      onPointerEnter={() => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      }}
    >
      <motion.svg
        style={{
          clipPath: clipPathTemplate,
        }}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 644 188"
      >
        <path
          stroke="#0090FF"
          strokeWidth="2"
          d="M1 118.5s82.308-15.501 113.735-29 74.769-1.713 121.217-12c37.596-8.328 58.517-15.006 93.781-30.5 80.146-35.215 123.213-16 154.141-24.5S635.97.849 644 1.5"
        ></path>
        <path
          fill="url(#paint0_linear_540_31)"
          d="M113.912 89.012C82.437 102.511 1 118.01 1 118.01V188h643V1.023c-8.043-.65-129.399 12.499-160.375 20.998-30.976 8.498-74.11-10.714-154.38 24.496-35.319 15.493-56.272 22.17-93.927 30.497-46.52 10.286-89.93-1.5-121.406 11.998"
        ></path>
        <defs>
          <linearGradient
            id="paint0_linear_540_31"
            x1="322.5"
            x2="322.5"
            y1="1"
            y2="188"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#138EED" stopOpacity="0.4"></stop>
            <stop offset="1" stopColor="#058FFB" stopOpacity="0"></stop>
          </linearGradient>
        </defs>
      </motion.svg>
    </div>
  );
}

export default GraphComponent;
