import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';

import AllPosts from '../../components/Posts/AllPosts';
import { getAllPosts } from '../../lib/posts-util';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getStaticProps = async () => {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
    revalidate: 1800,
  };
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const AllPostsPage = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <>
    <Head>
      <title>All posts</title>
      <meta name="description" content="A list of all posts related to web development" />
    </Head>
    <AllPosts posts={posts} />
  </>
);

export default AllPostsPage;
