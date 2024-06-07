import __nuxt_component_1 from './Icon-i_Z2kK79.mjs';
import { _ as _sfc_main$1 } from './NuxtTurnstile-B1DhBJcF.mjs';
import { defineComponent, ref, mergeProps, unref, isRef, useSSRContext } from 'file:///Users/sebastianwessel/projekte/buildown_ai/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'file:///Users/sebastianwessel/projekte/buildown_ai/node_modules/vue/server-renderer/index.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Waitlist",
  __ssrInlineRender: true,
  setup(__props) {
    const token = ref("");
    const email = ref("");
    const turnstileOptions = ref({
      theme: "dark",
      size: "normal"
    });
    const turnstile = ref();
    const joined = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      const _component_NuxtTurnstile = _sfc_main$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-gray-900 my-16" }, _attrs))}><div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6"><div class="mx-auto max-w-screen-md sm:text-center"><h2 class="mb-4 text-3xl font-extrabold tracking-tight sm:text-4xl text-white"> Be the First to Know! </h2><p class="mx-auto mb-8 max-w-2xl md:mb-12 sm:text-xl text-gray-400"> Leave your email to be notified as soon as the book becomes available to the public. </p>`);
      if (!unref(joined)) {
        _push(`<form><div class="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0"><div class="relative w-full"><label for="email" class="hidden mb-2 text-sm font-medium text-gray-300">Email address</label><div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "carbon:email",
          class: "text-gray-400"
        }, null, _parent));
        _push(`</div><input class="block p-3 pl-9 w-full text-sm rounded-lg border sm:rounded-none sm:rounded-l-lg focus:border-primary-500 border-gray-600 placeholder-gray-400 focus:ring-primary-500 focus:border-primary-500" placeholder="Enter your email" type="email" id="email" required=""${ssrRenderAttr("value", unref(email))}></div><div><button type="submit" class="py-3 px-5 w-full text-sm font-medium text-center text-blue-200 rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 whitespace-nowrap"> Join the waitlist </button></div></div><div>`);
        _push(ssrRenderComponent(_component_NuxtTurnstile, {
          ref_key: "turnstile",
          ref: turnstile,
          modelValue: unref(token),
          "onUpdate:modelValue": ($event) => isRef(token) ? token.value = $event : null,
          options: unref(turnstileOptions)
        }, null, _parent));
        _push(`</div><div class="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer dark:text-gray-300"> We care about the protection of your data. <a href="#" class="font-medium text-primary-600 dark:text-primary-500 hover:underline">Read our Privacy Policy</a>. </div></form>`);
      } else {
        _push(`<p class="mx-auto mb-8 max-w-2xl md:mb-12 sm:text-xl text-white font-semibold"> Thank You!<br> You will receive an email as soon as the book becomes available. </p>`);
      }
      _push(`</div></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/Waitlist.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=Waitlist-DcuYexOH.mjs.map
