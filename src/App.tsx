import "./App.css";
import ArrowDown from "./components/arrow-down/ArrowDown";
import CardHover from "./components/card-hover/CardHover";
import CardStacking from "./components/card-stacking/CardStacking";

import Container from "./components/ui/Container";
import Footer from "./components/ui/Footer";
import Header from "./components/ui/Header";
import Saperator from "./components/ui/Saperator";
import { ThemeProvider } from "./stores/ThemeProvider";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Container>
          <Header />
          <Saperator />
          <CardStacking />
          <CardHover />
          <ArrowDown />
          <Footer />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
