---
title: 'ExpressJS'
date: '2021-7-10'
image: expressjs.png
excerpt: Fast, unopinionated, minimalist web framework for NodeJS. It is free and open-source and is used for designing and building web applications quickly and easily.
isFeatured: true
---

## Introducing Express

**Express** is the most popular *Node* web framework, and is the underlying library for a number of other popular *Node* web frameworks. It provides mechanisms to:

- Write handlers for requests with different HTTP verbs at different URL paths (routes).
- Integrate with "view" rendering engines in order to generate responses by inserting data into templates.
- Set common web application settings like the port to use for connecting, and the location of templates that are used for rendering the response. 
- Add additional request processing *middleware* at any point within the request handling pipeline.

While **Express** itself is fairly minimalist, developers have created compatible middleware packages to address almost any web development problem. There are libraries to work with cookies, sessions, user logins, URL parameters, POST data, security headers, and many more. You can find a list of middleware packages maintained by the **Express** team at [Express Middleware](https://expressjs.com/en/resources/middleware.html) (along with a list of some popular 3rd party packages).

## Hello world example
``` js
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
```