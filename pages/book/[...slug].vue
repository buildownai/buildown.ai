<script setup lang="ts">
definePageMeta({
    layout: "landing",
});

const { page, next, prev } = useContent();
if (page.value) {
    useSeoMeta({
        title: `${page.value.title} - BuildOwn.AI`,
        ogTitle: `BuildOwn.AI - ${page.value.title}`,
        description: `BuildOwn.AI - ${page.value.description}`,
        ogDescription: `BuildOwn.AI - ${page.value.description}`,
    });
}
const error = useError();
const hasPage = computed(() => !!page.value);
const prevPage = computed(() => {
    const p = (page.value?.path ?? "").split("/");

    if (!prev.value || !p.length || !prev.value._path.startsWith("/" + p)) {
        return;
    }
    return prev.value;
});

const nextPage = computed(() => {
    const p = (page.value?._path ?? "").split("/");
    if (!next.value || !p.length || !next.value._path.startsWith("/" + p[1])) {
        return;
    }
    return next.value;
});
</script>

<template>
  <LandingContainer>
    <main class="md:pt-8 pb-16 lg:pt-16 lg:pb-24 antialiased">
      <div class="flex gap-x-5 flex-col md:flex-row">
        <LandingAside v-if="hasPage" class="min-w-56 md:min-w-96"></LandingAside>
        <article class="flex-grow format format-sm sm:format-base lg:format-lg format-blue prose-base">
          <ContentDoc :path="$route.path">
            <template v-slot="{ doc }">
              <h1 class="text-center text-4xl lg:text-5xl font-bold lg:tracking-tight md:pt-20 md:pb-20">
                {{ doc.title }}
              </h1>
              <ContentRenderer :value="doc" />
              <LandingCta></LandingCta>
            </template>
            <template #not-found>
              <LandingNotfound></LandingNotfound>
            </template>
          </ContentDoc>
          <LandingLink v-if="nextPage" size="lg" styleName="muted" class="block text-nowrap m-auto mt-20"
            :href="nextPage._path">{{ nextPage.title }}
            <Icon name="carbon:chevron-right" class="inline-block" />
          </LandingLink>
        </article>
        <!--<LandingToc class="min-w-56 bg-gray-50 pl-5 pr-5"></LandingToc>-->
      </div>
    </main>
  </LandingContainer>
</template>
