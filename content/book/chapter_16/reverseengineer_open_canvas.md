---
title: Reverse Engineering Open Canvas
description: Learn how Open Canvas uses LangGraph to manage user interactions and maintain a clear state for better control over AI responses.
keywords: reverse engineering, open canvas, langgraph, router, state management, tool calling, explicit flows, reflection
---

In this chapter, you'll dive into the inner workings of Open Canvas, an innovative platform that leverages LangGraph to handle user queries in a controlled and predictable manner. You’ll explore how the system uses a router to determine user intent and guide interactions along predefined paths, ensuring that responses are accurate and relevant without relying on guesswork or assumptions.

You'll also discover the importance of state management in Open Canvas, which keeps track of the current context and updates it dynamically as users interact with the platform. This approach prevents issues like exponential cascading inaccuracies by maintaining a clear record of changes and their effects.

Additionally, you’ll learn about advanced history handling techniques that make conversations more robust and easier to manage. By understanding how Open Canvas structures its conversation history and uses reflection to keep state information up-to-date, you'll gain insights into building more reliable AI applications.

Finally, the chapter will guide you through the concept of paths and actions (or nodes) in LangGraph, showing how these elements work together to create complex yet controllable flows. This knowledge is essential for developers looking to build sophisticated AI systems that can handle a wide range of user interactions effectively.