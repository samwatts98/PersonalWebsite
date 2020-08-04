import { createGlobalStyle } from 'styled-components';

export const THEME_TRANSITION = 'background-color 0.5s, color 0.5s';
export const DESKTOP_MEDIA_QUERY = '@media screen and (min-width: 500px)';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.primaryColour};
    color: ${(props) => props.theme.textColour};
    transition: ${THEME_TRANSITION};
    font-family: 'Poppins', sans-serif;
  }
  nav {
    background-color: ${(props) => props.theme.secondaryColour};
    transition: ${THEME_TRANSITION};
  }
  button, a {
    
    border: none;
    outline: none;
    background: transparent;
    transition: ${THEME_TRANSITION};
    color: ${(props) => props.theme.textColour};
    &:active {
      background-color: ${(props) => props.theme.ternaryColour};
    }
  }
`;
