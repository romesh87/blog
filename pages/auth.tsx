import Head from 'next/head';
import { useState } from 'react';

import AuthForm from '../components/Auth/AuthForm';
 
const AuthPage: React.FC = () => {
  const [title, setTitle] = useState('Login');

  const onChangeTitleHandler = (title: string): void => {
    setTitle(title);
  }

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <AuthForm onChangeTitle={(title) => onChangeTitleHandler(title)}/>
    </>
  )
}
 
export default AuthPage;