import React from "react";
import ComponentBlock from "../ui/ComponentBlock";
import FamilyDrawerUI from "./component/FamilyDrawerUI";
const FamilyDrawer = () => {
  return (
    <div>
      <div className="px-2 py-4">
        <h4 className="text-md">Family Drawer</h4>

        <p className="text-sm text-neutral-400 dark:text-neutral-500">
          Family app drawer animation
        </p>
      </div>
      <ComponentBlock>
        <FamilyDrawerUI />
      </ComponentBlock>
    </div>
  );
};

export default FamilyDrawer;
