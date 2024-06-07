<template>
    <section>
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div class="mx-auto max-w-screen-sm text-center">
                <h1
                    class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600"
                >
                    404
                </h1>
                <p class="mb-4 mt-0 text-9xl font-light text-gray-500">🤷‍♂️</p>
                <p
                    class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl"
                >
                    Something's missing.
                </p>
                <p class="mb-4 text-lg font-light text-gray-500">
                    Sorry, we can't find that page. You'll find lots to explore
                    on the home page.
                </p>

                <div class="px-5 py-2.5 my-8">
                    <LandingLink
                        size="lg"
                        styleName="primary"
                        rel="noopener"
                        href="/"
                        target="_top"
                    >
                        <Icon
                            name="carbon:home"
                            class="inline-block mr-2 text-sm"
                        />
                        Back to Homepage</LandingLink
                    >
                </div>
            </div>
        </div>
    </section>
</template>
