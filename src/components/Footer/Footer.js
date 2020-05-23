import React from "react";
import styled from "styled-components";

function Footer() {
  return <FooterWrapper>© 2020 furkanyilmazx</FooterWrapper>;
}

export default Footer;

const FooterWrapper = styled.div`
  height: 64px;
  width: 100%;
  text-align: center;
  background-color: ${(props) => props.theme.skillPillBgColor};
  color:  ${(props) => props.theme.primaryColorDarker80};
  line-height: 64px;
  font-size: 12px;
  margin-top: 50px;
`;
