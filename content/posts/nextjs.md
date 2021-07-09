---
title: 'NextJS'
date: '2021-7-9'
image: nextjs.png
excerpt: Next.js is React framework that gives you the best developer experience with all the features you need for production - hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more.
isFeatured: true
---

To build a complete web application with *React* from scratch, there are many important details you need to consider:

- Code has to be bundled using a bundler like *webpack* and transformed using a compiler like *Babel*.
- You need to do production optimizations such as code splitting.
- You might want to statically pre-render some pages for performance and SEO. You might also want to use server-side rendering or client-side rendering.
- You might have to write some server-side code to connect your *React* app to your data store.
A framework can solve these problems. But such a framework must have the right level of abstraction — otherwise it won’t be very useful. It also needs to have great *Developer Experience*, ensuring you and your team have an amazing experience while writing code.

## Next.js: The React Framework
Enter **Next.js**, the *React Framework*. **Next.js** provides a solution to all of the above problems. But more importantly, it puts you and your team in the pit of success when building *React* applications.

**Next.js** aims to have best-in-class developer experience and many built-in features, such as:

- An intuitive page-based routing system (with support for dynamic routes)
- Pre-rendering, both *static generation* (SSG) and *server-side rendering* (SSR) are supported on a per-page basis
- Automatic *code splitting* for faster page loads
- Client-side routing with *optimized prefetching*
- Built-in *CSS* and *Sass* support, and support for any *CSS-in-JS* library
- Development environment with *Fast Refresh* support
- API routes to build API endpoints with *Serverless Functions*
- Fully extendable
- **Next.js** is used in tens of thousands of production-facing websites and web applications, including many of the world's largest brands.

### Create a Next.js app
To create a *Next.js app*, open your terminal, **cd** into the directory you’d like to create the app in, and run the following command:
``` bash
npx create-next-app nextjs-blog --use-npm --example "https://github.com/vercel/next-learn-starter/tree/master/learn-starter"
```