/* eslint-disable jsx-a11y/anchor-is-valid */
// eslint-disable-next-line no-use-before-define
import React from 'react';

import Link from 'next/link';
import Image from 'next/image';
import { IPost } from '../../interfaces';

import styles from './PostItem.module.css';

interface Props {
  post: IPost;
}

const PostItem: React.FC<Props> = ({ post }) => {
  const {
    title,
    image,
    excerpt,
    date,
    slug,
  } = post;

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const imagePath = `/images/posts/${slug}/${image}`;
  const linkPath = `/posts/${slug}`;

  return (
    <li>
      <div className={styles.post}>
        <Link href={linkPath}>
          <a>
            <div className={styles.image}>
              <Image
                src={imagePath}
                alt={title}
                width={300}
                height={200}
                layout="responsive"
              />
            </div>
            <div className={styles.content}>
              <h3>{title}</h3>
              <time>{formattedDate}</time>
              <p>{excerpt}</p>
            </div>
          </a>
        </Link>
      </div>
    </li>
  );
};

export default PostItem;
