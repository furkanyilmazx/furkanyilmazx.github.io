import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

import DefaultLayout from "@furkanyilmazx/layouts/DefaultLayout";

import media from "@furkanyilmazx/helpers/media";

function NotFoundPage() {
  const { t } = useTranslation();

  return (
    <StyledDefaultLayout>
      <img src="https://iyzi.link/images/404.svg" alt="404" />
      <Title>{t("page.notfound")}</Title>
    </StyledDefaultLayout>
  );
}

export default NotFoundPage;

const Title = styled.h3`
  font-size: 40px;
  font-weight: 500;
  color: #fe5455;
  text-align: center;
  
  ${media.sm`
    font-size: 24px;
  `}
`;

const StyledDefaultLayout = styled(DefaultLayout)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
