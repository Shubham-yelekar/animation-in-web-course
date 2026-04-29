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
import ThemeSwitcher from "./components/ui/ThemeSwitcher";
import { ThemeProvider } from "./stores/ThemeProvider";
import HoldDelete from "./components/hold-to-delete/HoldDelete";
import Heading from "./components/ui/Heading";
import SmoothButtonComponent from "./components/Smooth-button/SmoothButtonComponent";
import SharedCardLayout from "./components/shared-layout-cards/SharedCardLayout";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Container>
          <div className="border-border bg-card sticky top-0 z-100 flex items-center justify-between border-b px-2 py-2">
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              Shubham Yelekar
            </p>
            <ThemeSwitcher />
          </div>
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
          <Footer />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
