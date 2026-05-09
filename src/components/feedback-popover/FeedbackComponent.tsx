import { useOnClickOutside } from "usehooks-ts";
import ComponentBlock from "../ui/ComponentBlock";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Dots from "../ui/Dots";

const FeedbackComponent = () => {
  return (
    <section>
      <div className="px-2 py-4">
        <h4 className="text-md font-semibold">Feedback button</h4>

        <p className="mt-px text-sm text-neutral-400 dark:text-neutral-500">
          Using AnimatePresence to animate between the button and the form.
        </p>
      </div>
      <ComponentBlock>
        <FeedbackButton />
      </ComponentBlock>
    </section>
  );
};

function FeedbackButton() {
  const [open, setOpen] = useState(false);
  const [formState, setFormState] = useState("idle");
  const [feedback, setFeedback] = useState("");
  const ref = useRef(null);
  useOnClickOutside(ref, () => setOpen(false));
  function submit() {
    setFormState("loading");
    setTimeout(() => {
      setFormState("success");
    }, 1500);

    setTimeout(() => {
      setOpen(false);
    }, 3300);
  }

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
      if (
        (event.ctrlKey || event.metaKey) &&
        event.key === "Enter" &&
        open &&
        formState === "idle"
      ) {
        submit();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, formState]);

  return (
    <div className="flex h-full w-full items-center justify-center">
      <motion.button
        layoutId="wrapper"
        style={{ borderRadius: 8 }}
        key="button"
        onClick={() => {
          setOpen(true);
          setFormState("idle");
          setFeedback("");
        }}
        className="relative mt-0! bg-white px-4 py-2 text-sm text-neutral-900 shadow-2xl transition-colors outline-none"
      >
        <motion.span layoutId="title" className="block">
          Feedback
        </motion.span>
      </motion.button>
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="wrapper"
            style={{ borderRadius: 12 }}
            ref={ref}
            className="absolute h-48 w-92 overflow-hidden rounded-xl bg-[#f5f6f7] p-1 shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_2px_2px_rgba(0,0,0,0.04)] outline-none"
          >
            <motion.span
              aria-hidden
              layoutId="title"
              data-feedback={feedback ? true : false}
              className="placeholder absolute top-4 left-4 text-sm text-neutral-900"
            >
              Feedback
            </motion.span>
            <AnimatePresence mode="popLayout">
              {formState === "success" ? (
                <motion.div
                  initial={{ opacity: 0, filter: "blur(10px)", y: "-100%" }}
                  animate={{ opacity: 1, filter: "blur(0px)", y: "0%" }}
                  exit={{ opacity: 0 }}
                  transition={{ type: "spring", bounce: 0, duration: 0.3 }}
                  className="flex h-full flex-col items-center justify-center text-center"
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    className="-mt-1"
                  >
                    <path
                      d="M27.6 16C27.6 17.5234 27.3 19.0318 26.717 20.4392C26.1341 21.8465 25.2796 23.1253 24.2025 24.2025C23.1253 25.2796 21.8465 26.1341 20.4392 26.717C19.0318 27.3 17.5234 27.6 16 27.6C14.4767 27.6 12.9683 27.3 11.5609 26.717C10.1535 26.1341 8.87475 25.2796 7.79759 24.2025C6.72043 23.1253 5.86598 21.8465 5.28302 20.4392C4.70007 19.0318 4.40002 17.5234 4.40002 16C4.40002 12.9235 5.62216 9.97301 7.79759 7.79759C9.97301 5.62216 12.9235 4.40002 16 4.40002C19.0765 4.40002 22.027 5.62216 24.2025 7.79759C26.3779 9.97301 27.6 12.9235 27.6 16Z"
                      fill="#2090FF"
                      fillOpacity="0.16"
                    />
                    <path
                      d="M12.1334 16.9667L15.0334 19.8667L19.8667 13.1M27.6 16C27.6 17.5234 27.3 19.0318 26.717 20.4392C26.1341 21.8465 25.2796 23.1253 24.2025 24.2025C23.1253 25.2796 21.8465 26.1341 20.4392 26.717C19.0318 27.3 17.5234 27.6 16 27.6C14.4767 27.6 12.9683 27.3 11.5609 26.717C10.1535 26.1341 8.87475 25.2796 7.79759 24.2025C6.72043 23.1253 5.86598 21.8465 5.28302 20.4392C4.70007 19.0318 4.40002 17.5234 4.40002 16C4.40002 12.9235 5.62216 9.97301 7.79759 7.79759C9.97301 5.62216 12.9235 4.40002 16 4.40002C19.0765 4.40002 22.027 5.62216 24.2025 7.79759C26.3779 9.97301 27.6 12.9235 27.6 16Z"
                      stroke="#2090FF"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <h3 className="mt-2 mb-1 text-sm font-medium text-[#21201c]">
                    Feedback received!
                  </h3>
                  <p className="text-sm text-[#63635d]">
                    Thanks for helping me improve Sonner.
                  </p>
                </motion.div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (!feedback) return;
                    submit();
                  }}
                  className="rounded-lg border border-[#e6e7e8] bg-white"
                >
                  <textarea
                    autoFocus
                    placeholder="Feedback"
                    onChange={(e) => setFeedback(e.target.value)}
                    className="h-32 w-full resize-none rounded-t-lg p-3 text-sm text-neutral-900 outline-none placeholder:opacity-0"
                    required
                  />
                  <div className="relative flex h-12 items-center px-2">
                    <svg
                      className="absolute inset-x-0 -top-px"
                      width="352"
                      height="2"
                      viewBox="0 0 352 2"
                      fill="none"
                    >
                      <path
                        d="M0 1H352"
                        stroke="#E6E7E8"
                        strokeDasharray="4 4"
                      />
                    </svg>

                    <div className="absolute top-0 left-0 translate-x-[-1.5px] -translate-y-1/2">
                      <svg width="6" height="12" viewBox="0 0 6 12" fill="none">
                        <path
                          d="M0 2C0.65 2 1.3 2.1 1.91 2.3C2.52 2.5 3.07 2.8 3.53 3.17C3.99 3.54 4.36 3.98 4.61 4.46C4.87 4.95 5 5.47 5 6C5 6.52 4.87 7.04 4.61 7.53C4.36 8.01 3.99 8.45 3.53 8.82C3.07 9.19 2.52 9.49 1.91 9.69C1.3 9.89 0.65 10 0 10V6V2Z"
                          fill="#F5F6F7"
                        />
                        <path
                          d="M1 12V10C2.06 10 3.07 9.57 3.82 8.82C4.57 8.07 5 7.06 5 6C5 4.93 4.57 3.92 3.82 3.17C3.07 2.42 2.06 2 1 2V0"
                          stroke="#E6E7E8"
                          strokeWidth="1"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>

                    <div className="absolute top-0 right-0 translate-x-[1.5px] -translate-y-1/2 rotate-180">
                      <svg width="6" height="12" viewBox="0 0 6 12" fill="none">
                        <path
                          d="M0 2C0.65 2 1.3 2.1 1.91 2.3C2.52 2.5 3.07 2.8 3.53 3.17C3.99 3.54 4.36 3.98 4.61 4.46C4.87 4.95 5 5.47 5 6C5 6.52 4.87 7.04 4.61 7.53C4.36 8.01 3.99 8.45 3.53 8.82C3.07 9.19 2.52 9.49 1.91 9.69C1.3 9.89 0.65 10 0 10V6V2Z"
                          fill="#F5F6F7"
                        />
                        <path
                          d="M1 12V10C2.06 10 3.07 9.57 3.82 8.82C4.57 8.07 5 7.06 5 6C5 4.93 4.57 3.92 3.82 3.17C3.07 2.42 2.06 2 1 2V0"
                          stroke="#E6E7E8"
                          strokeWidth="1"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>

                    <button
                      type="submit"
                      className="relative ml-auto flex h-8 w-32 cursor-pointer items-center justify-center overflow-hidden rounded-md bg-gradient-to-b from-[#1994ff] to-[#157cff] text-[12px] font-semibold text-white shadow-[inset_0_0_1px_1px_rgba(255,255,255,0.08),0_1px_1.5px_0_rgba(0,0,0,0.32),0_0_0_0.5px_#1a94ff]"
                    >
                      <AnimatePresence mode="popLayout" initial={false}>
                        <motion.span
                          key={formState}
                          initial={{ opacity: 0, y: -25 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 25 }}
                          transition={{
                            type: "spring",
                            duration: 0.3,
                            bounce: 0,
                          }}
                          className="flex w-full items-center justify-center drop-shadow-[0_1px_1.5px_rgba(0,0,0,0.16)]"
                        >
                          {formState === "loading" ? <Dots /> : "Send feedback"}
                        </motion.span>
                      </AnimatePresence>
                    </button>
                  </div>
                </form>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default FeedbackComponent;
