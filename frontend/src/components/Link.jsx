import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export default styled(Link)`
  color: blue;
  text-decoration: none;

  :hover {
    color: red;
  }

  :visited {
    color: purple;
  }
`;
