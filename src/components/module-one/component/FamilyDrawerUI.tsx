import { useState } from "react";
import { Drawer } from "vaul";
const FamilyDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex h-full w-full items-center justify-center">
      <button
        onClick={() => setIsOpen(true)}
        className="cursor-pointer rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-semibold text-neutral-700 transition-[color,transform] duration-300 hover:bg-neutral-50 active:scale-[0.97]"
      >
        Open Drawer
      </button>
      <Drawer.Root open={isOpen} onOpenChange={setIsOpen}>
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 z-10 bg-black/20" />
          <Drawer.Content className="fixed inset-x-4 bottom-4 z-10 mx-auto h-64 max-w-90 overflow-hidden rounded-[36px] bg-[#FEFFFE] outline-hidden md:mx-auto md:w-full"></Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </div>
  );
};

export default FamilyDrawer;
