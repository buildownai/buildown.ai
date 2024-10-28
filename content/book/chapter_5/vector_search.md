---
title: Vector Search
description: Learn how to create and use embedding vectors for documents to enable efficient vector search.
keywords:
  - vector search
  - embeddings
  - chunking
  - cosine similarity
---

In this chapter, you'll dive into the fascinating world of vector search. You’ll learn how to transform your documents into a format that allows for quick and accurate searches using embedding vectors. We’ll explore why simply reading through large files isn’t always efficient and introduce the concept of chunking—breaking down documents into smaller, manageable pieces.

You’ll also discover how to create embeddings for these chunks using powerful models like Ollama’s `nomic-embed-text:latest`, ensuring that even emojis and informal language are accurately represented. By storing these embeddings in a database with proper indexing, you'll be able to retrieve the most relevant information when users query your system.

Finally, we’ll walk through how to set up SurrealDB for efficient vector search, including creating an index specifically tailored for embedding vectors. You’ll see how to integrate this setup into a simple application that enhances user queries by providing contextually relevant chunks of text.

Ready to unlock the power of vector search and make your document retrieval system smarter? Dive in!