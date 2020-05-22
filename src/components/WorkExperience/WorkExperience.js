import React from "react";
import styled from "styled-components";

import Title from "@furkanyilmazx/components/Title";
import Divider from "@furkanyilmazx/components/Divider";

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
        company="Huawei Technologies"
        location="Istanbul, TR"
        workStatus="workStatus.fullTime"
        workingDate="Jan 15, 2018 - April 08, 2019"
      />
      <StyledDivider />
      <WorkExperienceItem
        workTitle="workTitle.hardware.engineer"
        company="Yongatek"
        location="Istanbul, TR"
        workStatus="workStatus.fullTime"
        workingDate="Sep 15, 2017 - Jan 15, 2018"
      />
      <StyledDivider />
      <WorkExperienceItem
        workTitle="workTitle.software.engineer"
        company="Ctech"
        location="Istanbul, TR"
        workStatus="workStatus.intern"
        workingDate="May 01, 2017 - Sep 15, 2017"
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
`;
