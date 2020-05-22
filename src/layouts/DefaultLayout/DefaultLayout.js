import React from "react";
import styled from "styled-components";

import Header from "@furkanyilmazx/components/Header";

function DefaultLayout({ children, loading, ...restProps }) {
  return (
    <LayoutContainer {...restProps}>
      <StyledHeader />
      {children}
    </LayoutContainer>
  );
}

export default DefaultLayout;

const LayoutContainer = styled.div`
  height: 100%;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  
`;

const StyledHeader = styled(Header)`
  display: flex;
`;
