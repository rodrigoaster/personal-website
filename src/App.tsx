import { Home } from "./pages/Home";
import { Heading } from "./components/Heading";
import { GlobalStyles } from "./styles/globalStyles";

import { ThemeProvider } from "styled-components";
import light from "./styles/themes/light";

export function App() {
  return (
    <ThemeProvider theme={light}>
      <Heading />
      <Home />
      <GlobalStyles />
    </ThemeProvider>
  )
}
