// eslint-disable-next-line no-use-before-define
import React from 'react';

import PostItem from './PostItem';
import { IPost } from '../../interfaces';

import styles from './PostsGrid.module.css';

interface Props {
  posts: IPost[];
}

const PostsGrid: React.FC<Props> = ({ posts }) => (
  <ul className={styles.grid}>
    {posts.map((post) => <PostItem key={post.slug} post={post} />)}
  </ul>
);

export default PostsGrid;
