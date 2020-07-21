import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import { darkTheme, lightTheme } from "@furkanyilmazx/theme";
import { LOCAL_STORAGE_KEYS } from "@furkanyilmazx/constants/enums";
import {
  GA_CATEGORIES,
  GA_ACTIONS,
  GA_LABELS,
} from "@furkanyilmazx/constants/analytics";

import sendEvent from "@furkanyilmazx/helpers/analytics";

export const ThemeReactContext = React.createContext();

function ThemeContext({ children }) {
  const isLightModeInit =
    localStorage.getItem(LOCAL_STORAGE_KEYS.THEME_KEY) !== "dark";
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

    sendEvent(
      GA_CATEGORIES.BUTTON,
      GA_ACTIONS.THEME_SWITCH,
      !isDay ? GA_LABELS.LIGHT : GA_LABELS.DARK
    );
  }

  return (
    <ThemeReactContext.Provider value={[toogleTheme, title]}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeReactContext.Provider>
  );
}

export default ThemeContext;
