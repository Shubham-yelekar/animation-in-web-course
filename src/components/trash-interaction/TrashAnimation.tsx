import { AnimatePresence, MotionConfig, motion } from "motion/react";
import { useEffect, useState } from "react";
import { TrashBack, TrashFront } from "./TrashAssets";
import clsx from "clsx";

const IMAGES = ["japan", "jungle", "new-york", "desert"];

export function TrashAnimation() {
  const [imagesToRemove, setImagesToRemove] = useState<string[]>([]);
  const [readyToRemove, setReadyToRemove] = useState<boolean>(false);
  const [removed, setRemoved] = useState(false);
  const [resetting, setResetting] = useState(false);

  const imagesToShow = readyToRemove
    ? IMAGES.filter((img) => !imagesToRemove.includes(img))
    : IMAGES;

  useEffect(() => {
    if (removed) {
      setTimeout(() => {
        // step 1: exit the trash view, hold grid back
        setResetting(true);
        setReadyToRemove(false);
        setRemoved(false);

        setTimeout(() => {
          // step 2: after exit animation, let grid fade in
          setImagesToRemove([]);
          setResetting(false);
        }, 800);
      }, 1200);
    }
  }, [removed]);

  return (
    <MotionConfig transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}>
      <motion.div className="relative flex h-full flex-col items-center justify-center">
        <ul className="grid grid-cols-2 gap-4">
          <AnimatePresence>
            {!readyToRemove &&
              !resetting &&
              imagesToShow.map((image, index) => {
                const isSelected = imagesToRemove.includes(image);

                return (
                  <motion.li
                    key={image}
                    initial={{ opacity: 0, filter: "blur(4px)", scale: 0.9 }}
                    animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    exit={
                      !isSelected
                        ? {
                            opacity: 0,
                            filter: "blur(4px)",
                            transition: { duration: 0.05 },
                          }
                        : {}
                    }
                    className="relative flex h-25 w-25"
                  >
                    <motion.div
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.05 }}
                      className={clsx(
                        "pointer-events-none absolute top-2 right-2 flex h-4 w-4 items-center justify-center rounded-full border border-white/60",
                      )}
                    >
                      {isSelected ? (
                        <div>
                          <div className="absolute inset-0.5 rounded-full bg-white" />
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="relative h-5 w-5 shrink-0 rounded-full text-black"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              className="bg-white"
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM15.5805 9.97493C15.8428 9.65434 15.7955 9.18183 15.4749 8.91953C15.1543 8.65724 14.6818 8.70449 14.4195 9.02507L10.4443 13.8837L9.03033 12.4697C8.73744 12.1768 8.26256 12.1768 7.96967 12.4697C7.67678 12.7626 7.67678 13.2374 7.96967 13.5303L9.96967 15.5303C10.1195 15.6802 10.3257 15.7596 10.5374 15.7491C10.749 15.7385 10.9463 15.6389 11.0805 15.4749L15.5805 9.97493Z"
                              fill="currentColor"
                            />
                          </svg>
                        </div>
                      ) : null}
                    </motion.div>
                    <button
                      aria-label="Remove book"
                      onClick={() => {
                        if (isSelected) {
                          setImagesToRemove((images) =>
                            images.filter((img) => img !== image),
                          );
                        } else {
                          setImagesToRemove((images) => [...images, image]);
                        }
                      }}
                    >
                      <motion.img
                        layoutId={`image-${image}`}
                        className="rounded-xl"
                        alt="A guy"
                        src={`https://animations.dev/how-i-use-framer-motion/why-framer-motion/${image}.webp`}
                        height={100}
                        width={100}
                      />
                    </button>
                  </motion.li>
                );
              })}
          </AnimatePresence>
        </ul>
        <AnimatePresence>
          {imagesToRemove.length > 0 && !readyToRemove && !resetting ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 10, filter: "blur(8px)" }}
              animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.9, y: 10 }}
              transition={{ duration: 0.3, type: "spring", bounce: 0.3 }}
              className="absolute bottom-4 flex gap-1 rounded-xl p-1 shadow-[0_0_0_1px_rgba(0,0,0,0.08),0px_8px_8px_-8px_rgba(0,0,0,0.16)] will-change-transform"
            >
              <div className="flex w-full justify-between gap-2">
                <button
                  onClick={() => setImagesToRemove([])}
                  className="flex w-12 cursor-pointer flex-col items-center gap-px rounded-lg bg-[#F9F9F8] pt-2 pb-1 text-[10px] font-medium text-[#8D8D86]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 flex-shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.8839 18.6339C10.3957 19.122 9.60427 19.122 9.11612 18.6339L3.36612 12.8839C3.1317 12.6495 3 12.3315 3 12C3 11.6685 3.13169 11.3506 3.36612 11.1161L9.11612 5.36612C9.60427 4.87796 10.3957 4.87796 10.8839 5.36612C11.372 5.85427 11.372 6.64573 10.8839 7.13388L7.26776 10.75H19.75C20.4404 10.75 21 11.3097 21 12C21 12.6904 20.4404 13.25 19.75 13.25H7.26777L10.8839 16.8661C11.372 17.3543 11.372 18.1457 10.8839 18.6339Z"
                      fill="currentColor"
                    />
                  </svg>
                  Back
                </button>
                <button
                  onClick={() => {
                    if (readyToRemove) {
                      setRemoved(true);
                    } else {
                      setReadyToRemove(true);
                    }
                  }}
                  className="flex w-12 cursor-pointer flex-col items-center gap-px rounded-lg bg-[#F9F9F8] pt-2 pb-1 text-[10px] font-medium text-[#8D8D86] hover:bg-[#FFF7F7] hover:text-[#E5484D]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-4 w-4 flex-shrink-0"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.58393 5C8.28068 3.24301 9.99487 2 12.0009 2C14.007 2 15.7212 3.24301 16.4179 5H21.25C21.6642 5 22 5.33579 22 5.75C22 6.16421 21.6642 6.5 21.25 6.5H19.9532L19.0588 20.3627C18.9994 21.2835 18.2352 22 17.3124 22H6.68756C5.76481 22 5.0006 21.2835 4.94119 20.3627L4.04683 6.5H2.75C2.33579 6.5 2 6.16421 2 5.75C2 5.33579 2.33579 5 2.75 5H7.58393ZM9.26161 5C9.83935 4.09775 10.8509 3.5 12.0009 3.5C13.151 3.5 14.1625 4.09775 14.7403 5H9.26161Z"
                      fill="currentColor"
                    />
                  </svg>
                  Trash
                </button>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
        <AnimatePresence>
          {readyToRemove ? (
            <motion.div
              initial={{ opacity: 0, filter: "blur(4px)", scale: 0.9 }}
              animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
              exit={{ opacity: 0, filter: "blur(4px)", scale: 0.9 }}
              className="absolute bottom-10 flex flex-col gap-2"
            >
              <button
                onClick={() => {
                  if (readyToRemove) {
                    setRemoved(true);
                  } else {
                    setReadyToRemove(true);
                  }
                }}
                className="flex h-8 w-48 items-center justify-center gap-2 rounded-full bg-red-500 text-center text-[13px] font-semibold text-[#FFFFFF]"
              >
                Trash
                <span className="rounded-full bg-neutral-100 px-2 text-red-400">
                  {imagesToRemove.length}
                </span>
                Collectibles
              </button>
            </motion.div>
          ) : null}
        </AnimatePresence>
        <AnimatePresence>
          {readyToRemove ? (
            <motion.div
              exit={{ opacity: 0, filter: "blur(4px)", scale: 0.9 }}
              className="absolute top-1/2 z-10 h-24 w-24 -translate-y-1/2"
            >
              <motion.div
                initial={{ opacity: 0, filter: "blur(4px)", scale: 1.2 }}
                animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                exit={{ opacity: 0, filter: "blur(4px)", scale: 1.2 }}
              >
                <TrashBack />
              </motion.div>

              <motion.div
                animate={{
                  y: removed ? 90 : 25,
                  scale: removed ? 0.7 : 1,
                  filter: removed ? "blur(10px)" : "blur(0px)",
                }}
                transition={
                  removed
                    ? { duration: 0.3, type: "spring", bounce: 0 }
                    : { delay: 0.13 }
                }
                className="absolute -top-5 flex w-full flex-col-reverse items-center"
              >
                {imagesToRemove.map((image, index) => (
                  <li key={image} className="flex h-1 items-center gap-2">
                    <motion.img
                      layoutId={`image-${image}`}
                      alt="A guy"
                      className="rounded"
                      src={`https://animations.dev/how-i-use-framer-motion/why-framer-motion/${image}.webp`}
                      height={65}
                      width={65}
                      style={{
                        rotate:
                          index % 2 === 0
                            ? 4 * (imagesToRemove.length - index + 1)
                            : -1 * (imagesToRemove.length - index + 1) * 4,
                      }}
                    />
                  </li>
                ))}
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0,
                  delay: 0.175,
                }}
                className="absolute bottom-0 left-1/2 h-full w-23.5 -translate-x-1/2"
              >
                <TrashFront />
              </motion.div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </motion.div>
    </MotionConfig>
  );
}
