import "./App.css";
import ArrowDown from "./components/arrow-down/ArrowDown";
import CoinComponent from "./components/coin/CoinComponent";
import CardHover from "./components/card-hover/CardHover";
import CardStacking from "./components/card-stacking/CardStacking";
import OrbitingComponent from "./components/orbiting/OrbitingComponent";
import TextAnimationComponent from "./components/text-animation/TextAnimationComponent";
import Toast from "./components/toast-component/ToastComponent";

import Container from "./components/ui/Container";
import Footer from "./components/ui/Footer";
import Header from "./components/ui/Header";
import Separator from "./components/ui/Saparator";
import { ThemeProvider } from "./stores/ThemeProvider";
import HoldDelete from "./components/hold-to-delete/HoldDelete";
import Heading from "./components/ui/Heading";
import SmoothButtonComponent from "./components/Smooth-button/SmoothButtonComponent";
import SharedCardLayout from "./components/shared-layout-cards/SharedCardLayout";
import GameCardComponent from "./components/game-card/GameCardComponent";
import FeedbackComponent from "./components/feedback-popover/FeedbackComponent";
import MultiStepComponent from "./components/multi-step-component/MultiStepComponent";

import TrashInteraction from "./components/trash-interaction/TrashInteraction";
import GraphComponent from "./components/graph/GraphComponent";
import ModuleOne from "./components/module-one/ModuleOne";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Container>
          <Header />
          <Separator />
          <Heading module="02" title="Css Animation" />
          {/* --- */}

          <CardStacking />
          <CardHover />
          <ArrowDown />
          <Toast />
          <TextAnimationComponent />
          <OrbitingComponent />
          <CoinComponent />
          <HoldDelete />
          {/* --- */}
          <Separator />
          <Heading module="03" title="Animation with Motion" />
          <Separator />
          <SmoothButtonComponent />
          <SharedCardLayout />
          <GameCardComponent />
          <FeedbackComponent />
          <MultiStepComponent />
          <TrashInteraction />
          <GraphComponent />
          <Separator />
          <ModuleOne />
          <Separator />
          <Footer />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
