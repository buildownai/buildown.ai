<script setup lang="ts">
const menuitems = [
    {
        title: "The Book",
        path: "/",
    },
    {
      title: "Buy",
      path: "/buy",
      description:
        "Buy the book at this website or at your preferred book store",
      icon: "carbon:store",
    },
    {
      title: "Preview",
      path: "/book",
      description: "View the summarized content of the book",
      icon: "carbon:book",
    },
    {
      title: "Showcase",
      path: "/showcase",
    },
    {
      title: "Resources",
      path: "/resources",
    },
];

const routePath = computed(() => {
    const current = useRoute();
    return current.path;
});

const open = ref(false);
</script>

<template>
    <LandingContainer>
        <div
            class="fixed inset-x-0 top-0 px-5"
            style="z-index: 999"
            id="top-nav-wrapper"
        >
            <header
                class="flex flex-col lg:flex-row justify-between items-center mt-5 max-w-screen-xl mx-auto my-5"
            >
                <div class="flex w-full lg:w-auto items-center justify-between">
                    <a href="/" class="text-lg"
                        ><span class="font-bold text-slate-800">Build</span
                        ><span class="text-slate-500">Own</span
                        ><span class="font-bold text-slate-800">.AI</span>
                    </a>
                    <div class="block lg:hidden">
                        <button @click="open = !open" class="text-gray-800">
                            <svg
                                fill="currentColor"
                                class="w-4 h-4"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <title>Menu</title>
                                <path
                                    v-show="open"
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 111.414 1.414l-4.828 4.829 4.828 4.828z"
                                ></path>
                                <path
                                    v-show="!open"
                                    fill-rule="evenodd"
                                    d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"
                                ></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <nav
                    class="w-full lg:w-auto mt-2 lg:flex lg:mt-0"
                    :class="{ block: open, hidden: !open }"
                >
                    <ul class="flex flex-col lg:flex-row lg:gap-3">
                        <li v-for="item of menuitems">
                            <div
                                v-if="item.children"
                                class="dropdown cursor-pointer flex items-center"
                            >
                                <a
                                    :href="item.path"
                                    class="flex lg:px-3 py-2 text-gray-600 hover:text-gray-900"
                                    :class="routePath === item.path
                                            ? 'font-bold border-b-2 border-slate-600'
                                            : ''
                                    "
                                >
                                    {{ item.title }}
                                </a>
                                <div class="rounded-md drop-shadow-md flex">
                                    <div
                                        class="dropdown-menu absolute w-max bg-white border border-slate-300 rounded-lg shadow-xl mt-5 -ml-48 hidden sm:mr-24 md:mr-32 lg:mr-48 xl:mr-64s p-2"
                                    >
                                        <div class="columns-2 gap-12">
                                            <div
                                                v-for="sub of item.children"
                                                class="p-3 mb-3 hover:bg-slate-100 rounded-lg"
                                            >
                                                <a
                                                    :href="sub.path"
                                                    class="block w-52 text-gray-600 hover:text-gray-900"
                                                >
                                                    <div
                                                        class="text-black mb-1"
                                                    >
                                                        <Icon
                                                            v-if="sub.icon"
                                                            :name="sub.icon"
                                                            class="inline-block text-xl mr-1"
                                                        />
                                                        {{ sub.title }}
                                                    </div>
                                                    <div
                                                        class="text-slate-500 text-sm"
                                                    >
                                                        {{ sub.description }}
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a
                                v-else
                                :href="item.path"
                                class="flex lg:px-3 py-2 text-gray-600 hover:text-gray-900"
                                :class="
                                    item.path.startsWith(routePath) &
                                    (routePath !== '/')
                                        ? 'font-bold border-b-2 border-slate-600'
                                        : ''
                                "
                            >
                                {{ item.title }}
                            </a>
                        </li>
                    </ul>
                    <div></div>

                    <div class="lg:hidden flex items-center mt-3 gap-4">
                        <a
                            href="https://x.com/buildownai"
                            target="_blank"
                            class="text-2xl"
                            title="Follow on twitter"
                            ><Icon name="pajamas:twitter"
                        /></a>
                        <a
                            href="https://github.com/buildownai"
                            target="_blank"
                            class="text-2xl"
                            title="GitHub Repository"
                            ><Icon name="pajamas:github"
                        /></a>
                    </div>
                </nav>
                <div>
                    <div class="hidden lg:flex items-center gap-4">
                        <a
                            href="https://x.com/buildownai"
                            target="_blank"
                            class="text-2xl"
                            title="Follow on twitter"
                            ><Icon name="pajamas:twitter"
                        /></a>
                        <a
                            href="https://github.com/buildownai"
                            target="_blank"
                            class="text-2xl"
                            title="GitHub Repository"
                            ><Icon name="pajamas:github"
                        /></a>
                    </div>
                </div>
            </header>
        </div>
    </LandingContainer>
</template>

<style scoped>
#top-nav-wrapper {
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(10px) !important;
    -webkit-backdrop-filter: blur(10px) !important;
}

.dropdown:hover .dropdown-menu {
    display: block;
}
</style>
