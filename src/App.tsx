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
          {/* --- */}

          <CardStacking />
          <CardHover />
          <ArrowDown />
          <Toast />
          <TextAnimationComponent />
          <OrbitingComponent />
          <CoinComponent />
          {/* --- */}
          <Separator />
          <Footer />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
