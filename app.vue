<script setup lang="ts">
useHead({
    title: "BuildOwn.AI",
    meta: [{ name: "description", content: "Learn how to build your own GPT-like AI and keep the understanding how large language models, RAG and function calling are working" }],
    bodyAttrs: {
        class: "test",
    },
    script: [],
});
useSeoMeta({
    author:"Sebastian Wessel",
    copyright:`Copyright © ${ new Date().getFullYear() } Sebastian Wessel`,
    title: "Build Your Own GPT-like AI",
    ogTitle: "Build Your Own GPT-like AI",
    description: "Learn how to build your own GPT-like AI and keep the understanding how large language models, RAG and function calling are working.",
    ogDescription: "Learn how to build your own GPT-like AI and keep the understanding how large language models, RAG and function calling are working.",
    ogImage: "https://buildown.ai/og.jpg",
    twitterImage: "https://buildown.ai/og.jpg",
    twitterImageAlt: "Build Your Own GPT-like AI",
    twitterCard: "summary_large_image",
    twitterSite: "@buildownai",
    twitterCreator: "@swessel78",
    bookAuthor:"Sebatian Wessel",
    bookTag:["ai","llm","large language model","gpt","guide","tutorial","programming","typescript","llama","chat","bot"]
});
</script>

<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<style>
main {
    min-height: calc(100vh - 80px);
    margin-top: 80px;
}
</style
