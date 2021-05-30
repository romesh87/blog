import AllPosts from '../../components/Posts/AllPosts';

const DUMMY_POSTS = [
  {
    slug: 'getting-started-with-nextjs',
    title: 'Getting Started with NextJS',
    image: 'getting-started-nextjs.png',
    excerpt: 'NextJS is the React framework for production.',
    date: '2021-05-30',
  },
  {
    slug: 'getting-started-with-nextjs2',
    title: 'Getting Started with NextJS',
    image: 'getting-started-nextjs.png',
    excerpt: 'NextJS is the React framework for production.',
    date: '2021-05-30',
  },
  {
    slug: 'getting-started-with-nextjs3',
    title: 'Getting Started with NextJS',
    image: 'getting-started-nextjs.png',
    excerpt: 'NextJS is the React framework for production.',
    date: '2021-05-30',
  },
  {
    slug: 'getting-started-with-nextjs4',
    title: 'Getting Started with NextJS',
    image: 'getting-started-nextjs.png',
    excerpt: 'NextJS is the React framework for production.',
    date: '2021-05-30',
  },
];

const AllPostsPage = () => (

  <AllPosts posts={DUMMY_POSTS} />

);

export default AllPostsPage;
