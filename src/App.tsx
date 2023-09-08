import { BrowserRouter } from "react-router-dom";
import { Header } from "./components";
import { GlobalStyles, customTheme } from "./styles";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={customTheme}>
          <GlobalStyles />
          <Header />
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
