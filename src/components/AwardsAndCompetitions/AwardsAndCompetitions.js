import React from "react";
import styled from "styled-components";

import Title from "@furkanyilmazx/components/Title";
import Divider from "@furkanyilmazx/components/Divider";

import AwardsAndCompetitionsItem from "./AwardsAndCompetitions.Item";

function AwardsAndCompetitions() {
  return (
    <Wrapper>
      <Title textId="awards" />
      <AwardsAndCompetitionsItem
        name="Mate ROV 2016, Turkey Championship"
        place="Marmara University"
        location="Istanbul, TR"
        date="April 17, 2016"
      />
      <StyledDivider />
      <AwardsAndCompetitionsItem
        name="Mate ROV 2016, USA"
        place="NASA’s Johnson Space Center"
        location="Houston, TX"
        date="June 23, 2016"
      />
      <Divider />
    </Wrapper>
  );
}

export default AwardsAndCompetitions;

const Wrapper = styled.div`
  margin-bottom: 40px;
`;

const StyledDivider = styled(Divider)`
  margin-bottom: 30px;
`;
