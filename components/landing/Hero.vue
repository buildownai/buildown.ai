<template>
  <main class="grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-8">
    <div class="p-24 md:order-1 hidden md:block">
      <div class="hover-animate">
        <img class="fly-in" src="~/assets/img/hero2.png" alt="Build Your Own AI Book" loading="eager" width="512"
          height="512" />
      </div>
    </div>

    <div>
      <h1 class="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight">
        <span class="text-blue-800">Build</span> Your Own
        <span class="text-blue-800">AI</span>
      </h1>
      <p class="text-lg mt-4 text-slate-600 max-w-xl text-center">
        Practical Insights for Building Real-World AI Applications:<br/>A Developer’s Guide for Developers
      </p>
      <LandingWaitlist></LandingWaitlist>
      <!--
            <div class="mt-6 flex flex-col sm:flex-row gap-3">
                <LandingLink
                    href="https://github.com/Gr33nW33n/nuxtship-template"
                    target="_blank"
                    rel="noopener"
                    >Buy now</LandingLink
                >
                <LandingLink
                    size="lg"
                    styleName="outline"
                    rel="noopener"
                    href="https://github.com/Gr33nW33n/nuxtship-template"
                    target="_blank"
                    >View Repo</LandingLink
                >
            </div>
            -->
    </div>
  </main>
</template>

<style scoped>
@keyframes animate-fly-in {
    from {
        opacity: 0;
        transform: translate(25vw, -100px) scale(30%);
    }
}

.fly-in {
    animation: animate-fly-in ease-in both;
    animation-duration: 0.5s;
}

@keyframes animate-pop {
    from {
        transform: translate(0px, 0px) scale(100%);
    }
    to {
        transform: translate(-20px, 20px) scale(120%);
    }
}

.hover-animate {
    transition: all 0.5s ease-in;
}

.hover-animate:hover {
    transform: scale(110%);
}
</style>
