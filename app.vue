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
    title: "Build Your Own GPT-like AI",
    ogTitle: "Build Your Own GPT-like AI",
    description: "Learn how to build your own GPT-like AI and keep the understanding how large language models, RAG and function calling are working.",
    ogDescription: "Learn how to build your own GPT-like AI and keep the understanding how large language models, RAG and function calling are working.",
    ogImage: "https://buildown.ai/og.jpg",
    twitterCard: "summary_large_image",
    twitterSite: "@buildownai",
    twitterCreator: "@swessel78"
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
