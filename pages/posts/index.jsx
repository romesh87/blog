import AllPosts from '../../components/Posts/AllPosts';

import { getAllPosts } from '../../lib/posts-util';

const AllPostsPage = ({ posts }) => (

  <AllPosts posts={posts} />

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
