import styled from 'styled-components';
import React from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';

import { DESKTOP_MEDIA_QUERY, THEME_TRANSITION } from './GlobalStyle';

const ToggleThemeButtonComponent = styled.button`
  position: absolute;
  right: 3rem;
  transition: transform 0.1s ease-in, ${THEME_TRANSITION};

  margin: 0.5rem;
  ${DESKTOP_MEDIA_QUERY} {
    padding: 0.5rem 0;
    width: min-content;
    height: min-content;
    position: static;
  }

  &:active {
    background-color: Transparent;
  }
  &:hover,
  &:focus-visible {
    transform: scale(1.4);
  }
`;

type ToggleThemeButtonProps = {
  handleClick: () => void;
  darkMode: boolean;
};

export function ToggleThemeButton({ handleClick, darkMode }: ToggleThemeButtonProps): React.ReactElement {
  return (
    <ToggleThemeButtonComponent onClick={handleClick} aria-label="Toggle Dark Mode">
      {darkMode ? <FiMoon /> : <FiSun />}
    </ToggleThemeButtonComponent>
  );
}
