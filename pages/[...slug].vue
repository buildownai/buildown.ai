<script setup lang="ts">
definePageMeta({
    layout: "landing",
});
const error = useError();
</script>

<template>
    <LandingContainer>
        <main class="pt-8 pb-16 lg:pt-16 lg:pb-24 antialiased">
            <div class="flex justify-between px-4 mx-auto max-w-screen-xl">
                <article
                    class="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue prose"
                >
                    <ContentDoc :path="$route.path">
                        <template v-slot="{ doc }">
                            <LandingSectionhead>
                                <template v-slot:title>{{
                                    doc.title
                                }}</template>
                                <template v-slot:desc>Get The Book</template>
                            </LandingSectionhead>
                            <ContentRenderer :value="doc" />
                        </template>
                        <template #not-found>
                            <LandingNotfound></LandingNotfound>
                        </template>
                    </ContentDoc>
                </article>
            </div>
        </main>
    </LandingContainer>
</template>
