<script setup>
definePageMeta({
    layout: "landing",
});
</script>

<template>
    <LandingContainer>
        <main class="pt-1 antialiased">
            <LandingSectionhead>
                <template v-slot:title>News</template>
                <template v-slot:desc
                    >Soon, there will be recent news available</template
                >
            </LandingSectionhead>
        </main>
    </LandingContainer>
</template>
