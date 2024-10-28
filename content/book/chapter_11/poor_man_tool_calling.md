---
title: Poor Man's Tool-Calling
description: Learn how to create a simple web server that interacts with an AI model to generate function parameters and call functions based on user input.
keywords:
  - web server
  - endpoint
  - language model
  - JSON response
  - callable functions
---

In this chapter, you'll dive into the world of building a basic yet functional web server that leverages existing codebases and AI models to process user queries. You’ll start by setting up an endpoint in your web server that accepts user input and uses it to generate parameters for specific functions through an AI model.

The journey begins with creating a simple UI where users can submit their questions, which are then sent to the server's endpoint. The server interacts with a language model to produce JSON responses containing detailed instructions on how to proceed with your application’s functionality. This process involves breaking down complex user queries into manageable tasks by generating precise function parameters.

Next, you'll learn how to factor out these generated parameters into callable functions within your codebase. Each function will be responsible for executing specific actions based on the input received from the AI model. The results of these functions are then fed back into the language model to refine and finalize the response before sending it back to the user.

By following this chapter, you'll gain hands-on experience in integrating AI models with your web applications, enhancing their capabilities without requiring extensive coding knowledge or complex infrastructure. This approach not only simplifies development but also opens up new possibilities for creating intelligent, interactive interfaces that can adapt and evolve based on user needs.

Ready to see how a simple setup can unlock powerful interactions? Dive into the details of setting up endpoints, calling functions, and refining responses with AI models!