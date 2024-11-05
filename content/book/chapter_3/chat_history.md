---
title: Add Chat History
description: Learn how to implement chat functionality in your application by maintaining and sending message history to a language model.
keywords:
  - chat history
  - large language models
  - conversation context
---

In this chapter, you will learn how to enhance your simple messaging app with chat history. We'll dive into the steps needed to remember past messages and send them along with new ones to the language model for more coherent responses.

You’ll start by defining a `Message` type that keeps track of who sent each message (user or assistant) and its content. Then, you will maintain an array called `messages` to store all conversation history. This allows us to pass the entire chat history to the `/api/chat` endpoint when sending new messages.

Once we receive a response from the AI, it gets added back into our `messages` array with the appropriate role set as `'assistant'`. Finally, you will see how to display this chat history in your application so users can easily follow their conversation flow.

We’ll also explore the difference between using the `generate` and `chat` endpoints. The `generate` endpoint is great for quick responses without context, while the `chat` endpoint provides a more natural interaction by considering all previous messages.

Additionally, you will understand how different roles like user, assistant, system, and function help maintain conversation context within your chat application. This knowledge will enable you to build more engaging and interactive AI-driven applications that feel truly conversational.

Ready to make your app smarter with chat history? Dive in and see how easy it is!