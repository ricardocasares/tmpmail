import React from "react";
import generator from "../lib/generator";
import Flex from "./Flex";
import Link from "./Link";
import { Archive } from "./Icons";

export default () => (
  <Flex direction="column" align="center" justify="center">
    <Link to={`/${generator()}`}>
      <Archive size={96} color="#908769" fill="#cec098" />
    </Link>
    <p>Create a random inbox :)</p>
  </Flex>
);
