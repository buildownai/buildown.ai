<script setup>
definePageMeta({
    layout: "landing",
});
</script>

<template>
  <LandingContainer>
    <main class="pt-1 antialiased">
      <h1></h1>
      <LandingSectionhead>
        <template v-slot:title>Showcase</template>
        <template v-slot:desc>Inspiring Examples Reveal What's Possible with the Knowledge You'll Gain.</template>
      </LandingSectionhead>

      <div class="mt-16 text-center">
        <h2 class="text-2xl lg:text-5xl font-semibold lg:tracking-tight">
          Buddy
        </h2>
        <p class="text-lg mt-4 text-slate-600">
          AI Driven IDE in Browser with local LLM
        </p>
      </div>

      <div class="flex flex-col items-center justify-center w-full mt-20 mb-20 bg-gray-200 rounded overflow-hidden">
        <div class="h-10 w-full p-2">
          <span class="dot mr-2"></span>
          <span class="dot mr-2"></span>
          <span class="dot mr-10"></span>
          <span class="font-bold">Buddy</span><span> - AI Driven IDE in Browser with local LLM</span>
        </div>
        <video style="width:100%; display: block;" autoplay muted loop>
          <source src="/buddy2.mp4" type="video/mp4">
          <source src="/buddy.ogg" type="video/ogg">
          <img src="/buddy.png" alt="Video not supported" />
        </video>
      </div>

      <section>
        <div
          class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <img class="w-full scroll-animate fade-from-left" src="/assets/img/buddy_splah.webp" alt="dashboard image" />
          <div class="mt-4 md:mt-0 scroll-animate fade-from-right">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold">
              Is This A Real Application?
            </h2>
            <p class="mb-6 font-light md:text-lg">
              This is a showcase application with accessible source code, though not yet production-ready. It
              demonstrates what you’ll be able to implement with the knowledge gained from this book. It’s a playground
              for developers and anyone curious to experiment with innovative ideas.
            </p>
            <a href="/buy"
              class="inline-flex items-center text-primary bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
              Get The Book
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
          <img class="w-full scroll-animate fade-from-right md:order-last" src="/assets/img/code.webp"
            alt="dashboard image" />
          <div class="mt-4 md:mt-0 scroll-animate fade-from-left">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold">
              Do I Need To Buy The Book To Get The Code?
            </h2>
            <p class="mb-6 font-light md:text-lg">
              The code is open-source and available on GitHub, with no purchase required to access it. However, the
              repository does not include documentation or explanations on how to use the code. To fully understand its
              functionality, I recommend reading the book. Purchasing the book is also a great way to show support,
              helping me continue creating content like this.
            </p>
            <a href="https://github.com/buildownai/buddy" target="_blank"
              class="inline-flex items-center text-primary bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
              Find The Code At GitHub
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

      <div class="mt-16 text-center">
        <h2 class="text-2xl lg:text-5xl font-semibold lg:tracking-tight">
          Project Describer
        </h2>
        <p class="text-lg mt-4 text-slate-600">
          AI Agents Collaborating to Accomplish a Shared Goal
        </p>
      </div>

      <div class="flex flex-col items-center justify-center w-full mt-20 mb-20 bg-gray-200 rounded overflow-hidden">
        <div class="h-10 w-full p-2">
          <span class="dot mr-2"></span>
          <span class="dot mr-2"></span>
          <span class="dot mr-10"></span>
          <span class="font-bold">Project Describer</span><span> - Agentic AI Driven Creation of Project Descriptions
            with local
            LLM</span>
        </div>
        <video style="width:100%; display: block;" autoplay muted loop>
          <source src="/project_describe.mp4" type="video/mp4">
          <source src="/project_describe.ogg" type="video/ogg">
          <img src="/assets/img/project_describe.webp" alt="Video not supported" />
        </video>
      </div>

      <section>
        <div
          class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <img class="w-full scroll-animate fade-from-left" src="/assets/img/project_describe.webp"
            alt="dashboard image" />
          <div class="mt-4 md:mt-0 scroll-animate fade-from-right">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold">
              What Is Shown Here?
            </h2>
            <p class="mb-6 font-light md:text-lg">
              This showcase is here to help you take control of AI-driven scenarios with confidence. Discover how to
              design complex, reliable AI scenarios that you can trust, all while enhancing control and precision in
              your AI solutions.
            </p>
            <a href="/buy"
              class="inline-flex items-center text-primary bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
              Get The Book
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
          <img class="w-full scroll-animate fade-from-right md:order-last" src="/assets/img/local_run.webp"
            alt="dashboard image" />
          <div class="mt-4 md:mt-0 scroll-animate fade-from-left">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold">
              Where Is The Live Showcase?
            </h2>
            <p class="mb-6 font-light md:text-lg">
              All the showcases and code examples are crafted to run directly on your local machine—no sign-ups, no
              fees, and no external dependencies. This gives you full control and privacy over your data, plus the
              freedom to experiment. With everything running locally, you can try out a wide range of language models,
              test different configurations, and see what works best for your needs. Modify, tweak, and customize the
              code as you like, and explore endless possibilities—all at your own pace, with total freedom!
            </p>
            <a href="/buy" target="_blank"
              class="inline-flex items-center text-primary bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
              Get The Book
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

<style lang="css" scoped>
  .dot {
    height: 12px;
    width: 12px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
  }
</style>