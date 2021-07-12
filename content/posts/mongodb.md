---
title: 'MongoDB'
date: '2021-7-8'
image: mongodb.png
excerpt: MongoDB is a general purpose, document-based, distributed database built for modern application developers and for the cloud era.
isFeatured: true
---

**MongoDB** is a document database, which means it stores data in JSON-like documents. This is the most natural way to think about data, and is much more expressive and powerful than the traditional row/column model.


## Rich JSON Documents
- The most natural and productive way to work with data.
- Supports arrays and nested objects as values.
- Allows for flexible and dynamic schemas.

``` js
{
  "_id": "5cf0029caff5056591b0ce7d",
  "firstname": "John",
  "lastname": "Doe",
  "address": {
    "street": "606 Pin Oak Circle",
    "city": "South Bend",
    "state": "IN",
    "zip": "45405"
  },
  "hobbies": ["coding", "sports"]
}
```


## Powerful query language
- Rich and expressive query language that allows you to filter and sort by any field, no matter how nested it may be within a document.
- Support for aggregations and other modern use-cases such as geo-based search, graph search, and text search.
- Queries are themselves *JSON*, and thus easily composable. No more concatenating strings to dynamically generate *SQL* queries.

``` bash
db.users.find({ "address.zip" : "45405" })
{ "_id": "5cf0029caff5056591b0ce7d", "firstname": "John", "lastname": "Doe", "address": { "zip": "45405" } }
{ "_id": "507f1f77bcf86cd799439011", "firstname": "Jon", "lastname": "Davis", "address": { "zip": "45405" } }
{ "_id": "5349b4ddd2781d08c09890f3", "firstname": "Jim", "lastname": "White", "address": { "zip": "45405" } }
{ "_id": "5bf142459b72e12b2b1b2cd", "firstname": "Jeff", "lastname": "Taylor", "address": { "zip": "45405" } }
{ "_id": "5cf003283b23d04a40d5f88a", "firstname": "Jerry", "lastname": "Miller", "address": { "zip": "45405" } }
```


## All the power of a relational database, and more...
- Distributed multi-document ACID transactions with snapshot isolation.
- Support for joins in queries.
- Two types of relationships instead of one: reference and embedded.