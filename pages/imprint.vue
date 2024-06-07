<script setup lang="ts">
definePageMeta({
    layout: "landing",
});
</script>

<template>
    <LandingContainer>
        <main class="pt-1 antialiased">
            <LandingSectionhead>
                <template v-slot:title>Imprint</template>
            </LandingSectionhead>

            <div class="grid md:grid-cols-2 gap-10 mx-auto max-w-4xl mt-16">
                <div>
                    <h2 class="font-medium text-2xl text-gray-800">
                        Publisher
                    </h2>
                    <p class="text-lg leading-relaxed text-slate-800 mt-3">
                        Sebastian Wessel
                    </p>
                    <div class="mt-5">
                        <div
                            class="flex items-center mt-2 space-x-2 text-gray-600"
                        >
                            <Icon
                                class="text-gray-400 w-4 h-4"
                                name="uil:map-marker"
                            />
                            <span>Finkenweg 4b, 63477 Alzenau, Germany</span>
                        </div>
                        <div
                            class="flex items-center mt-2 space-x-2 text-gray-600"
                        >
                            <Icon
                                class="text-gray-400 w-4 h-4"
                                name="uil:envelope"
                            /><a href="mailto:mail@buildown.ai"
                                >mail@buildown.ai</a
                            >
                        </div>
                        <div
                            class="flex items-center mt-2 space-x-2 text-gray-600"
                        >
                            <Icon
                                class="text-gray-400 w-4 h-4"
                                name="uil:phone"
                            /><a href="tel:+4915225348103"
                                >+49 (152) 253 48103</a
                            >
                        </div>
                    </div>
                </div>
                <div>
                    <LandingContactform />
                </div>
            </div>
        </main>
    </LandingContainer>
</template>
