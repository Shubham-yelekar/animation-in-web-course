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

type Card = {
  id: number;
  title: string;
  desc: string;
  long_description: string;
  img: string;
};

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
  const [activeCard, setActiveCard] = useState<Card | null>(null);
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
            {/* <p className="text-muted-foreground absolute bottom-2 z-30 w-full text-center text-xs">
              Press 'Esc' Key to close the card
            </p> */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 z-10 h-full w-full bg-black/20"
            />
            <div className="absolute inset-0 z-20 grid items-center justify-center overflow-hidden">
              <motion.div
                ref={ref}
                layoutId={`card-${activeCard.title}`}
                className="fit-content bg-card flex w-96 cursor-pointer flex-col justify-between gap-4 rounded-xl p-3 shadow-2xl"
              >
                <div className="flex items-center gap-4 text-sm">
                  <motion.img
                    src={activeCard.img}
                    alt=""
                    className="h-10 w-10 rounded-lg object-cover"
                    layoutId={`img-${activeCard.title}`}
                    style={{ borderRadius: 12 }}
                  />
                  <div className="flex flex-1 items-center justify-between">
                    <div className="flex-1">
                      <motion.h2
                        layoutId={`title-${activeCard.title}`}
                        className="game-title"
                      >
                        {activeCard.title}
                      </motion.h2>
                      <motion.p
                        layoutId={`desc-${activeCard.title}`}
                        className="text-muted-foreground"
                      >
                        {activeCard.desc}
                      </motion.p>
                    </div>
                    <motion.button
                      layoutId={`btn-${activeCard.title}`}
                      className="rounded-2xl bg-blue-100 px-2 py-0.5 text-xs font-semibold text-blue-500 dark:bg-neutral-800"
                    >
                      Get
                    </motion.button>
                  </div>
                </div>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="text-muted-foreground text-xs"
                >
                  {activeCard.long_description}
                </motion.p>
              </motion.div>
            </div>
          </>
        ) : null}
      </AnimatePresence>
      <ul className="mx-auto flex h-full max-w-72 flex-col justify-center gap-2">
        {CATS.map((cat) => (
          <motion.li
            key={cat.id}
            onClick={() => setActiveCard(cat)}
            layoutId={`card-${cat.title}`}
            className="ease-out-cubic flex cursor-pointer items-center gap-3 rounded-xl p-2 text-sm transition-colors duration-200 hover:dark:bg-neutral-900"
          >
            <motion.img
              src={cat.img}
              alt={cat.title}
              layoutId={`img-${cat.title}`}
              className="h-10 w-10 rounded-lg object-cover"
              style={{ borderRadius: 12 }}
            />
            <div className="flex-1">
              <motion.h2 layoutId={`title-${cat.title}`}>{cat.title}</motion.h2>
              <motion.p
                layoutId={`desc-${cat.title}`}
                className="text-muted-foreground"
              >
                {cat.desc}
              </motion.p>
            </div>
            <motion.div
              layoutId={`btn-${cat.title}`}
              className="rounded-2xl bg-blue-100 px-2 py-0.5 text-xs font-semibold text-blue-500 dark:bg-neutral-800"
            >
              View
            </motion.div>
          </motion.li>
        ))}
      </ul>
    </>
  );
}

export default SharedCardLayout;
