import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'components/layout/GlobalStyle';
import { PageRouter } from 'components/pages/PageRouter';
import MainLayout from 'components/layout/MainLayout';
import { Light, Dark } from 'components/common/Themes';
import { HashRouter } from 'react-router-dom';

function App(): React.ReactElement {
  const [darkMode, setDarkMode] = React.useState(false);

  const handleThemeChange = () => {
    setDarkMode((dm) => !dm);
  };

  return (
    <ThemeProvider theme={darkMode ? Dark : Light}>
      <GlobalStyle />
      <HashRouter>
        <MainLayout darkMode={darkMode} handleDarkModeChange={handleThemeChange}>
          <PageRouter />
        </MainLayout>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;