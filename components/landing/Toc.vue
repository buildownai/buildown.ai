<template>
    <aside v-if="enabled" class="pt-20">
        <div class="font-bold mb-5">On his page:</div>
        <nav class="">
            <ul>
                <li v-for="(link, i) in links" :key="i">
                    <NuxtLink
                        :href="'#' + link.id"
                        target="_self"
                        class="block pb-2 hover:font-semibold text-sky-500 hover:text-sky-800"
                    >
                        {{ link.text }}
                    </NuxtLink>
                </li>
            </ul>
        </nav>
    </aside>
</template>

<script setup lang="ts">
const { toc } = useContent();
const links = toc.value?.links ?? [];
const enabled = computed(() => links.length > 0);
</script>
