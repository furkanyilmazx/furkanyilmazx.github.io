import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

import IconedText from "@furkanyilmazx/components/IconedText";
import Pill from "@furkanyilmazx/components/Pill";

import {
  BusinessIcon,
  LocationIcon,
  DateIcon,
} from "@furkanyilmazx/assets/icons";

function WorkExperienceItem({
  workTitle,
  company,
  location,
  workStatus,
  workingDate,
}) {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <FirstLine>
        <WorkTitle>{t(workTitle)}</WorkTitle>
        <StyledPill
          height="21px"
          padding="0 15px"
          align="center"
          textId={workStatus}
        />
      </FirstLine>
      <SecondLine>
        <LeftContet>
          <IconedText icon={BusinessIcon} textId={company} />
          <StyledIconedText icon={LocationIcon} textId={location} />
        </LeftContet>
        <IconedText icon={DateIcon} textId={workingDate} />
      </SecondLine>
    </Wrapper>
  );
}

export default WorkExperienceItem;

const Wrapper = styled.div`
  margin-bottom: 30px;
`;

const StyledIconedText = styled(IconedText)`
  margin-left: 15px;
`;

const FirstLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SecondLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

const LeftContet = styled.div``;

const WorkTitle = styled.div`
  font-size: 18px;
  color: ${props => props.theme.primaryColor};
  font-weight: 600;
`;

const StyledPill = styled(Pill)`
  background-color: ${props => props.theme.workPillBgColor};
`;
