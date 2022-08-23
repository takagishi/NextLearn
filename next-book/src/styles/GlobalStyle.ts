import { css } from '@emotion/react';

const GlobalStyle = css`
  html,
  body,
  textarea {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
      'Open Sans', 'Helvetica Neue', sans-serif, Bli;
  }
  a {
    cursor: pointer;
    color: inherit;
    text-decoration: none;
    transition: 0.25s;
    color: #000;
  }
  * {
    box-sizing: border-box;
  }
  ou,
  ul {
    list-style: none;
  }
`;

export default GlobalStyle;
