/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import Image from 'next/image';

import Logo from './Logo';
import styles from './MainNavigation.module.css';

const MainNavigation = () => (
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
      </ul>
     </nav>
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
        <span className = {styles.userName}>Hi, UserName</span>
      </div>
  </header>
);

export default MainNavigation;
