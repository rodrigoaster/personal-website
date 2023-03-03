import { useCallback, useState } from "react";
import { Home } from "./pages/Home";
import { Heading } from "./components/Heading";
import { GlobalStyles } from "./styles/globalStyles";

import { ThemeProvider } from "styled-components";

import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

export function App() {
  const [theme, setTheme] = useState(light)

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === 'light' ? dark: light);
  }, [theme])

  return (
    <ThemeProvider theme={theme}>
      <Heading toggleTheme={toggleTheme} />
      <Home />
      <GlobalStyles />
    </ThemeProvider>
  )
}
