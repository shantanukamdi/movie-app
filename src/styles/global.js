import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
  }
  button {
    outline: none;
    cursor: pointer;
  }
  *,
    *::before,
    *::after {
      box-sizing: inherit;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    body {
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        background-color: rgb(240, 240, 240);
        letter-spacing: 0.1em;
      }
      form,
      input,
      textarea,
      button,
      select,
      a {
        -webkit-tap-highlight-color: rgba(0,0,0,0);
    }
`;