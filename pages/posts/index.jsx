import Head from 'next/head';

import AllPosts from '../../components/Posts/AllPosts';

import { getAllPosts } from '../../lib/posts-util';

const AllPostsPage = ({ posts }) => (
  <>
    <Head>
      <title>All posts</title>
      <meta name="description" content="A list of all posts related to web development" />
    </Head>
    <AllPosts posts={posts} />
  </>

);

export const getStaticProps = () => {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
    revalidate: 1800,
  };
};

export default AllPostsPage;
