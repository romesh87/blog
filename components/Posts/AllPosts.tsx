// eslint-disable-next-line no-use-before-define
import React from 'react';

import PostsGrid from './PostsGrid';
import { IPost } from '../../interfaces';

import styles from './AllPosts.module.css';

interface Props {
  posts: IPost[];
}

const AllPosts: React.FC<Props> = ({ posts }) => (
  <section className={styles.posts}>
    <h1>All Posts</h1>
    <PostsGrid posts={posts} />
  </section>
);

export default AllPosts;
