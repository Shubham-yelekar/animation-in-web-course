import { useState, useEffect } from "react";
import ComponentBlock from "../ui/ComponentBlock";
import cn from "../../util/cn";
const HoldDelete = () => {
  return (
    <section>
      <div className="px-2 py-4">
        <h4 className="text-md font-semibold">Hold to Delete</h4>

        <p className="text-sm text-neutral-400 dark:text-neutral-500"></p>
      </div>
      <ComponentBlock>
        <div className="relative flex h-full w-full flex-col items-center justify-center gap-4 perspective-near transform-3d">
          <ClipPathButton />
        </div>
      </ComponentBlock>
    </section>
  );
};

function ClipPathButton() {
  return (
    <button className="group ease-out-quart my-auto grid cursor-pointer text-sm text-neutral-50 transition-transform duration-150 active:scale-[0.97]">
      <div className="flex h-full w-full items-center justify-center gap-3 rounded-full bg-red-400 px-5 py-3 text-neutral-50 [grid-area:1/1]">
        <svg height="16" strokeLinejoin="round" viewBox="0 0 16 16" width="16">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.75 2.75C6.75 2.05964 7.30964 1.5 8 1.5C8.69036 1.5 9.25 2.05964 9.25 2.75V3H6.75V2.75ZM5.25 3V2.75C5.25 1.23122 6.48122 0 8 0C9.51878 0 10.75 1.23122 10.75 2.75V3H12.9201H14.25H15V4.5H14.25H13.8846L13.1776 13.6917C13.0774 14.9942 11.9913 16 10.6849 16H5.31508C4.00874 16 2.92263 14.9942 2.82244 13.6917L2.11538 4.5H1.75H1V3H1.75H3.07988H5.25ZM4.31802 13.5767L3.61982 4.5H12.3802L11.682 13.5767C11.6419 14.0977 11.2075 14.5 10.6849 14.5H5.31508C4.79254 14.5 4.3581 14.0977 4.31802 13.5767Z"
            fill="currentColor"
          />
        </svg>
        Hold to Delete
      </div>
      <div className="ease-out-quart flex w-full items-center justify-center gap-3 rounded-full bg-red-600 px-5 py-3 transition-all duration-200 [clip-path:inset(0px_100%_0px_0px)] [grid-area:1/1] group-active:duration-[1.5s] group-active:ease-linear group-active:[clip-path:inset(0px_0px_0px_0px)]">
        <svg height="16" strokeLinejoin="round" viewBox="0 0 16 16" width="16">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.75 2.75C6.75 2.05964 7.30964 1.5 8 1.5C8.69036 1.5 9.25 2.05964 9.25 2.75V3H6.75V2.75ZM5.25 3V2.75C5.25 1.23122 6.48122 0 8 0C9.51878 0 10.75 1.23122 10.75 2.75V3H12.9201H14.25H15V4.5H14.25H13.8846L13.1776 13.6917C13.0774 14.9942 11.9913 16 10.6849 16H5.31508C4.00874 16 2.92263 14.9942 2.82244 13.6917L2.11538 4.5H1.75H1V3H1.75H3.07988H5.25ZM4.31802 13.5767L3.61982 4.5H12.3802L11.682 13.5767C11.6419 14.0977 11.2075 14.5 10.6849 14.5H5.31508C4.79254 14.5 4.3581 14.0977 4.31802 13.5767Z"
            fill="currentColor"
          />
        </svg>
        Hold to Delete
      </div>
    </button>
  );
}
export default HoldDelete;
