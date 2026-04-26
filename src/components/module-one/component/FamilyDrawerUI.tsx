import React from "react";

const FamilyDrawer = () => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <button className="cursor-pointer rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-semibold text-neutral-700 transition-[color,transform] duration-300 hover:bg-neutral-50 active:scale-[0.97]">
        Open Drawer
      </button>
    </div>
  );
};

export default FamilyDrawer;
