import React from "react";
import styled from "styled-components";

import Title from "@furkanyilmazx/components/Title";
import Divider from "@furkanyilmazx/components/Divider";

import LanguagesItem from "./Languages.item";

function Languages() {
  return (
    <Wrapper>
      <Title textId="languages" />
      <LanguagesItem  language="langs.turkish" languagleLevel="Native" progress="100%" />
      <StyledDivider />
      <LanguagesItem  language="langs.english" languagleLevel="Intermediate High" progress="80%" />
      <Divider />
    </Wrapper>
  );
}

export default Languages;

const Wrapper = styled.div`
  margin-bottom: 40px;
`;

const StyledDivider = styled(Divider)`
  margin-bottom: 10px;
`;
