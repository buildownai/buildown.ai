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
        <template v-slot:desc>Here are the resources for the book</template>
      </LandingSectionhead>
      <section>
        <div
          class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <img class="w-full scroll-animate fade-from-left" src="/assets/img/code.webp" alt="Source Code" />
          <div class="mt-4 md:mt-0 scroll-animate fade-from-right">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold">
              Source Code From The Book
            </h2>
            <p class="mb-6 font-light md:text-lg">
              The source code for each chapter is public available on GitHub. Here you will find the complete code to be
              able to run it on your local machine, to extend the code and play around.
            </p>
            <a href="https://github.com/buildownai/book_code_examples" target="_blank"
              class="inline-flex items-center text-primary bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
              github.com/buildownai/book_code_examples
              <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
      <section>
        <div
          class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <img class="w-full scroll-animate fade-from-right md:order-last" src="/assets/img/buddy.webp"
            alt="Buddy Showcase" />
          <div class="mt-4 md:mt-0 scroll-animate fade-from-left">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold">
              Where Can I Find The Buddy Showcase?
            </h2>
            <p class="mb-6 font-light md:text-lg">
              The source code is open-source and available on GitHub. You can simply clone the code to your local
              machine and run it.
            </p>
            <a href="https://github.com/buildownai/buddy" target="_blank"
              class="inline-flex items-center text-primary bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
              github.com/buildownai/buddy
              <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>


      <section>
        <div
          class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <div class="w-full">
            <img class="scroll-animate fade-from-left" src="/logos/ollama.png" style="height: 281px;margin: auto;"
              alt="Ollama" />
          </div>
          <div class="mt-4 md:mt-0 scroll-animate fade-from-right">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold">
              The Docker for Models
            </h2>
            <p class="mb-6 font-light md:text-lg">
              We only scratched on top of the potential of SurrealDB. If you like to learn more about it, visit our
              official website. There, you will find a comprehensive documentation and interasting material.
            </p>
            <a href="https://ollama.com" target="_blank"
              class="inline-flex items-center text-primary bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
              ollama.com
              <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
      <section>
        <div
          class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <img class="w-full scroll-animate fade-from-right md:order-last" src="/logos/lmstudio.webp" alt="LM Studio" />
          <div class="mt-4 md:mt-0 scroll-animate fade-from-left">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold">
              Run & Test Models
            </h2>
            <p class="mb-6 font-light md:text-lg">
              When you work with LLM´s local, LM Studio is the perfect tool to manage and control your models. It
              provides a user-friendly interface that allows you to easily run and test models. Furthermore, it provides
              a OpenAI compatible webserver.
            </p>
            <a href="https://lmstudio.ai" target="_blank"
              class="inline-flex items-center text-primary bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
              lmstudio.ai
              <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
      <section>
        <div
          class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <img class="w-full scroll-animate fade-from-left" src="/logos/surrealdb.svg"
            alt="Official SurrealDB Website" />
          <div class="mt-4 md:mt-0 scroll-animate fade-from-right">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold">
              The Multi-Model Database
            </h2>
            <p class="mb-6 font-light md:text-lg">
              We only scratched on top of the potential of SurrealDB. If you like to learn more about it, visit our
              official website. There, you will find a comprehensive documentation and interasting material.
            </p>
            <a href="https://surrealdb.com" target="_blank"
              class="inline-flex items-center text-primary bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
              surrealdb.com
              <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
      <section>
        <div
          class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <div class="w-full scroll-animate fade-from-left">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold">
              <img src="/logos/bun.svg" style="height:35px; display: inline-block; margin-right: 10px;" /> Bun
            </h2>
            <p class="mb-6 font-light md:text-lg">
              Bun is a modern, fast runtime and package manger for JavaScript and Typescript
            </p>
            <a href="https://bun.sh" target="_blank"
              class="inline-flex items-center text-primary bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
              bun.sh
              <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"></path>
              </svg>
            </a>
          </div>
          <div class="mt-4 md:mt-0 scroll-animate fade-from-right">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold">
              <img src="/logos/hono.svg" style="height:35px; display: inline-block; margin-right: 10px;" /> Hono
            </h2>
            <p class="mb-6 font-light md:text-lg">
              Hono is a modern web application framework built on Web Standards, with a great developer experience
            </p>
            <a href="https://hono.dev" target="_blank"
              class="inline-flex items-center text-primary bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
              hono.dev
              <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
      <section>
        <div
          class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <div class="w-full">
            <img class="scroll-animate fade-from-left" src="/logos/hugging-face.png" alt="Hugging Face" />
          </div>
          <div class="mt-4 md:mt-0 scroll-animate fade-from-right">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold">
              Models And More
            </h2>
            <p class="mb-6 font-light md:text-lg">
              We only scratched on top of the potential of SurrealDB. If you like to learn more about it, visit our
              official website. There, you will find a comprehensive documentation and interasting material.
            </p>
            <a href="https://huggingface.co/" target="_blank"
              class="inline-flex items-center text-primary bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
              huggingface.co
              <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
      <LandingCta></LandingCta>
    </main>
  </LandingContainer>
</template>
