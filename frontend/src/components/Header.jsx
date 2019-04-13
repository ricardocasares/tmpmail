import React from "react";
import styled from "@emotion/styled";
import Logo from "./Logo";
import Link from "./Link";

const Header = styled.header`
  color: #777;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;

  h2 {
    margin: 0;
    font-weight: normal;
  }
`;

export default ({ inbox }) => (
  <Header>
    <Link to="/">
      <Logo size={"32"} color="#666" />
    </Link>{" "}
    {inbox && (
      <Link data-inbox-link to={`/${inbox}`}>
        {inbox}
      </Link>
    )}
  </Header>
);
