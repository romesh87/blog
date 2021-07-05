import Head from 'next/head';

import Hero from '../components/HomePage/Hero';
import FeaturedPosts from '../components/HomePage/FeaturedPosts';
import { IPost } from '../interfaces';

import { getFeaturedPosts } from '../lib/posts-util';
import { InferGetStaticPropsType } from 'next';

const HomePage = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <>
    <Head>
      <title>My Blog</title>
      <meta name="description" content="programming and web development" />
    </Head>
    <Hero />
    <FeaturedPosts posts={posts} />
  </>
);

export const getStaticProps = async () => {
  const featuredPosts: IPost[] = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 1800,
  };
};

export default HomePage;
