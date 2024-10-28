<script setup>
const features = [
    {
        title: "Basic Understanding",
        description:
            "Get a clear understanding of essential terms and meanings. Build a strong knowledge foundation with our easy-to-follow explanations.",
        icon: "la:brain",
    },
    {
        title: "Running LLM´s local",
        description:
            "Learn how to run Large Language Models on your own device for full control, enhanced privacy, and improved performance.",
        icon: "carbon:laptop",
    },
    {
        title: "Prompt Engineering",
        description:
            "Gain the knowledge to interact with your model. Learn how your input shapes the responses from a Large Language Model.",
        icon: "tabler:prompt",
    },
    {
      title: "Data Extration & Creation",
      description:
        "Get the knowledge to use LLMs for data extraction and creation, such as summarization, translation, and more.",
      icon: "carbon:chart-logistic-regression",
    },
    {
        title: "RAG",
        description:
            "Expand your model's capabilities with Retrieval-Augmented Generation (RAG). Integrate vector databases and document retrieval to provide accurate and context-rich responses..",
        icon: "bx:bxs-data",
    },
    {
        title: "Tool Calling",
        description:
            "Take your AI to the next level by adding tools. Enjoy benefits like improved functionality, greater efficiency, and more personalized interactions.",
        icon: "carbon:ai-launch",
    },
    {
      title: "Agents",
      description:
        "We will figure out on how we can building complex scenarios with agents.",
      icon: "bx:bxs-bot",
    },
    {
      title: "Basics of Finetuning",
      description:
        "Learn to customize Large Language Models for your specific tasks, by adding and improving the knowledge of the model.",
      icon: "carbon:tuning",
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
                src="/assets/img/developers.webp"
                alt="dashboard image"
            />
            <div class="mt-4 md:mt-0 scroll-animate fade-from-right">
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold">
                    Who Is This Book For?
                </h2>
                <p class="mb-6 font-light md:text-lg">
                    This book is written by a developer for developers and reflects
                    my own learning process. It's perfect for absolute
                    beginners, those with some existing knowledge, and
                    enthusiasts alike. While it's not designed for scientists,
                    it caters to everyone else looking to deepen their
                    understanding and skills in coding with large language
                    models.
                </p>
                <a
                    href="/book"
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
            <img
                class="w-full scroll-animate fade-from-right md:order-last"
                src="/assets/img/book_content.webp"
                alt="dashboard image"
            />
            <div class="mt-4 md:mt-0 scroll-animate fade-from-left">
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold">
                    What Does the Book Include?
                </h2>
                <p class="mb-6 font-light md:text-lg">
                    You can preview the entire book, with each chapter
                    summarized to give you a clear overview of the content. This
                    allows you to understand what each section covers before
                    diving into the full details. Enjoy a thorough preview and
                    see how the book can benefit you.
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
        </div>
    </section>

    <section>
        <div
            class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6"
        >
            <img
                class="w-full scroll-animate fade-from-left"
                src="/assets/img/buy.webp"
                alt="dashboard image"
            />
            <div class="mt-4 md:mt-0 scroll-animate fade-from-right">
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold">
                    Why Should I Buy the Book?
                </h2>
                <p class="mb-6 font-light md:text-lg">
                    While there's a wealth of material available, such as blogs,
                    Python playbooks, and videos, it's often difficult and
                    time-consuming to find and organize the information in the
                    right order. This book offers a structured and comprehensive
                    guide, saving you time and effort by presenting everything
                    you need in a clear, logical sequence.
                </p>
                <a
                    href="/buy"
                    class="inline-flex items-center text-primary bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900"
                >
                    Get the Book
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

<style>
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
