/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import Image from 'next/image';
import { useSession, signOut } from 'next-auth/client';

import Logo from './Logo';
import styles from './MainNavigation.module.css';
import { useRouter } from 'next/router';

const MainNavigation = () => {
  const router = useRouter();
  const [session, loading] = useSession();

  const logoutClickHandler = async (): Promise<void> => {
    try {
      const data = await signOut({redirect: false, callbackUrl: '/'});
      router.replace(data.url);
    } catch (error) {
      console.log('An error occured during signing out!', error);
    }
  }

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
          {session && 
            <li>
              <Link href="/admin">Admin</Link>
          </li>}
        </ul>
      </nav>
      {session ? 
        <div className={styles.userContainer}>
          <div>
            <Image  
              src="/images/site/avatar.png"
              alt="user avatar"
              width={40}
              height={40}
              className={styles.userImage}
            />`
          </div>
            <span className = {styles.userName}>{session.user.email}</span>
            <button className={styles.logout} onClick={logoutClickHandler}>Logout</button>
        </div> :
        <ul>
          <li>
            <Link href="/auth">Login</Link>
          </li>
        </ul>}
    </header>
  )
};

export default MainNavigation;
