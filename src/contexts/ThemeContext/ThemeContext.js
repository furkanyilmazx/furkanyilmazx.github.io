import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import { darkTheme, lightTheme } from "@furkanyilmazx/theme";

export const ThemeReactContext = React.createContext();

function ThemeContext({ children }) {
  const [theme, setTheme] = useState(lightTheme);
  const [title, setTitle] = useState("lights.on");
  const [isDay, setDay] = useState(true);

  function toogleTheme() {
    setDay(!isDay);
    setTheme(!isDay ? lightTheme : darkTheme);
    setTitle(!isDay ? "lights.on" : "lights.off");
  }

  return (
    <ThemeReactContext.Provider value={[toogleTheme, title]}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeReactContext.Provider>
  );
}

export default ThemeContext;
