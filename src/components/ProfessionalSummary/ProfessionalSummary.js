import React from "react";
import styled from "styled-components";

import Title from "@furkanyilmazx/components/Title";
import Text from "@furkanyilmazx/components/Text";

function ProfessionalSummary({ name }) {
  return (
    <Wrapper>
      <Title textId="profSummary" />
      <Text
        align="justify"
        textId="profSummary.letter"
      />
    </Wrapper>
  );
}

export default ProfessionalSummary;

const Wrapper = styled.div`
  margin-bottom: 40px;
`;
