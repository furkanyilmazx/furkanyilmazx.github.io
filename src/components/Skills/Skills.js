import React from "react";
import styled from "styled-components";

import Title from "@furkanyilmazx/components/Title";
import Divider from "@furkanyilmazx/components/Divider";

import Pill from "@furkanyilmazx/components/Pill";

import { SKILLS } from "./Skills.contants";

function Skills() {
  return (
    <Wrapper>
      <Title textId="skills" />
      <PillWrapper>
        {SKILLS.map((skill, index) => (
          <StyledPill key={index} textId={skill} />
        ))}
      </PillWrapper>
      <StyledDivider />
    </Wrapper>
  );
}

export default Skills;

const Wrapper = styled.div`
  margin-bottom: 40px;
`;

const StyledDivider = styled(Divider)`
  margin-bottom: 30px;
  margin-top: 20px;
`;

const StyledPill = styled(Pill)`
  margin-right: 10px;
  margin-bottom: 10px;
  background-color: #dae2ff;
  background-color: ${(props) => props.theme.skillPillBgColor};
  padding: 0 15px;
  height: 21px;
  text-align: center;
`;

const PillWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
