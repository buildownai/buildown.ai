---
title: Project Knowledge
description: Learn how to equip your AI chat system with essential knowledge about projects and specific files within them.
keywords:
  - project knowledge
  - general knowledge
  - file structure
  - package.json
  - retrieval-augmented generation (RAG)
  - abstract syntax tree (AST)
---

In this chapter, you'll discover how to give your AI chat system a solid foundation of understanding about the projects it will be working on. We’ll cover two main areas: general project knowledge and per-file knowledge.

Firstly, we'll explore how to gather basic information such as the programming language used, overall structure, framework details, and more. This foundational data helps the AI understand the context of each project right from the start. You'll learn practical methods for extracting this information automatically from files like `package.json` and by analyzing the file structure.

Next, we delve into creating detailed summaries for individual source files within a project. We’ll discuss different approaches to indexing these files, including chunking and embedding code snippets versus generating abstract syntax trees (ASTs). You'll also see how using large language models to summarize each file can provide more relevant information for user queries.

By the end of this chapter, you'll have the tools to make your AI chat system smarter and more helpful in real-world development scenarios. Dive into the details and start building a knowledgeable assistant today!