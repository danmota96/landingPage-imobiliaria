import Navbar from "./components/Navbar";
import "./App.css";
import { ThemeProvider } from "styled-components";
import theme from "./assets/styles/theme";
import Copy from "components/Container";
import EstateList from "components/EstateList";

function App() {
  return (
    <>
      <Navbar />
      <Copy/>
      <EstateList/>
    </>
  );
}

export default App;
