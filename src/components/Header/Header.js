import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

import { GBFlag, TRFlag } from "@furkanyilmazx/assets/images";
import { ThemeReactContext } from "@furkanyilmazx/contexts/ThemeContext";
import { LOCALE_TR, LOCALE_EN } from "@furkanyilmazx/constants/i18n";
import { GA_CATEGORIES, GA_ACTIONS } from "@furkanyilmazx/constants/analytics";

import sendEvent from "@furkanyilmazx/helpers/analytics";
import media from "@furkanyilmazx/helpers/media";

function Header(props) {
  const { t, i18n } = useTranslation();
  const [toogleTheme, title] = useContext(ThemeReactContext);

  const { flag: Flag, language } = getCurrentFlagAndLanguageName();

  function switchLanguage() {
    sendEvent(GA_CATEGORIES.BUTTON, GA_ACTIONS.LANGUAGE_SWITCH, i18n.language);
    i18n.changeLanguage(i18n.language === LOCALE_TR ? LOCALE_EN : LOCALE_TR);
  }
  function switchTheme() {
    toogleTheme();
  }

  function getCurrentFlagAndLanguageName() {
    if (i18n.language !== LOCALE_TR)
      return {
        flag: TRFlag,
        language: t("turkish"),
      };
    else {
      return {
        flag: GBFlag,
        language: t("english"),
      };
    }
  }

  return (
    <Container {...props}>
      <ThemeSwitch onClick={switchTheme}>
        <ThemeIcon className={title === "lights.on" ? "sun" : "moon"}>
          <ThemeIconCresent
            className={title === "lights.on" ? "sun" : "moon"}
          />
        </ThemeIcon>
        <ThemeTitle>{t(title)}</ThemeTitle>
      </ThemeSwitch>
      <LanguageSwitch onClick={switchLanguage}>
        <Flag />
        <LanguageWrapper>{language}</LanguageWrapper>
      </LanguageSwitch>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  height: 44px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  font-family: "Raleway", sans-serif;
`;

const ThemeSwitch = styled.a`
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.primaryColor};
  user-select: none;
`;

const ThemeIcon = styled.div`
  position: absolute;
  width: 22px;
  height: 22px;
  border-radius: 100%;
  background: linear-gradient(40deg, #ff0080, #ff8c00 70%);
  z-index: 1;

  &.moon {
    background: linear-gradient(40deg, #8983f7, #a3dafb 70%);
  }
  &.sun {
    background: linear-gradient(40deg, #ff0080, #ff8c00 70%);
  }
`;

const ThemeIconCresent = styled.div`
  position: absolute;
  border-radius: 100%;
  right: 0;
  width: 15px;
  height: 15px;
  transform-origin: top right;
  transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

  &.moon {
    transform: scale(1);
    background: #121212;
  }
  &.sun {
    background: #fafafa;
    transform: scale(0);
  }
`;

const ThemeTitle = styled.span`
  margin-left: 28px;
`;

const LanguageSwitch = styled.a`
  cursor: pointer;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.primaryColor};
`;

const LanguageWrapper = styled.span`
  margin-left: 4px;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.56;
  color: ${(props) => props.theme.primaryColor};
  user-select: none;

  ${media.sm`
    font-size: 14px;
  `}
`;
