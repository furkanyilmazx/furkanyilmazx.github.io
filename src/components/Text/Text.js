import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

function Text({ textId, align = "left", ...restProps }) {
  const { t } = useTranslation();
  return (
    <Wrapper align={align} {...restProps}>
      {t(textId)}
    </Wrapper>
  );
}

export default Text;

const Wrapper = styled.div`
  color: ${props => props.theme.primaryColorDarker80};
  font-size: 14px;
  font-weight: 500;
  text-align: ${(props) => props.align};
`;
