import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import MainLayout from 'components/layout/MainLayout';

function MyApp({ Component, pageProps }: AppProps): React.ReactNode {
  return (
    <>
      <Head>
        <title>Sam Watts</title>
      </Head>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}
export default MyApp;
