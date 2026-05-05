import { useEffect, useRef, useState } from "react";
import ComponentBlock from "../ui/ComponentBlock";
import { useOnClickOutside } from "usehooks-ts";
import { motion, AnimatePresence } from "motion/react";

const GameCardComponent = () => {
  return (
    <section>
      <div className="px-2 py-4">
        <h4 className="text-md font-semibold">Game Card</h4>

        <p className="text-sm text-neutral-400 dark:text-neutral-500">
          Playstore like game card animation.
        </p>
      </div>
      <ComponentBlock>
        <div className="mx-auto flex h-full">
          <CardWrapper />
        </div>
      </ComponentBlock>
    </section>
  );
};

const CardWrapper = () => {
  const [activeCard, setActiveCard] = useState(null);
  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActiveCard(null);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div className="relative mx-auto flex h-full w-64 flex-col items-center justify-center">
      {/* <AnimatePresence> */}
      {Games.map((card, index) => (
        <GameCard key={index} card={card} setActiveCard={setActiveCard} />
      ))}
      {/* </AnimatePresence> */}
      <AnimatePresence mode="popLayout">
        {activeCard && (
          <ActiveCard activeCard={activeCard} setActiveCard={setActiveCard} />
        )}
      </AnimatePresence>
    </div>
  );
};

const GameCard = ({ card, setActiveCard }) => {
  return (
    <motion.div
      onClick={() => setActiveCard(card)}
      layoutId={`Card-${card.title}`}
      className="relative cursor-pointer overflow-hidden"
      style={{ borderRadius: 20 }}
    >
      <div className="ease-out-cubic mx-auto h-50 w-42 transform transition-transform duration-150 active:scale-[0.97]">
        <motion.div
          layoutId={`Card-header-${card.title}`}
          className="absolute right-0 bottom-0 left-0 z-10 h-fit w-full bg-black/40 p-2 text-sm backdrop-blur-sm"
        >
          <motion.h3
            layoutId={`Card-title-${card.title}`}
            className="font-semibold text-neutral-50"
          >
            {card.title}
          </motion.h3>
          <motion.p
            layoutId={`Card-dev-${card.title}`}
            className="text-xs text-neutral-400"
          >
            {card.developer}
          </motion.p>
        </motion.div>
        <motion.img
          src={card.image}
          alt=""
          layoutId={`Card-img-${card.title}`}
          className="absolute top-0 left-0 z-0 h-full w-full object-cover"
          style={{ borderRadius: 20 }}
        />
      </div>
    </motion.div>
  );
};

const ActiveCard = ({ activeCard, setActiveCard }) => {
  const ref = useRef(null);
  useOnClickOutside(ref, () => setActiveCard(null));
  return (
    <motion.div
      ref={ref}
      layoutId={`Card-${activeCard.title}`}
      className="absolute inset-0 top-0 z-10 flex h-full w-full flex-col justify-between overflow-hidden bg-neutral-900"
      style={{ borderRadius: 0 }}
    >
      <div className="relative w-full flex-4">
        <motion.div
          layoutId={`Card-header-${activeCard.title}`}
          className="absolute right-0 bottom-0 left-0 z-10 h-fit w-full bg-black/40 p-2 text-sm backdrop-blur-sm"
        >
          <motion.h3
            layoutId={`Card-title-${activeCard.title}`}
            className="font-semibold text-neutral-50"
          >
            {activeCard.title}
          </motion.h3>
          <motion.p
            layoutId={`Card-dev-${activeCard.title}`}
            className="text-xs text-neutral-400"
          >
            {activeCard.developer}
          </motion.p>
        </motion.div>
        <motion.img
          src={activeCard.image}
          alt=""
          layoutId={`Card-img-${activeCard.title}`}
          className="absolute top-0 left-0 z-0 h-full w-full object-cover"
          style={{ borderRadius: 0 }}
        />
        <button
          onClick={() => setActiveCard(null)}
          className="absolute top-0 right-0 z-20 m-2 cursor-pointer rounded-full bg-black/50 px-2 py-2 text-xs font-semibold text-white shadow backdrop-blur-xs hover:bg-black"
        >
          Close
        </button>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex-1 p-2"
        transition={{ duration: 0.5 }}
      >
        <p className="text-sm text-neutral-400">{activeCard.description}</p>
      </motion.div>
    </motion.div>
  );
};

export default GameCardComponent;

const Games = [
  {
    title: "Hollow Knight",
    image:
      "https://interfaceingame.com/wp-content/uploads/hollow-knight/hollow-knight-cover-375x500.jpg",
    developer: "Team Cherry",
    description:
      "Explore twisting caverns, battle tainted creatures and befriend bizarre bugs, all in a classic, hand-drawn 2D style.",
  },
];
