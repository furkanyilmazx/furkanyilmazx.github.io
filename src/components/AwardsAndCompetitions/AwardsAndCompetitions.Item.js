import React from "react";
import styled from "styled-components";

import IconedText from "@furkanyilmazx/components/IconedText";

import {
  BusinessIcon,
  LocationIcon,
  DateIcon,
} from "@furkanyilmazx/assets/icons";
import media from "@furkanyilmazx/helpers/media";

function AwardsAndCompetitionsItem({
  name,
  place,
  location,
  date,
}) {
  return (
    <Wrapper>
      <Title>{name}</Title>
      <SecondLine>
        <LeftContet>
          <IconedText icon={BusinessIcon} textId={place} />
          <StyledIconedText icon={LocationIcon} textId={location} />
        </LeftContet>
        <IconedText icon={DateIcon} textId={date} />
      </SecondLine>
    </Wrapper>
  );
}

export default AwardsAndCompetitionsItem;

const Wrapper = styled.div`
  margin-bottom: 30px;
`;

const StyledIconedText = styled(IconedText)`
  margin-left: 15px;
  ${media.sm`
    margin-left: 0;
    min-width: 100%;
  `}
`;

const SecondLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 10px;
`;

const LeftContet = styled.div``;

const Title = styled.div`
  font-size: 18px;
  color: ${props => props.theme.primaryColor};
  font-weight: 600;
`;
