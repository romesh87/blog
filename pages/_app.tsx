// eslint-disable-next-line no-use-before-define
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { getSession } from 'next-auth/client';
import { useRouter } from 'next/router';

import Layout from '../components/Layout/Layout';

import '../styles/globals.css';

const Auth = ({ children }) => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getSession().then((session) => {
      if (session) {
        setIsLoading(false);
      } else {
        router.replace('/auth');
      }
    });
  }, []);

  if (isLoading) {
    return <div style={{ textAlign: 'center' }}>Loading...</div>;
  }

  return children;
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const MyApp = ({ Component, pageProps }) => (
  <Layout>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    {Component.auth ? (
      <Auth>
        <Component {...pageProps} />
      </Auth>
    ) : (
      <Component {...pageProps} />
    )}
  </Layout>
);

export default MyApp;
