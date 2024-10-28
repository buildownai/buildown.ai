---
title: Create Question-Answer Dataset
description: Learn how to generate and validate JSON-formatted question-answer pairs for a given text using an AI model.
keywords:
  - AI
  - dataset creation
  - question-answer generation
  - TypeScript
  - Zod schema validation
---

In this chapter, you'll dive into the process of creating a valuable dataset by generating question-answer pairs from provided content. We will guide an AI model to produce these pairs in JSON format, ensuring they adhere to specific criteria and can be easily integrated into your application.

You’ll start by crafting a system prompt that instructs the AI on how to generate relevant questions and precise answers based solely on the given text. This involves setting clear rules for the AI, such as focusing only on the content related to the framework and avoiding any assumptions or external knowledge.

Next, you'll explore how to validate these responses using Zod schema validation, ensuring that the JSON structure matches your expectations. You’ll also learn about implementing a retry mechanism in case of errors during the generation process.

Finally, you will store the generated question-answer pairs along with their embeddings for efficient search and retrieval later on. This chapter provides a comprehensive guide to setting up this system, including creating vector search indexes for quick access to relevant information.

Join us as we walk through each step, from crafting prompts to validating responses and storing data efficiently. By the end of this chapter, you'll have a robust dataset ready to enhance your application's context and user experience.