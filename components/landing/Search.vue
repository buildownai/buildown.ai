<template>
    <div @click="handleClickOutside" class="relative">
        <div class="relative w-full">
            <div
                class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
            >
                <Icon name="carbon:search" class="text-gray-400" />
            </div>
            <input
                v-model="query"
                class="block p-2 pl-9 w-full text-sm rounded-lg border focus:border-primary-500 border-gray-200 placeholder-gray-400 focus:ring-primary-500 focus:border-primary-500"
                @input="onInput"
                type="text"
                placeholder="Search..."
                required=""
                ref="barInput"
            />
        </div>
    </div>
    <div
        v-if="showOverlay"
        style="z-index: 1000"
        class="absolute inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center w-screen h-screen top-0 left-0 right-0"
    >
        <div class="bg-white p-4 rounded shadow-lg w-3/4 max-w-lg" @click.stop>
            <input
                v-model="query"
                type="text"
                placeholder="Search..."
                class="w-full p-2 mb-4 border border-gray-300 rounded"
                autofocus
                ref="overlayInput"
            />
            <div v-if="results.length">
                <div
                    v-for="result in results"
                    :key="result.id"
                    class="p-2 border-b border-gray-200"
                >
                    {{ result.title }}
                </div>
            </div>
            <div v-else>
                <p class="text-gray-500">No results found.</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onBeforeUnmount } from "vue";

const query = ref("");
const showOverlay = ref(false);
const results = ref([]);
const overlayInput = ref(null);
const barInput = ref(null);

const onInput = () => {
    showOverlay.value = true;
    nextTick(() => {
        overlayInput?.value.focus();
    });
};

const fetchResults = async (query) => {
    const searchRes = await searchContent(query);
    results.value = searchRes.value;
};

const closeOverlay = () => {
    showOverlay.value = false;
    query.value = "";
    results.value = [];
};

const handleKeyDown = (event) => {
    if (event.key === "Escape") {
        closeOverlay();
    }
};

const handleClickOutside = (event) => {
    if (showOverlay.value && !event.target.closest(".bg-white")) {
        closeOverlay();
    }
};

watch(query, (newQuery) => {
    if (newQuery) {
        fetchResults(newQuery);
    } else {
        closeOverlay();
        nextTick(() => {
            barInput?.value.focus();
        });
    }
});

onMounted(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
    document.removeEventListener("keydown", handleKeyDown);
    document.removeEventListener("click", handleClickOutside);
});
</script>

<style scoped>
/* Add any additional custom styles here */
</style>
