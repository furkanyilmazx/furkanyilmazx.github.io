import styled from "styled-components";

const Divider = styled.div`
  height: 0.5px;
  background-color: ${props => props.theme.dividerColor};
  width: 100%;
`;

export default Divider;
