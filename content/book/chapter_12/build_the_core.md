---
title: Build the Core
description: Learn how to set up your AI application's core components, including frontend and backend development.
keywords:
  - AI application
  - frontend development
  - backend development
  - chat functionality
---

Welcome to the chapter where we dive into building the heart of our AI application! In this part, you'll learn how to prepare for developing a robust system that includes both frontend and backend components. We’ll start by setting up your project structure and then focus on creating the core chat feature.

## Preparation

Before diving in, we need to lay down the groundwork. This involves organizing your project as a monorepo and focusing primarily on the chat functionality. You'll create a backend endpoint for handling chat requests and develop a corresponding frontend interface that uses Server-Sent Events (SSE) for real-time communication.

## Frontend

Developing the frontend is made easier with pre-built component templates available at [www.langui.dev](https://www.langui.dev). These components are styled using Tailwind CSS, making them easy to integrate into your project. We’ll use SSE in our Vue.js application to handle chat messages efficiently and provide a smooth user experience.

## Backend

On the backend side, we'll utilize Hono framework along with Zod OpenAPI for defining API routes. You will implement an endpoint that handles chat requests using Server-Sent Events (SSE) to stream responses back to the client. This chapter also covers how to integrate your backend with AI provider APIs and handle tool calls.

## Project Handling

Managing projects within our application is straightforward. Users can add new projects by providing a Git repository URL, which gets cloned locally. Each project has its own unique ID and corresponding database entry, allowing for simple CRUD operations on the backend API.

## Access Control

For access control, we’ll implement JWT tokens to secure our backend API endpoints. This includes creating login and refresh token endpoints in the backend and ensuring that the frontend handles these tokens correctly for protected routes like chat requests.

## Limitations

To keep things manageable, this chapter outlines certain limitations such as single-user projects without sharing capabilities or comprehensive security measures. These constraints help focus on essential components and steps needed to build a functional AI application.

Ready to dive into building your core AI application? Let's get started!