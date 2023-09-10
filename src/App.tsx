import { BrowserRouter } from "react-router-dom";
import { Header } from "./components";
import { GlobalStyles, StyledContainer, customTheme } from "./styles";
import { ThemeProvider } from "styled-components";
import { RoutesContainer } from "./routes";
import { MantineProvider } from "@mantine/core";
import { ProjectsContext, ProjectsProvider } from "./providers";
import { useContext } from "react";
import { WaitingPage } from "./pages/WaitingPage";

const App = () => {
  const { hasError, isLoading } = useContext(ProjectsContext);

  return (
    <>
      <BrowserRouter>
        <MantineProvider>
          <ThemeProvider theme={customTheme}>
            <ProjectsProvider>
              <GlobalStyles />
              {hasError || isLoading ? (
                <WaitingPage hasError isLoading />
              ) : (
                <>
                  <StyledContainer>
                    <Header />
                    <RoutesContainer />
                  </StyledContainer>
                </>
              )}
            </ProjectsProvider>
          </ThemeProvider>
        </MantineProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
