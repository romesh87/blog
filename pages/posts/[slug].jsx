import PostContent from '../../components/Posts/PostDetail/PostContent';

import { getPostData, getPostsFiles } from '../../lib/posts-util';

const PostDetailPage = ({ post }) => (
  <PostContent post={post} />
);

export const getStaticProps = (context) => {
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
      ravalidate: 600,
    },
  };
};

export const getStaticPaths = () => {
  const postFilenames = getPostsFiles();

  const slugs = postFilenames.map((filename) => filename.replace(/\.md$/, ''));

  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
};

export default PostDetailPage;
