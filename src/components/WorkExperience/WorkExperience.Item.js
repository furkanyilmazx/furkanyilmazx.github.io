import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

import IconedText from "@furkanyilmazx/components/IconedText";
import Pill from "@furkanyilmazx/components/Pill";

import {
  BusinessIcon,
  LocationIcon,
  DateIcon,
  LaunchIcon,
} from "@furkanyilmazx/assets/icons";
import media from "@furkanyilmazx/helpers/media";

function WorkExperienceItem({
  workTitle,
  company,
  workDescription,
  location,
  workStatus,
  workingDate,
  projectLink,
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
      {workDescription && <DescriptionLine>{workDescription}</DescriptionLine>}

      <SecondLine>
        <LeftContet>
          <IconedText icon={BusinessIcon} textId={company} />
          <StyledIconedText icon={LocationIcon} textId={location} />
          {projectLink && (
            <ProjectLink href={projectLink} target="_blank">
              <LaunchIcon />
              Open Project
            </ProjectLink>
          )}
        </LeftContet>
        <IconedText icon={DateIcon} textId={workingDate} />
      </SecondLine>
    </Wrapper>
  );
}

export default WorkExperienceItem;

const Wrapper = styled.div`
  margin-bottom: 30px;

  ${media.sm`
    margin-bottom: 20px;
  `}
`;

const StyledIconedText = styled(IconedText)`
  margin-left: 15px;
  ${media.sm`
    margin-left: 0;
    min-width: 100%;
  `}
`;

const FirstLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const SecondLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const DescriptionLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
  flex-wrap: wrap;
  font-size: 14px;
  color: ${(props) => props.theme.primaryColor};
  font-weight: 500;
  text-align: justify;
`;

const LeftContet = styled.div`
  ${media.sm`
    min-width: 100%;
  `}
`;

const WorkTitle = styled.div`
  font-size: 18px;
  color: ${(props) => props.theme.primaryColor};
  font-weight: 600;
`;

const StyledPill = styled(Pill)`
  background-color: ${(props) => props.theme.workPillBgColor};
`;

const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  margin-left: 15px;
  color: ${(props) => props.theme.primaryColorDarker80};
  font-size: 14px;
  font-weight: 500;
  text-align: ${(props) => props.align};

  svg {
    margin-right: 6px;
    fill: ${(props) => props.theme.iconColor};
    path {
      fill: ${(props) => props.theme.iconColor};
    }
  }

  ${media.sm`
    margin-left: 0;
    min-width: 100%;
  `}
`;
