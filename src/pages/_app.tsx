import type { AppProps } from 'next/app';
import React from 'react';
import 'css/normalize.css';
import MainLayout from 'components/layout/MainLayout';

function MyApp({ Component, pageProps }: AppProps): React.ReactNode {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}
export default MyApp;
