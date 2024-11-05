---
title: Fact Agent
description: Learn how to create a dedicated agent for extracting and managing project facts in your AI application.
keywords:
  - fact-agent
  - project-facts
  - ai-assistant
---

In this chapter, you'll discover the magic of creating a specialized agent designed to extract and manage factual information about your project. This Fact Agent acts as a smart librarian, collecting precise details from user interactions and storing them in a separate part of your application's global state.

By decoupling these facts from the conversational flow, you ensure that other parts of your system can easily access this clean, structured data. You'll see how to integrate this agent into your existing workflow by modifying your `getTheAnswer.ts` file and implementing the `updateFactsAgent`. This involves crafting a clear prompt for your language model to extract facts accurately without any interpretation or assumptions.

Once you have these facts stored, you can enhance other agents like `updateDescriptionAgent`, making them more informed and precise. You'll also learn how to visualize and understand the flow of information in your application with diagrams, ensuring that each part works seamlessly together.

Join us as we dive into this exciting chapter and make your AI application smarter and more efficient!