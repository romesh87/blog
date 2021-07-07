// eslint-disable-next-line no-use-before-define
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { getSession } from 'next-auth/client';

import { useRouter } from 'next/router';
import AuthForm from '../components/Auth/AuthForm';

const AuthPage: React.FC = () => {
  const router = useRouter();

  const [title, setTitle] = useState('Login');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getSession().then((session) => {
      if (session) {
        router.replace('/');
      } else {
        setIsLoading(false);
      }
    });
  }, []);

  const onChangeTitleHandler = (newTitle: string): void => {
    setTitle(newTitle);
  };

  if (isLoading) return <div style={{ textAlign: 'center' }}>Loading...</div>;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <AuthForm onChangeTitle={(newTitle) => onChangeTitleHandler(newTitle)} />
    </>
  );
};

export default AuthPage;
