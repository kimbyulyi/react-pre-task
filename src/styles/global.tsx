import { css } from "@emotion/react";

export const GlobalStyles = () => css`
  * {
    box-sizing: border-box;
  }

  html,
  body,
  div,
  ul {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;

    ul,
    li {
      list-style: none;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    input,
    button {
      box-shadow: none;
      background: none;
      border: 0;
      color: inherit;

      &:focus,
      &:active {
        outline: none;
      }
    }
  }
`;
