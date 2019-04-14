import React from "react";
import styled from "@emotion/styled";
import { agoFromString } from "../lib/time";
import Link from "./Link";

export const Entry = styled.div`
  display: grid;

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

export default ({ href, from, subject, date, className }) => (
  <Entry className={className}>
    <h2>
      <Link data-link-to-message to={href}>
        {subject}
      </Link>
    </h2>
    <h3>
      {from}, <span title={date}>{agoFromString(date)}</span>
    </h3>
  </Entry>
);
