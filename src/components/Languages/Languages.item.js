import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

import { WorldIcon } from "@furkanyilmazx/assets/icons";
import IconedText from "@furkanyilmazx/components/IconedText";
import ProgressBar from "@furkanyilmazx/components/ProgressBar";

function LanguagesItem({language, languagleLevel, progress}) {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Info>
        {t(language)}
        <IconedText icon={WorldIcon} textId={languagleLevel} />
      </Info>
      <ProgressBar progress={progress} />
    </Wrapper>
  );
}

export default LanguagesItem;

const Wrapper = styled.div`
  margin-bottom: 10px;
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3px;
  font-size: 18px;
  font-weight: 500;
  color: ${props => props.theme.primaryColor};
`;
