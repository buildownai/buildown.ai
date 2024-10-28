<template>
    <footer class="mt-20 pt-5 bg-slate-800 text-slate-400">
        <div class="max-w-screen-xl mx-auto">
            <div
                class="grid md:grid-flow-col grid-flow-row auto-cols-max gap-4 justify-center mb-10 mx-auto"
            >
                <div class="min-w-52">
                    <a href="/" class="block p-1">Home</a
                    ><a href="/buy" class="block p-1">Get The Book</a>
                    <a href="/book" class="block p-1">What is included?</a>
                </div>
                <div class="min-w-52">
                    <a href="/showcase" class="block p-1">Showcase</a
                    ><a href="/resources" class="block p-1">Resources</a>
                </div>
                <div class="min-w-52">
                    <a href="/privacy" class="block p-1">Privacy Policy</a>
                    <a href="/imprint" class="block p-1">Imprint</a>
                </div>
            </div>

            <p class="text-center text-sm p-8 pb-10">
                Copyright © {{ new Date().getFullYear() }}
                <a
                    href="https://sebastianwessel.de"
                    target="_blank"
                    title="Sebastian Wessel - Senior Typescript Developer working as Freelancer"
                    >Sebastian Wessel</a
                >
                - All rights reserved.
            </p>
        </div>
    </footer>
</template>
