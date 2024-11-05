<script setup>
definePageMeta({
    layout: "landing",
});
</script>

<template>
    <LandingContainer>
        <main class="pt-1 antialiased">
            <LandingSectionhead>
                <template v-slot:title>Get The Book</template>
                <template v-slot:desc
                    >Buy the book directly from the author or at your preferred
                    book shop.</template
                >
            </LandingSectionhead>
            <div class="max-w-2xl m-auto">
                <LandingWaitlist />
            </div>
        </main>
    </LandingContainer>
</template>
