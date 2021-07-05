import PostsGrid from '../Posts/PostsGrid';
import { IPost } from '../../interfaces';
import styles from './FeaturedPosts.module.css';


interface Props {
  posts: IPost[];
}

const FeaturedPosts = ({ posts }: Props) => (
  <section className={styles.latest}>
    <h2>Featured Posts</h2>
    <PostsGrid posts={posts} />
  </section>
);

export default FeaturedPosts;
