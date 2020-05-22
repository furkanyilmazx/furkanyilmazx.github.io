import React from "react";
import styled from "styled-components";

import IconedText from "@furkanyilmazx/components/IconedText";

import {
  BusinessIcon,
  LocationIcon,
  DateIcon,
  EducationIcon,
} from "@furkanyilmazx/assets/icons";

function EducationItem({
  graduateLevel,
  university,
  department,
  location,
  graduateDate,
}) {
  return (
    <Wrapper>
      <WorkTitle>{graduateLevel}</WorkTitle>
      <FirstLine>
        <IconedText icon={EducationIcon} textId={department} />
      </FirstLine>
      <SecondLine>
        <LeftContet>
          <IconedText icon={BusinessIcon} textId={university} />
          <StyledIconedText icon={LocationIcon} textId={location} />
        </LeftContet>
        <IconedText icon={DateIcon} textId={graduateDate} />
      </SecondLine>
    </Wrapper>
  );
}

export default EducationItem;

const Wrapper = styled.div`
  margin-bottom: 30px;
`;
const StyledIconedText = styled(IconedText)`
  margin-left: 15px;
`;

const FirstLine = styled.div`
  margin-top: 3px;
`;

const SecondLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LeftContet = styled.div``;

const WorkTitle = styled.div`
  font-size: 18px;
  color: ${(props) => props.theme.primaryColor};
  font-weight: 600;
`;
