import { createGlobalStyle } from 'styled-components';

export const themeTransition = 'background-color 0.5s, color 0.5s';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.primaryColour};
    color: ${(props) => props.theme.textColour};
    transition: ${themeTransition};
    font-family: 'Poppins', sans-serif;
  }
  nav {
    background-color: ${(props) => props.theme.secondaryColour};
    transition: ${themeTransition};
  }
  button, a {
    color: ${(props) => props.theme.textColour};
    &:active {
      background-color: ${(props) => props.theme.ternaryColour};
    }
    transition: ${themeTransition};

  }
`;
