import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

import IconedText from "@furkanyilmazx/components/IconedText";

import {
  BusinessIcon,
  LocationIcon,
  DateIcon,
  EducationIcon,
} from "@furkanyilmazx/assets/icons";
import media from "@furkanyilmazx/helpers/media";

function EducationItem({
  graduateLevel,
  university,
  department,
  location,
  graduateDate,
}) {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <GraduateLevel>{t(graduateLevel)}</GraduateLevel>
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
  margin-top: 3px;
`;

const SecondLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const LeftContet = styled.div`
  ${media.sm`
    min-width: 100%;
  `}
`;

const GraduateLevel = styled.div`
  font-size: 18px;
  color: ${(props) => props.theme.primaryColor};
  font-weight: 600;
`;
