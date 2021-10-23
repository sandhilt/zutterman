import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;

    :focus, :hover {
      outline: none;
    }
  }

  :root {
    font-size: 16px;
  }

  body {
    font-family: 'Roboto Condensed', sans-serif;
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4, h5, h6, p {
    padding: 0;
    margin: 0;
  }
`;
