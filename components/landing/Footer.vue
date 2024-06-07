<template>
    <footer class="mt-20 pt-5 bg-slate-800 text-slate-400">
        <div class="max-w-screen-xl mx-auto">
            <div
                class="grid grid-flow-col auto-cols-max gap-4 justify-start mb-10"
            >
                <div class="w-80">
                    <a href="/" class="block p-1">Home</a
                    ><a href="/book/buy" class="block p-1">Get The Book</a>
                    <a href="/book" class="block p-1">What is included?</a>
                </div>
                <div class="w-80">
                    <a href="/news" class="block p-1">News</a
                    ><a href="/resources" class="block p-1">Resources</a>
                </div>
                <div class="w-80">
                    <a href="/privacy" class="block p-1">Privacy Policy</a>
                    <a href="/imprint" class="block p-1">Imprint</a>
                </div>
            </div>

            <p class="text-center text-sm p-8 pb-10">
                Copyright © {{ new Date().getFullYear() }} Sebastian Wessel -
                All rights reserved.
            </p>
        </div>
    </footer>
</template>
