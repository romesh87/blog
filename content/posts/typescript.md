---
title: TypeScript
excerpt: TypeScript is a language for application-scale JavaScript. TypeScript adds optional types to JavaScript that support tools for large-scale JavaScript applications for any browser, for any host, on any OS.
image: typescript.png
isFeatured: false
date: '2021-7-6'
---

## JavaScript and More
- **TypeScript** is an open-source language which builds on *JavaScript*, one of the world’s most used tools, by adding static type definitions.

- Types provide a way to describe the shape of an object, providing better documentation, and allowing **TypeScript** to validate that your code is working correctly.

- Writing types can be optional in **TypeScript**, because type inference allows you to get a lot of power without writing additional code.

## A Result You Can Trust
- All valid *JavaScript* code is also **TypeScript** code. You might get type-checking errors, but that won't stop you from running the resulting JavaScript. While you can go for stricter behavior, that means you're still in control.

- **TypeScript** code is transformed into *JavaScript* code via the **TypeScript** compiler or *Babel*. This *JavaScript* is clean, simple code which runs anywhere *JavaScript* runs: In a browser, on *Node.JS* or in your apps.

## Gradual Adoption
- Adopting **TypeScript** is not a binary choice, you can start by annotating existing JavaScript with *JSDoc*, then switch a few files to be checked by **TypeScript** and over time prepare your codebase to convert completely.

- **TypeScript’s** type inference means that you don’t have to annotate your code until you want more safety. 

## Code example
``` ts
interface Point {
  x: number;
  y: number;
}

function logPoint(p: Point) {
  console.log(`${p.x}, ${p.y}`);
}

// logs "12, 26"
const point = { x: 12, y: 26 };
logPoint(point);
```