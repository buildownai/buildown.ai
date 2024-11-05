---
title: Accessing the Knowledge Graph
description: Learn how to retrieve and format information from your knowledge graph for use in AI applications.
keywords:
  - knowledge graph
  - database retrieval
  - surrealdb
  - surrealql
  - entity relations
---

In this chapter, you'll discover how to access and utilize your knowledge graph. We’ll start by exploring how to retrieve information from a database using SQL-like queries in SurrealDB. You will learn how to fetch entities and their relationships efficiently.

## Retrieving from Database

Here, we dive into fetching data directly from the database. You'll see examples of retrieving an entity's properties and its relations with other nodes. We’ll also cover combining these queries to get a comprehensive view of interconnected entities within your system.

## Creating the Context

Next, you will learn how to format this retrieved information into a structured text that can be easily used by language models. This involves writing TypeScript functions to query the database and generate markdown-formatted strings representing entity details and their relationships.

## The Big Question

Finally, we tackle the challenge of extracting relevant entities from user queries. We’ll discuss several approaches including creating search mechanisms, extending question-answer pairs with entities, using an intermediate language model step, and exploring tool calling in future chapters to integrate your knowledge graph seamlessly into AI applications.

Ready to dive deeper into accessing your knowledge graph? Let's get started!