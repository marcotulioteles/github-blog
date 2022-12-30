import { ThemeProvider } from "styled-components";
import { CoverTop } from "./components/CoverTop";
import { Home } from "./pages/Home";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CoverTop />
      <Home />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
