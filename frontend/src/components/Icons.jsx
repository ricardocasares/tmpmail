import React from "react";
import styled from "@emotion/styled";

const Icon = styled.svg`
  stroke: ${({ color = "currentColor" }) => color};
  fill: ${({ fill = "none" }) => fill};
  stroke-linecap: ${({ cap = "round" }) => cap};
  stroke-linejoin: ${({ line = "round" }) => line};
  stroke-width: ${({ stroke = 2 }) => stroke};
  width: ${({ size = 18 }) => `${size}px`};
  height: ${({ size = 18 }) => `${size}px`};
`;

export const Trash = props => (
  <Icon {...props} viewBox="0 0 32 32">
    <path d="M28 6 L6 6 8 30 24 30 26 6 4 6 M16 12 L16 24 M21 12 L20 24 M11 12 L12 24 M12 6 L13 2 19 2 20 6" />
  </Icon>
);

export const Mail = props => (
  <Icon {...props} viewBox="0 0 32 32">
    <path d="M2 26 L30 26 30 6 2 6 Z M2 6 L16 16 30 6" />
  </Icon>
);

export const Archive = props => (
  <Icon viewBox="0 0 32 32" {...props}>
    <path d="M4 10 L4 28 28 28 28 10 M2 4 L2 10 30 10 30 4 Z M12 15 L20 15" />
  </Icon>
);

export const Clock = props => (
  <Icon viewBox="0 0 32 32" {...props}>
    <circle cx="16" cy="16" r="14" />
    <path d="M16 8 L16 16 20 20" />
  </Icon>
);

export const Alert = props => (
  <Icon viewBox="0 0 32 32" {...props}>
    <path d="M4 12 L4 4 12 4 M20 4 L28 4 28 12 M4 20 L4 28 12 28 M28 20 L28 28 20 28" />
  </Icon>
);
