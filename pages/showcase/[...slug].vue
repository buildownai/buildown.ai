<script setup>
definePageMeta({
    layout: "landing",
});
</script>

<template>
  <LandingContainer>
    <main class="pt-1 antialiased">
      <LandingSectionhead>
        <template v-slot:title>Showcase</template>
        <template v-slot:desc>Buddy - AI Driven IDE in Browser</template>
      </LandingSectionhead>

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
          <img class="w-full scroll-animate fade-from-left" src="/assets/img/book_content.webp" alt="dashboard image" />
          <div class="mt-4 md:mt-0 scroll-animate fade-from-right">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold">
              Is This A Real Application?
            </h2>
            <p class="mb-6 font-light md:text-lg">
              This is a real showcase application, with available source code, but being fare from production ready. It
              shows what <strong>You</strong> will be
              able to implement, with the knowledge from this book.
              It is playground for developers and people interested in trying out cool stuff.
            </p>
            <a href="#"
              class="inline-flex items-center text-primary bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
              Get started
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
              The code is open-source and available on GitHub. You don't need to buy the book to access it.
              However, in the repository you will not find any documentation or explanations about how to use the code.
              If you want to understand how the code works, I recommend reading the book.
              It would also be a nice gesture, to give a little support by buying the book, as it helps me continue
              creating content like this one.
            </p>
            <a href="https://github.com/buildownai/buddy" target="_blank"
              class="inline-flex items-center text-primary bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
              Get the code at GitHub
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