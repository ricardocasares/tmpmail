import { css } from "@emotion/core";

export default css`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    height: 100%;
    margin: 0;
    color: #999;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial,
      sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
  }

  *:focus {
    outline: none;
    box-shadow: inset 0 0 0 2px;
  }
`;
