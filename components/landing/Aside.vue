<template>
    <aside v-if="enabled">
        <!-- <LandingSearch></LandingSearch> -->
        <nav class="md:pt-20">
            <ul>
                <li v-for="link in tree" :key="link.id" class="mt-2">
                    <NuxtLink
                        :to="link._path"
                        class="block hover:font-semibold"
                        :class="
                            path === link._path
                                ? 'font-bold text-sky-950 hover:text-sky-950'
                                : 'hover:text-sky-500 text-sky-800'
                        "
                    >
                        {{ link.title }}
                    </NuxtLink>
                    <ul v-if="link.children" class="mt-1">
                        <template v-for="child in link.children">
                            <li v-if="child._path !== link._path" class="mt-1">
                                <NuxtLink
                                    :to="child._path"
                                    class="block pl-2 hover:font-semibold"
                                    :class="
                                        path === child._path
                                            ? 'font-bold text-sky-950 hover:text-sky-950'
                                            : 'text-sky-500 hover:text-sky-800'
                                    "
                                >
                                    {{ child.title }}
                                </NuxtLink>
                            </li>
                        </template>
                    </ul>
                </li>
            </ul>
        </nav>
    </aside>
</template>

<script setup lang="ts">
const { navDirFromPath } = useContentHelpers();
const { navigation } = useContent();

const tree = computed(() => {
    const route = useRoute();
    const path = route.path.split("/");
    if (true) {
        const leveledPath = path.splice(0, 2).join("/");

        const dir = navDirFromPath(leveledPath, navigation.value);
        return dir ?? [];
    }

    return navigation.value ?? [];
});

const enabled = computed(() => tree.value.length > 0);
const path = useRoute().path;
</script>
