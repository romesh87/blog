import Image from 'next/image';

import styles from './Hero.module.css';

const Hero = () => (

  <section className={styles.hero}>
    <div className={styles.image}>
      <Image
        src="/images/site/avatar.png"
        alt="my avatar"
        width={300}
        height={300}
      />
    </div>
    <h1>Hi, I'm Roman</h1>
    <p>
      I blog about web development - especially frontend
      frameworks like React and Next
    </p>
  </section>

);

export default Hero;
