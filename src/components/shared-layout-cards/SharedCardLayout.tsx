import { useEffect, useRef, useState } from "react";
import ComponentBlock from "../ui/ComponentBlock";
import { useOnClickOutside } from "usehooks-ts";
import { motion, AnimatePresence } from "motion/react";
const CATS = [
  {
    id: 1,
    title: "Marnie",
    desc: "Siamese",
    long_description:
      "Marnie is an 8 year-old cat rescued from the streets. She has a unique look with one eye and a permanently tilted head that makes her impossible not to love.",
    img: "https://cdn.pixabay.com/photo/2018/03/27/22/07/cat-portrait-3267592_960_720.jpg",
  },
  {
    id: 2,
    title: "Luna",
    desc: "British Shorthair",
    long_description:
      "Luna is a 3 year-old silver tabby with pale green eyes. She spends her days chasing dust motes and her evenings curled up on the highest shelf she can reach.",
    img: "https://cdn.pixabay.com/photo/2024/01/29/20/40/cat-8540772_960_720.jpg",
  },
  {
    id: 3,
    title: "Oliver",
    desc: "American Shorthair",
    long_description:
      "Oliver is a 5 year-old orange tabby who thinks every cardboard box in the house belongs to him. He greets every visitor at the door and demands chin scratches immediately.",
    img: "https://cdn.pixabay.com/photo/2017/03/14/14/49/cat-2143332_960_720.jpg",
  },
  {
    id: 4,
    title: "Cleo",
    desc: "Ragdoll",
    long_description:
      "Cleo is a 6 year-old jet-black cat with golden eyes. Graceful and independent, she tolerates her human servants but makes clear that all decisions in the home are ultimately hers.",
    img: "https://cdn.pixabay.com/photo/2025/08/12/08/49/cat-9769723__340.jpg",
  },
];

const SharedCardLayout = () => {
  return (
    <section>
      <div className="px-2 py-4">
        <h4 className="text-md font-semibold">Shared Card Layout</h4>
        <p className="text-sm text-neutral-400 dark:text-neutral-500">
          Using the shared layout in motion
        </p>
      </div>
      <ComponentBlock>
        <div className="relative h-full w-full">
          <CardList />
        </div>
      </ComponentBlock>
    </section>
  );
};

function CardList() {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const ref = useRef(null);
  useOnClickOutside(ref, () => setActiveCard(null));
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setActiveCard(null);
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return (
    <>
      <AnimatePresence>
        {activeCard ? (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
              className="bg-black-500 bg-opacity-50 pointer-events-none absolute inset-0 z-10 h-full w-full backdrop-blur-sm"
            />
            <p className="text-muted-foreground absolute bottom-2 z-30 w-full text-center text-xs">
              Press 'Esc' Key to close the card
            </p>
            <motion.div
              ref={ref}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 z-20 grid items-center justify-center"
            >
              <div className="fit-content bg-card flex w-96 cursor-pointer flex-col justify-between gap-4 rounded-xl p-3 shadow-2xl">
                <div className="flex items-center gap-4 text-sm">
                  <img
                    src={CATS[activeCard - 1].img}
                    alt=""
                    className="h-10 w-10 rounded-lg object-cover"
                  />
                  <div className="flex flex-1 items-center justify-between">
                    <div className="flex-1">
                      <h2 className="game-title">
                        {CATS[activeCard - 1].title}
                      </h2>
                      <p className="text-muted-foreground">
                        {CATS[activeCard - 1].desc}
                      </p>
                    </div>
                    <button className="rounded-2xl bg-blue-100 px-2 py-0.5 text-xs font-semibold text-blue-500 dark:bg-neutral-800">
                      Get
                    </button>
                  </div>
                </div>
                <p className="text-muted-foreground text-xs">
                  {CATS[activeCard - 1].long_description}
                </p>
              </div>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
      <ul className="mx-auto flex h-full max-w-72 flex-col justify-center gap-2">
        {CATS.map((cat) => (
          <li
            key={cat.id}
            onClick={() => setActiveCard(cat)}
            className="ease-out-cubic flex cursor-pointer items-center gap-3 rounded-xl p-2 text-sm transition-colors duration-200 hover:dark:bg-neutral-900"
          >
            <img
              src={cat.img}
              alt={cat.title}
              className="h-10 w-10 rounded-lg object-cover"
            />
            <div className="flex-1">
              <h2>{cat.title}</h2>
              <p className="text-muted-foreground">{cat.desc}</p>
            </div>
            <div className="rounded-2xl bg-blue-100 px-2 py-0.5 text-xs font-semibold text-blue-500 dark:bg-neutral-800">
              View
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default SharedCardLayout;
