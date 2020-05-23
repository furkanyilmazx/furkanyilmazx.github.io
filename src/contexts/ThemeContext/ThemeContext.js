import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import { darkTheme, lightTheme } from "@furkanyilmazx/theme";
import { LOCAL_STORAGE_KEYS } from "@furkanyilmazx/constants/enums";

export const ThemeReactContext = React.createContext();

function ThemeContext({ children }) {
  const isLightModeInit =
    localStorage.getItem(LOCAL_STORAGE_KEYS.THEME_KEY) === "light";
  const [theme, setTheme] = useState(isLightModeInit ? lightTheme : darkTheme);
  const [title, setTitle] = useState(
    isLightModeInit ? "lights.on" : "lights.off"
  );
  const [isDay, setDay] = useState(isLightModeInit);

  function toogleTheme() {
    setDay(!isDay);
    setTheme(!isDay ? lightTheme : darkTheme);
    setTitle(!isDay ? "lights.on" : "lights.off");
    localStorage.setItem(
      LOCAL_STORAGE_KEYS.THEME_KEY,
      !isDay ? "light" : "dark"
    );
  }

  return (
    <ThemeReactContext.Provider value={[toogleTheme, title]}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeReactContext.Provider>
  );
}

export default ThemeContext;
