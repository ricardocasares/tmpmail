import React from "react";
import styled from "@emotion/styled";
import { Mail } from "./Icons";

const Logo = styled(Mail)`
  stroke: ${({ color = "#b59c44" }) => color};
  fill: ${({ fill = "#ffdd63" }) => fill};
  stroke-width: ${({ stroke = 3 }) => stroke};
`;

export default Logo;
