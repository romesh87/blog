import PostsGrid from '../Posts/PostsGrid';

import styles from './FeaturedPosts.module.css';

const FeaturedPosts = ({ posts }) => (
  <section className={styles.latest}>
    <h2>Featured Posts</h2>
    <PostsGrid posts={posts} />
  </section>
);

export default FeaturedPosts;
