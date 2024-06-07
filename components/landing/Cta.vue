<template>
  <div
    class="bg-gray-900 px-20 py-20 mt-20 mx-auto max-w-5xl rounded-lg flex flex-col items-center text-center scroll-animate fade-scale-in"
  >
    <h2 class="text-white text-3xl md:text-6xl">Get The Book</h2>
    <p class="text-slate-500 mt-4 text-lg md:text-xl">
      Unlock the secrets of AI and Large Language Models (LLMs) to create revolutionary solutions with cutting-edge technology
    </p>
    <div class="flex mt-5">
      <LandingLink href="/book/buy" styleName="inverted">Buy Now</LandingLink>
    </div>
  </div>
</template>

<style scoped>
@keyframes animate-fade-scale-in {
    from {
        opacity: 0;
        transform: scale(30%);
    }
}

.fade-scale-in {
    animation: animate-fade-scale-in ease-in both;
}

@media (prefers-reduced-motion: no-preference) {
    .scroll-animate {
        animation-timeline: view();
        animation-range: 0vh 30vh;
    }
}
</style
