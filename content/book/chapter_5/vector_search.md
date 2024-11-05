---
title: Vector Search
description: Learn how to create and use embedding vectors for documents to enable efficient vector search.
keywords:
  - vector search
  - embeddings
  - chunking documents
  - cosine similarity
---

In this chapter, you'll dive into the world of vector search, a powerful technique used in AI applications. You’ll learn how to break down large documents into smaller chunks and create embedding vectors for each piece. These vectors are then stored in a database, allowing you to quickly find relevant information when users ask questions.

We start by understanding why chunking is essential—handling large documents can be tricky! By splitting them into manageable parts, we ensure that only the most relevant sections are considered during searches. You’ll see how easy it is to implement this with just a few lines of code using tools like LlamaIndex and SurrealDB.

Next, you'll learn about creating embeddings for these chunks. We’ll explore why choosing the right model matters and how different models handle various types of content, such as informal chat conversations with emojis. You’ll also see how to integrate an API call to generate embeddings efficiently.

Once your documents are chunked and embedded, it’s time to store them in a database. Here, we’ll set up SurrealDB and create a search index specifically for embedding vectors. This step is crucial for enabling fast and accurate searches based on similarity.

Finally, you'll discover how to retrieve the most relevant chunks when users ask questions. By converting user queries into embeddings and using cosine similarity, you can find the closest matches in your database. The chapter concludes with practical steps to test everything out and verify that your system works as expected.

Ready to build a smarter search engine for your documents? Dive in and see how vector search can transform the way you handle information!