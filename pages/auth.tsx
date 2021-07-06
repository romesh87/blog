import Head from 'next/head';
import { getSession } from 'next-auth/client';
import { useEffect, useState } from 'react';

import AuthForm from '../components/Auth/AuthForm';
import { useRouter } from 'next/router';
 
const AuthPage: React.FC = () => {
  const router = useRouter();

  const [title, setTitle] = useState('Login');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getSession().then((session) => {
      if(session) {
        router.replace('/');
      } else {
        setIsLoading(false);
      }
    })  
  }, []);

  const onChangeTitleHandler = (title: string): void => {
    setTitle(title);
  }

  if (isLoading) return <div style={{textAlign: 'center'}}>Loading...</div>

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