<script setup>
const features = [
    {
        title: "Basic Understanding",
        description:
            "The real basics explained simple. Learn the terms and meanings, and get a solid knowldge foundation.",
        icon: "la:brain",
    },
    {
        title: "Running LLM´s local",
        description:
            "Nuxt renders your entire page to static HTML, removing all JavaScript from your final build by default.",
        icon: "bx:bxs-window-alt",
    },
    {
        title: "Prompt Engeneering",
        description:
            "Need some JS? Nuxt can automatically hydrate interactive components when they become visible on the page.  ",
        icon: "bx:bxs-data",
    },
    {
        title: "Basics of Finetuning",
        description:
            "Nuxt supports TypeScript, Scoped CSS, CSS Modules, Sass, Tailwind, Markdown, MDX, and any other npm packages.",
        icon: "bx:bxs-bot",
    },
    {
        title: "RAG",
        description:
            "Automatic sitemaps, RSS feeds, pagination and collections take the pain out of SEO and syndication. It just works!",
        icon: "bx:bxs-data",
    },
    {
        title: "Function Calling & Agents",
        description:
            "Nuxt is an open source project powered by hundreds of contributors making thousands of individual contributions.",
        icon: "bx:bxs-bot",
    },
];
</script>

<template>
    <section>
        <div
            class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6"
        >
            <img
                class="w-full scroll-animate fade-from-left"
                src="/assets/img/book_content.webp"
                alt="dashboard image"
            />
            <div class="mt-4 md:mt-0 scroll-animate fade-from-right">
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold">
                    Who Is This Book For?
                </h2>
                <p class="mb-6 font-light md:text-lg">
                    Flowbite helps you connect with friends and communities of
                    people who share your interests. Connecting with your
                    friends and family as well as discovering new ones is easy
                    with features like Groups.
                </p>
                <a
                    href="#"
                    class="inline-flex items-center text-primary bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900"
                >
                    Get started
                    <svg
                        class="ml-2 -mr-1 w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                        ></path>
                    </svg>
                </a>
            </div>
        </div>
    </section>

    <section>
        <div
            class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6"
        >
            <div class="mt-4 md:mt-0 scroll-animate fade-from-left">
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold">
                    What Does the Book Include?
                </h2>
                <p class="mb-6 font-light md:text-lg">
                    Flowbite helps you connect with friends and communities of
                    people who share your interests. Connecting with your
                    friends and family as well as discovering new ones is easy
                    with features like Groups.
                </p>
                <a
                    href="/book"
                    class="inline-flex items-center text-primary bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900"
                >
                    Preview
                    <svg
                        class="ml-2 -mr-1 w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                        ></path>
                    </svg>
                </a>
            </div>
            <img
                class="w-full scroll-animate fade-from-right"
                src="/assets/img/book_content.webp"
                alt="dashboard image"
            />
        </div>
    </section>

    <div class="h-20"></div>
    <div class="pb-20 md:mt-0 scroll-animate fade">
        <h2
            class="text-4xl lg:text-5xl font-bold lg:tracking-tight text-center"
        >
            Which topics are covered?
        </h2>
    </div>

    <div class="grid sm:grid-cols-2 md:grid-cols-3 mt-16 gap-16">
        <div
            v-for="item of features"
            class="flex gap-4 items-start scroll-animate fade"
        >
            <div class="mt-1 bg-black rounded-full p-2 w-8 h-8 shrink-0">
                <Icon class="text-white" :name="item.icon" />
            </div>
            <div>
                <h3 class="font-semibold text-lg">{{ item.title }}</h3>
                <p class="text-slate-500 mt-2 leading-relaxed">
                    {{ item.description }}
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>
@keyframes animate-fade {
    from {
        opacity: 0;
    }
}

.fade {
    animation: animate-fade ease-in both;
}

@keyframes animate-fade-from-right {
    from {
        opacity: 0;
        transform: translate(25vw, 0px);
    }
}

.fade-from-right {
    animation: animate-fade-from-right ease-in both;
}

@keyframes animate-fade-from-left {
    from {
        opacity: 0;
        transform: translate(-25vw, 0px);
    }
}

.fade-from-left {
    animation: animate-fade-from-left ease-in both;
}

@media (prefers-reduced-motion: no-preference) {
    .scroll-animate {
        animation-timeline: view();
        animation-range: 0vh 30vh;
    }
}
</style>
