import React from 'react';
import styled from 'styled-components';
import { Light, Dark } from 'components/common/Themes';
import { FiMoon, FiSun } from 'react-icons/fi';
import { SideMenu } from 'components/layout/SideMenu';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, THEME_TRANSITION, DESKTOP_MEDIA_QUERY } from 'components/layout/GlobalStyle';
import { IconContext } from 'react-icons';

type MainLayoutProps = {
  children?: React.ReactNode;
};

const MainSection = styled.main`
  display: block;
  margin: 6rem 1rem 2rem 1rem;
  text-align: justify;

  ${DESKTOP_MEDIA_QUERY} {
    margin: 2rem 1rem 2rem 6rem;
  }
`;

const ThemeToggle = styled.button`
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
  &:hover {
    transform: scale(1.4);
  }
`;

const MainLayout = ({ children }: MainLayoutProps): React.ReactElement => {
  const [darkMode, setDarkMode] = React.useState(false);

  const handleThemeChange = () => {
    setDarkMode((dm) => !dm);
  };

  const PickThemeIcon = (): React.ReactElement => (darkMode ? <FiMoon /> : <FiSun />);

  return (
    <ThemeProvider theme={darkMode ? Dark : Light}>
      <IconContext.Provider value={{ size: '2rem' }}>
        <GlobalStyle />
        <SideMenu>
          <ThemeToggle onClick={handleThemeChange} aria-label="toggle theme">
            <PickThemeIcon />
          </ThemeToggle>
        </SideMenu>
        <MainSection>{children}</MainSection>
      </IconContext.Provider>
    </ThemeProvider>
  );
};

export default MainLayout;
