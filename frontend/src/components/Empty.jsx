import React from "react";
import Flex from "./Flex";
import { Square } from "./Icons";

export default ({ refresh }) => {
  const clickAction = e => {
    e.preventDefault();
    refresh(new Date());
  };

  return (
    <Flex direction="column" align="center" justify="center">
      <Square size={96} color="#b383ff" fill="#cce5ff" />
      <p>
        Nothing here yet,{" "}
        <a data-refresh href="#" onClick={clickAction}>
          check again!
        </a>
      </p>
    </Flex>
  );
};
