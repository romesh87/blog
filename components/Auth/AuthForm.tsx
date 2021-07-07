/* eslint-disable jsx-a11y/label-has-associated-control */
// eslint-disable-next-line no-use-before-define
import React, { useState, useRef, useEffect } from 'react';
import { signIn } from 'next-auth/client';
import { useRouter } from 'next/router';

import Notification, { Props as INotification } from '../UI/Notification/Notification';
import styles from './AuthForm.module.css';

export interface Props {
  onChangeTitle: (title: string) => void;
}

const createUser = async (email, password) => {
  const response = await fetch('/api/auth/signup', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong!');
  }

  return data;
};

const AuthForm: React.FC<Props> = (props) => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const router = useRouter();

  const [isLogin, setIsLogin] = useState(true);
  const [requestStatus, setRequestStatus] = useState(''); // pending | success | error
  const [requestError, setRequestError] = useState(null);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (requestStatus === 'error') {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setRequestError(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => {
      props.onChangeTitle(prevState ? 'Signup' : 'Login');
      return !prevState;
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    setRequestStatus('pending');

    // 'any' type is used to work around 'Object is possibly undefined' TS error
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const enteredEmail = (emailInputRef as any).current.value;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const enteredPassword = (passwordInputRef as any).current.value;

    if (isLogin) {
      const result = await signIn('credentials', {
        redirect: false,
        email: enteredEmail,
        password: enteredPassword,
      });

      if (!result.error) {
        router.replace('/');
      } else {
        setRequestStatus('error');
        setRequestError(result.error);
      }
    } else {
      try {
        const result = await createUser(enteredEmail, enteredPassword);
        // eslint-disable-next-line no-console
        console.log('User created!', result);
        router.replace('/');
      } catch (error) {
        setRequestStatus('error');
        setRequestError(error);
        // eslint-disable-next-line no-console
        console.error('Unable to create user!', error);
      }
    }
  };

  let notification: INotification;

  if (requestStatus === 'pending') {
    notification = {
      status: 'pending',
      title: isLogin ? 'Logging in' : 'Signing up',
      message: isLogin ? 'Please wait while we are logging you in...' : 'Please wait while we are signing you up...',
    };
  } else if (requestStatus === 'error') {
    notification = {
      status: 'error',
      title: 'Error!',
      message: requestError,
    };
  }

  return (
    <section className={styles.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={styles.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" ref={emailInputRef} required />
        </div>
        <div className={styles.control}>
          <label htmlFor="password">Your Password</label>
          <input type="password" id="password" ref={passwordInputRef} required />
        </div>
        <div className={styles.actions}>
          <button type="button">{isLogin ? 'Login' : 'Create Account'}</button>
          <button
            type="button"
            className={styles.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </section>
  );
};

export default AuthForm;
