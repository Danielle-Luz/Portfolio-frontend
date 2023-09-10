import { BrowserRouter } from "react-router-dom";
import { Header } from "./components";
import { GlobalStyles, StyledContainer, customTheme } from "./styles";
import { ThemeProvider } from "styled-components";
import { RoutesContainer } from "./routes";
import { MantineProvider } from "@mantine/core";
import { ProjectsContext, ProjectsProvider } from "./providers";
import { useContext } from "react";
import { Loader } from "@mantine/core";
import { LoadingIcon } from "./components/LoadingIcon";

const App = () => {
  const { isLoading } = useContext(ProjectsContext);

  return (
    <>
      <BrowserRouter>
        <MantineProvider>
          <ThemeProvider theme={customTheme}>
            <ProjectsProvider>
              <GlobalStyles />
              {isLoading ? (
                <LoadingIcon />
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
