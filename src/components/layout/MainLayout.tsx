import React from 'react';
import styled from 'styled-components';
import { Light, Dark } from 'components/common/Themes';
import { SideMenu } from 'components/layout/SideMenu';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, DESKTOP_MEDIA_QUERY } from 'components/layout/GlobalStyle';
import { IconContext } from 'react-icons';
import { ToggleThemeButton } from 'components/layout/ToggleThemeButton';

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

const MainLayout = ({ children }: MainLayoutProps): React.ReactElement => {
  const [darkMode, setDarkMode] = React.useState(false);

  const handleThemeChange = () => {
    setDarkMode((dm) => !dm);
  };

  return (
    <ThemeProvider theme={darkMode ? Dark : Light}>
      <IconContext.Provider value={{ size: '2rem' }}>
        <GlobalStyle />
        <SideMenu>
          <ToggleThemeButton handleClick={handleThemeChange} darkMode={darkMode} />
        </SideMenu>
        <MainSection>{children}</MainSection>
      </IconContext.Provider>
    </ThemeProvider>
  );
};

export default MainLayout;
