import React from "react";
import styled from "styled-components";

import Title from "@furkanyilmazx/components/Title";
import Divider from "@furkanyilmazx/components/Divider";

import media from "@furkanyilmazx/helpers/media";

import WorkExperienceItem from "./WorkExperience.Item";

function WorkExperience() {
  return (
    <Wrapper>
      <Title textId="workExp" />
      <WorkExperienceItem
        workTitle="workTitle.software.engineer"
        company="iyzico"
        location="Istanbul, TR"
        workStatus="workStatus.fullTime"
        workingDate="April 08, 2019 -"
      />
      <StyledDivider />
      <WorkExperienceItem
        workTitle="workTitle.software.engineer"
        company="Huawei Technologies Co., Ltd"
        location="Istanbul, TR"
        workStatus="workStatus.fullTime"
        workingDate="Jan 15, 2018 - April 08, 2019"
      />
      <StyledDivider />
      <WorkExperienceItem
        workTitle="workTitle.hardware.engineer"
        company="Yonga Technology Microelectronics"
        location="Istanbul, TR"
        workStatus="workStatus.fullTime"
        workingDate="Sep 15, 2017 - Jan 15, 2018"
      />
      <StyledDivider />
      <WorkExperienceItem
        workTitle="workTitle.software.engineer"
        company="C Tech Information Technologies"
        location="Istanbul, TR"
        workStatus="workStatus.intern"
        workingDate="May 01, 2017 - Sep 15, 2017"
      />
      <StyledDivider />
      <WorkExperienceItem
        workTitle="workTitle.software.engineer"
        company="EraTek Electronic"
        location="Izmit, TR"
        workStatus="workStatus.intern"
        workingDate="Jul 01, 2015 - Apr 10, 2016"
      />
      <StyledDivider />
      <WorkExperienceItem
        workTitle="workTitle.game.developer"
        company="Etkasoft"
        location="Izmit, TR"
        workStatus="workStatus.intern"
        workingDate="Jul 04, 2014 - Aug 27, 2014"
      />
      <Divider />
    </Wrapper>
  );
}

export default WorkExperience;

const Wrapper = styled.div`
  margin-bottom: 40px;
`;

const StyledDivider = styled(Divider)`
  margin-bottom: 30px;
  
  ${media.sm`
    margin-bottom: 20px;
  `}
`;
