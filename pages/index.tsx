/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import Head from 'next/head';

import { InferGetStaticPropsType } from 'next';
import Hero from '../components/HomePage/Hero';
import FeaturedPosts from '../components/HomePage/FeaturedPosts';
import { IPost } from '../interfaces';

import { getFeaturedPosts } from '../lib/posts-util';

export const getStaticProps = async () => {
  const featuredPosts: IPost[] = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 1800,
  };
};

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

export default HomePage;
