import React from 'react';
import { PageRouter } from 'components/util/PageRouter';
import MainLayout from 'components/layout/MainLayout';
import { HashRouter } from 'react-router-dom';

function App(): React.ReactElement {
  return (
    <HashRouter>
      <MainLayout>
        <PageRouter />
      </MainLayout>
    </HashRouter>
  );
}

export default App;
