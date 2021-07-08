/* eslint-disable jsx-a11y/anchor-is-valid */
// eslint-disable-next-line no-use-before-define
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSession, signOut } from 'next-auth/client';
import { useRouter } from 'next/router';
import Logo from './Logo';

import styles from './MainNavigation.module.css';

const MainNavigation: React.FC = () => {
  const router = useRouter();
  const [session] = useSession();

  const logoutClickHandler = async (): Promise<void> => {
    try {
      const data = await signOut({ redirect: false, callbackUrl: '/' });
      router.replace(data.url);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log('An error occured during signing out!', error);
    }
  };

  return (
    <header className={styles.header}>
      <Link href="/">
        <a><Logo /></a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          {session
            && (
            <li>
              <Link href="/admin">Admin</Link>
            </li>
            )}
        </ul>
      </nav>
      {session
        ? (
          <div className={styles.userContainer}>
            <div className={styles.user}>
              <Image
                src="/images/site/avatar.png"
                alt="user avatar"
                width={40}
                height={40}
                className={styles.userImage}
              />
              <span className={styles.userEmail}>{session.user.email}</span>
            </div>
            <button type="button" className={styles.logout} onClick={logoutClickHandler}>Logout</button>
          </div>
        )
        : (
          <ul>
            <li>
              <Link href="/auth">Login</Link>
            </li>
          </ul>
        )}
    </header>
  );
};

export default MainNavigation;
