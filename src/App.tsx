import { ThemeProvider } from "styled-components";
import { CoverTop } from "./components/CoverTop";
import { Home } from "./pages/Home";
import { PostPage } from "./pages/PostPage";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Home />
      {/* <PostPage /> */}
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
