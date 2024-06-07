<template>
    <section class="bg-gray-900 my-16">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div class="mx-auto max-w-screen-md sm:text-center">
                <h2
                    class="mb-4 text-3xl font-extrabold tracking-tight sm:text-4xl text-white"
                >
                    Be the First to Know!
                </h2>
                <p
                    class="mx-auto mb-8 max-w-2xl md:mb-12 sm:text-xl text-gray-400"
                >
                    Leave your email to be notified as soon as the book becomes
                    available to the public.
                </p>
                <form
                    @submit.prevent="onSubmit"
                    @submit="joinWaitlist"
                    v-if="!joined"
                >
                    <div
                        class="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0"
                    >
                        <div class="relative w-full">
                            <label
                                for="email"
                                class="hidden mb-2 text-sm font-medium text-gray-300"
                                >Email address</label
                            >
                            <div
                                class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
                            >
                                <Icon
                                    name="carbon:email"
                                    class="text-gray-400"
                                />
                            </div>
                            <input
                                class="block p-3 pl-9 w-full text-sm rounded-lg border sm:rounded-none sm:rounded-l-lg focus:border-primary-500 border-gray-600 placeholder-gray-400 focus:ring-primary-500 focus:border-primary-500"
                                placeholder="Enter your email"
                                type="email"
                                id="email"
                                required=""
                                v-model="email"
                            />
                        </div>
                        <div>
                            <button
                                type="submit"
                                class="py-3 px-5 w-full text-sm font-medium text-center text-blue-200 rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 whitespace-nowrap"
                            >
                                Join the waitlist
                            </button>
                        </div>
                    </div>
                    <div>
                        <NuxtTurnstile
                            ref="turnstile"
                            v-model="token"
                            :options="turnstileOptions"
                        />
                    </div>
                    <div
                        class="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer dark:text-gray-300"
                    >
                        We care about the protection of your data.
                        <a
                            href="/privacy"
                            class="font-medium text-primary-600 dark:text-primary-500 hover:underline"
                            >Read our Privacy Policy</a
                        >.
                    </div>
                </form>
                <p
                    v-else
                    class="mx-auto mb-8 max-w-2xl md:mb-12 sm:text-xl text-white font-semibold"
                >
                    Thank You!<br />
                    You will receive an email as soon as the book becomes
                    available.
                </p>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const token = ref("");
const email = ref("");
const turnstileOptions = ref({
    theme: "dark",
    size: "normal",
});
const turnstile = ref();
const joined = ref(false);

function reset() {
    turnstile.value?.reset();
}

const joinWaitlist = async () => {
    if (!token.value?.length || !email.value.trim().length) {
        alert("Enter an Email and prove that you are human!");
        return;
    }
    const response = await fetch("/api/join_waitlist", {
        method: "POST",
        headers: {
            "Content-Type": "application/json", // Set the content type to JSON
        },
        body: JSON.stringify({ email: email.value, token: token.value }),
    });
    turnstile.value?.reset();
    if (!response.ok) {
        alert("Failed to join waitist");
        return;
    }
    email.value = "";
    joined.value = true;
};
</script>
