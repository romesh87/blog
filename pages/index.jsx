import Head from 'next/head';

import Hero from '../components/HomePage/Hero';
import FeaturedPosts from '../components/HomePage/FeaturedPosts';

import { getFeaturedPosts } from '../lib/posts-util';

const HomePage = ({ posts }) => (
  <>
    <Head>
      <title>My Blog</title>
      <meta name="description" content="programming and web development" />
    </Head>
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
