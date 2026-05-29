"use client";

import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, spring } from "motion/react";

export function Ring() {
  const [isSilent, setIsSilent] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => {
      setIsSilent((s) => !s);
    }, 2000);

    return () => clearTimeout(id);
  }, [isSilent]);

  return (
    <motion.div
      className="relative flex h-7 items-center justify-between px-2.5"
      animate={{ width: isSilent ? 148 : 128 }}
      transition={{ type: "spring", bounce: 0.5 }}
    >
      <AnimatePresence>
        {" "}
        {isSilent ? (
          <motion.div
            initial={{ opacity: 0, width: 0, filter: "blur(4px)" }}
            animate={{ opacity: 1, width: 40, filter: "blur(0px)" }}
            exit={{ opacity: 0, width: 0, filter: "blur(4px)" }}
            transition={{ type: "spring", bounce: 0.35 }}
            className="absolute left-[5px] h-[18px] w-10 rounded-full bg-[#FD4F30]"
          />
        ) : null}
      </AnimatePresence>
      <motion.div
        className="relative h-[12.75px] w-[11.25px]"
        animate={{
          rotate: isSilent
            ? [0, -15, 5, -2, 0]
            : [0, 20, -15, 12.5, -10, 10, -7.5, -5, 5, 0],
          x: isSilent ? 9 : 0,
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="13"
          viewBox="0 0 12 13"
          fill="none"
        >
          <g clip-path="url(#clip0_331_414)">
            <motion.path
              d="M5.52539 12.334C6.52148 12.334 7.24805 11.6075 7.32422 10.7871H3.73242C3.80859 11.6075 4.53516 12.334 5.52539 12.334Z"
              fill="green"
                      animate={{
          rotate: isSilent
            ? [0, 15, -5, 2, 0]
            : [0,15, -15,0],
        }}
            />
            <path
              d="M0.884768 9.98438H10.1719C10.7227 9.98438 11.0567 9.70313 11.0567 9.2754C11.0567 8.68943 10.459 8.1621 9.95505 7.64062C9.56835 7.23633 9.4629 6.40429 9.41603 5.73046C9.375 3.48046 8.77732 1.93359 7.21875 1.37109C6.99609 0.603516 6.39258 0 5.52539 0C4.66406 0 4.05469 0.603516 3.83789 1.37109C2.27929 1.93359 1.68164 3.48046 1.64062 5.73046C1.59375 6.40429 1.48829 7.23633 1.10156 7.64062C0.591797 8.1621 0 8.68943 0 9.2754C0 9.70313 0.328125 9.98438 0.884768 9.98438Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_331_414">
              <rect width="11.25" height="12.75" fill="white" />
            </clipPath>
          </defs>
        </svg>
        {isSilent ? (
          <div className="absolute inset-0 h-5 translate-x-[5px] -translate-y-[5px] rotate-[-40deg]">
            <motion.div
              animate={{ height: isSilent ? 16 : 0 }}
              transition={{
                ease: "easeInOut",
                duration: isSilent ? 0.125 : 0.05,
                delay: isSilent ? 0.15 : 0,
              }}
              className="w-fit rounded-full"
            >
              <div className="flex h-full w-[3px] items-center justify-center rounded-full bg-[#FD4F30]">
                <div className="h-full w-[0.75px] rounded-full bg-white" />
              </div>
            </motion.div>
          </div>
        ) : null}
      </motion.div>
      <div className="ml-auto flex items-center">
        <AnimatePresence mode="popLayout" initial={false}>
          {isSilent ? (
            <motion.span
              key="silent"
              initial={{ opacity: 0, scale: 0.25, filter: "blur(4px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.25, filter: "blur(4px)" }}
              className="text-xs font-medium text-[#FD4F30]"
            >
              Silent
            </motion.span>
          ) : (
            <motion.span
              key="ring"
              initial={{ opacity: 0, scale: 0.25, filter: "blur(4px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.25, filter: "blur(4px)" }}
              className="text-xs font-medium text-white"
            >
              Ring
            </motion.span>
          )}{" "}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
