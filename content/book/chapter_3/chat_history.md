---
title: Add Chat History
description: Learn how to implement chat functionality in your application by maintaining and sending message history to a language model.
keywords:
  - chat history
  - large language models
  - conversation context
---

Welcome to the chapter on adding chat history! In this part, you'll discover how to enhance your simple messaging app into a full-fledged chat system. We’ll dive into the details of maintaining and sending message history to a large language model (LLM) so that it can provide more informed and contextually relevant responses.

Here’s what you can expect:

- **Implementing History Handling**: You'll learn how to store messages in an array, ensuring each message is tagged with its sender's role—whether the user or the assistant. This step is crucial for maintaining conversation continuity.
  
- **Updating Your Code**: We’ll walk through modifying your existing code to include chat history functionality. This involves sending the entire conversation history along with new messages to the LLM.

- **Displaying Chat History**: You'll see how to render the chat history in a user-friendly format, allowing users to view their past interactions and responses from the AI.

- **Understanding Conversation Roles**: We’ll explore different roles such as `user`, `assistant`, and `system` that help the model understand who is speaking and what type of message it is handling. This distinction is key for maintaining context in conversations.

- **Choosing Between Generate and Chat Endpoints**: You'll learn about the differences between these endpoints, understanding when to use each one based on your application's needs. The `generate` endpoint works well for quick responses without context, while the `chat` endpoint excels at handling complex dialogues with historical context.

By the end of this chapter, you’ll have a solid grasp of how to implement chat history in your applications, making them more interactive and user-friendly. Dive in and see how easy it is to enhance your app’s conversational capabilities!