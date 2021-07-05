import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';
import { IPost } from '../interfaces';

const postsDir = path.join(process.cwd(), 'content', 'posts');

export const getPostsFiles = (): string[] => fs.readdirSync(postsDir);

export const getPostData = (postIdentifier: string): IPost => {
  const postSlug = postIdentifier.replace(/\.md$/, ''); // removes file extension
  const filePath = path.join(postsDir, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
};

export const getAllPosts = (): IPost[] => {
  const postFiles = getPostsFiles();

  const allPosts = postFiles.map((postFile) => getPostData(postFile));

  const sortedPosts = allPosts.sort((postA, postB) => (postA.date > postB.date ? -1 : 1));

  return sortedPosts;
};

export const getFeaturedPosts = (): IPost[] => {
  const allPosts = getAllPosts();

  const featuredPosts = allPosts.filter((post) => post.isFeatured);

  return featuredPosts;
};
