---
title: Create Question-Answer Dataset
description: Learn how to generate and validate JSON formatted question-answer pairs for a given text using an AI model.
keywords:
  - AI
  - TypeScript
  - JSON
  - Zod
---

In this chapter, you will learn the process of creating a dataset filled with question-answer pairs. We'll guide an AI model to generate these pairs based on specific content and ensure they are in a structured JSON format that's easy to use.

You'll start by setting up a system prompt for your AI model, instructing it to create relevant questions and precise answers related only to the provided text. This ensures that the generated data is accurate and useful without any unnecessary information or assumptions from the model itself.

Next, you will write a script that uses Zod schema validation to ensure the JSON responses match our expected format. The script also includes a retry mechanism in case of errors, making it robust and reliable.

Finally, you'll store these question-answer pairs along with their embeddings for efficient searching later on. This chapter is all about automating the creation of valuable QA datasets that can be used to enhance user interactions or improve knowledge bases.