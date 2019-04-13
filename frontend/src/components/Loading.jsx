import React from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";
import { Clock } from "./Icons";

const rotate = keyframes`
  0% {
    transform: rotate(0deg)
  }
  100% {
    transform: rotate(360deg)
  }
`;

export const Indicator = styled(Clock)`
  transition: transform 0.1s;
  animation: ${rotate} 1s infinite;
`;

export const Container = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #eee;
  opacity: 0.5;
`;

export default () => (
  <Container>
    <Indicator size={96} />
  </Container>
);
