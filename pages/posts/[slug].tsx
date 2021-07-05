import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import Head from 'next/head';

import PostContent from '../../components/Posts/PostDetail/PostContent';
import { getPostData, getPostsFiles } from '../../lib/posts-util';

const PostDetailPage = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <>
    <Head>
      <title>{post.title}</title>
      <meta name="description" content={post.excerpt} />
    </Head>
    <PostContent post={post} />
  </>
);

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const { params } = context;
  const slug = params.slug;

  const postData = getPostData(String(slug));

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
