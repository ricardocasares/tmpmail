import React from "react";
import styled from "@emotion/styled";

import Link from "./Link";
import Grid from "./Grid";
import Button from "./Button";
import { Trash } from "./Icons";

export const Entry = styled.div`
  display: grid;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  transition: background 0.3s;

  :hover {
    background: #eee;
  }

  h2,
  h3 {
    margin: 3px 0;
    font-weight: normal;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  h2 {
    font-size: 16px;
  }

  h3 {
    color: #666;
    font-size: 14px;
  }
`;

export default ({ href, from, subject, date, onDelete, className }) => (
  <Entry className={className}>
    <h2>
      <Link data-link-to-message to={href}>
        {subject}
      </Link>
    </h2>
    <h3>
      {from}, {date}
    </h3>
  </Entry>
);
