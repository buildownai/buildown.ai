<script setup>
definePageMeta({
    layout: "landing",
});
</script>

<template>
    <LandingContainer>
        <main class="pt-1 antialiased">
            <LandingSectionhead>
                <template v-slot:title>Resources</template>
                <template v-slot:desc
                    >Here You will find useful resources soon</template
                >
            </LandingSectionhead>
        </main>
    </LandingContainer>
</template>
