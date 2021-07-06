import Head from 'next/head';
import { Provider, getSession } from 'next-auth/client';
import React, { useEffect, useState } from 'react';

import '../styles/globals.css';
import Layout from '../components/Layout/Layout';
import { useRouter } from 'next/router';

const MyApp = ({ Component, pageProps }) => {
  return (
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
}

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
    })
  }, [])
  
  if (isLoading) {
    return <div style={{ textAlign: 'center' }}>Loading...</div>
  }

  return children;
}

export default MyApp;
