import React from "react";
import styled from "styled-components";

import Text from "@furkanyilmazx/components/Text";

function IconedText({ icon: Icon, textId, ...restProps }) {
  return (
    <Wrapper {...restProps}>
      <Icon />
      <StyledText textId={textId} />
    </Wrapper>
  );
}

export default IconedText;

const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;

  svg {
    margin-right: 6px;
    fill: ${(props) => props.theme.iconColor};
    path {
      fill: ${(props) => props.theme.iconColor};
    }
  }
`;

const StyledText = styled(Text)`
  color: ${(props) => props.theme.primaryColorDarker80};
`;
