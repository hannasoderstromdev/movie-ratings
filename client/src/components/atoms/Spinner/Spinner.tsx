import React from "react";
import styled, { keyframes } from "styled-components";

const SpinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const SpinnerWrapper = styled.div`
  width: 30px;
  height: 30px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  animation: ${SpinAnimation} 1s cubic-bezier(0.26, 0.56, 0.72, 0.85) infinite;
  position: relative;
`;

const SpinnerBall = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.45);
  position: absolute;
  top: -10px;
  right: -10px;
`;

const Spinner = () => (
  <SpinnerWrapper data-testid="spinner">
    <SpinnerBall />
  </SpinnerWrapper>
);

export default Spinner;
