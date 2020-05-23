import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

import media from "@furkanyilmazx/helpers/media";

function Title({ textId }) {
  const { t } = useTranslation();
  return <Wrapper>{t(textId)}</Wrapper>;
}

export default Title;

const Wrapper = styled.div`
  color: ${props => props.theme.primaryColor};
  font-size: 24px;
  font-weight: 800;
  margin-bottom: 20px;
  ${media.sm`
    margin-bottom: 10px;
  `}
`;
