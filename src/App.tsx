import { BrowserRouter } from "react-router-dom";
import { Header } from "./components";
import { GlobalStyles } from "./styles";

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <Header />
      </BrowserRouter>
    </>
  );
}

export default App;
