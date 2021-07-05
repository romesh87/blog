import styles from './AllPosts.module.css';
import { IPost } from '../../interfaces';
import PostsGrid from './PostsGrid';

interface Props {
  posts: IPost[];
}

const AllPosts = ({ posts }: Props) => (
  <section className={styles.posts}>
    <h1>All Posts</h1>
    <PostsGrid posts={posts} />
  </section>
);

export default AllPosts;
