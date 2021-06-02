import Hero from '../components/HomePage/Hero';
import FeaturedPosts from '../components/HomePage/FeaturedPosts';

import { getFeaturedPosts } from '../lib/posts-util';

const HomePage = ({ posts }) => (
  <>
    <Hero />
    <FeaturedPosts posts={posts} />
  </>
);

export const getStaticProps = () => {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 1800,
  };
};

export default HomePage;
