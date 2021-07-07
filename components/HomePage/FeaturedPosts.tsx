// eslint-disable-next-line no-use-before-define
import React from 'react';

import PostsGrid from '../Posts/PostsGrid';
import { IPost } from '../../interfaces';
import styles from './FeaturedPosts.module.css';

interface Props {
  posts: IPost[];
}

const FeaturedPosts: React.FC<Props> = ({ posts }) => (
  <section className={styles.latest}>
    <h2>Featured Posts</h2>
    <PostsGrid posts={posts} />
  </section>
);

export default FeaturedPosts;
