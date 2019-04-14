import React from "react";
import styled from "styled-components";

import Spinner from "components/atoms/Spinner";

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FullscreenSpinner = () => (
  <Backdrop data-testid="backdrop">
    <Spinner />
  </Backdrop>
);

export default FullscreenSpinner;
