import Heading from "../ui/Heading";
import SectionBlock from "../ui/SectionBlock";
import FamilyDrawer from "./FamilyDrawer";

const ModuleOne = () => {
  return (
    <section>
      <Heading module="One" title="Animation theory" />
      <SectionBlock>
        <FamilyDrawer />
      </SectionBlock>
    </section>
  );
};

export default ModuleOne;
