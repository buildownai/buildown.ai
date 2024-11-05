<script setup lang="ts">
useHead({
    title: "BuildOwn.AI",
  meta: [{ name: "description", content: "Learn how to build your own Real-World AI Applications and keep the understanding how large language models, RAG, tool calling and agents are working" }],
    bodyAttrs: {
        class: "test",
    },
    script: [],
});
useSeoMeta({
    author:"Sebastian Wessel",
    copyright:`Copyright © ${ new Date().getFullYear() } Sebastian Wessel`,
    title: "Build Your Own AI",
    ogTitle: "Build Your Own AI",
    description: "The Developers’s Guide to Build Real-World AI Applications",
    ogDescription: "The Developers’s Guide to Build Real-World AI Applications",
    ogImage: "https://buildown.ai/og.jpg",
    twitterImage: "https://buildown.ai/og.jpg",
    twitterImageAlt: "Build Your Own AI",
    twitterCard: "summary_large_image",
    twitterSite: "@buildownai",
    twitterCreator: "@swessel78",
    bookAuthor:"Sebatian Wessel",
    bookTag:["ai","llm","large language model","gpt","guide","tutorial","programming","typescript","llama","chat","bot","guide","development"]
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
