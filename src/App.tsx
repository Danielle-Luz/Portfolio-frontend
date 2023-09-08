import { BrowserRouter } from "react-router-dom";
import { Header } from "./components";
import { GlobalStyles, customTheme } from "./styles";
import { ThemeProvider } from "styled-components";
import { RoutesContainer } from "./routes";

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={customTheme}>
          <GlobalStyles />
          <Header />
          <RoutesContainer />
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
