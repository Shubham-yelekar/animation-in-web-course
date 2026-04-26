import "./App.css";
import ModuleOne from "./components/module-one/ModuleOne";
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
          <ModuleOne />
          <Footer />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
