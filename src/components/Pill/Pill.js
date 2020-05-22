import React from "react";
import styled from "styled-components";

import Text from "@furkanyilmazx/components/Text";

function Pill(props) {
  return <StyledText {...props}></StyledText>;
}

export default Pill;

const StyledText = styled(Text)`
  border-radius: 43px;
  padding: ${(props) => props.padding};
  height: ${(props) => props.height};
  background-color: ${(props) =>
    props.backgroundColor || props.theme.pillColorDefault};
`;
