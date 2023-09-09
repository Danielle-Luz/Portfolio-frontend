import { BrowserRouter } from "react-router-dom";
import { Header } from "./components";
import { GlobalStyles, StyledContainer, customTheme } from "./styles";
import { ThemeProvider } from "styled-components";
import { RoutesContainer } from "./routes";
import { MantineProvider } from "@mantine/core";

function App() {
  return (
    <>
      <BrowserRouter>
        <MantineProvider>
          <ThemeProvider theme={customTheme}>
            <GlobalStyles />
            <StyledContainer>
              <Header />
              <RoutesContainer />
            </StyledContainer>
          </ThemeProvider>
        </MantineProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
