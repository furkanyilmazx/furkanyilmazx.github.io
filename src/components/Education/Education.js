import React from "react";
import styled from "styled-components";

import Title from "@furkanyilmazx/components/Title";
import Divider from "@furkanyilmazx/components/Divider";

import EducationItem from "./Education.Item";

function Education() {
  return (
    <Wrapper>
      <Title textId="education" />
      <EducationItem
        graduateLevel="education.level.bachelor"
        department="Electronics and Communication Engineering Dept"
        university="Kocaeli University"
        location="Izmit, TR"
        graduateDate="Sep 12, 2013 - Jul 27, 2017"
      />
      <StyledDivider />
    </Wrapper>
  );
}

export default Education;

const Wrapper = styled.div`
  margin-bottom: 40px;
`;

const StyledDivider = styled(Divider)`
  margin-bottom: 30px;
`;
