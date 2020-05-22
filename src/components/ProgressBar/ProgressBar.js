import React from "react";
import styled from "styled-components";

function ProgressBar({ progress }) {
  return (
    <ProgressBarWrapper>
      <ProgressBarStick progress={progress} />
    </ProgressBarWrapper>
  );
}

export default ProgressBar;

const ProgressBarWrapper = styled.div`
  position: relative;
  height: 5px;
  background-color: ${(props) => props.theme.progressbarBgColor};
  width: 100%;
  border-radius: 6px;
`;

const ProgressBarStick = styled.div`
  position: absolute;
  background-color: ${(props) => props.theme.progressbarFgColor};
  width: ${(props) => props.progress || "50%"};
  height: 100%;
  border-radius: 6px;
`;
