import React from "react";
import { Global } from "@emotion/core";
import styled from "@emotion/styled";
import reset from "../lib/reset";

import Grid from "./Grid";
import Header from "./Header";

export const Container = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;

  @media (max-width: 900px) {
    padding: 0 10px;
  }
`;

export const Layout = styled.div`
  display: grid;
  height: 100%;
`;

export default ({ children, inbox }) => (
  <Layout>
    <Global styles={reset} />
    <Grid cols="1fr" rows="auto 1fr">
      <Header inbox={inbox} />
      {children}
    </Grid>
  </Layout>
);
