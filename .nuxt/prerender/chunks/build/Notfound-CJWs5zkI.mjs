import { _ as _sfc_main$1 } from './Link-CTUKQz5d.mjs';
import __nuxt_component_1 from './Icon-i_Z2kK79.mjs';
import { withCtx, createVNode, createTextVNode, useSSRContext } from 'file:///Users/sebastianwessel/projekte/buildown_ai/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'file:///Users/sebastianwessel/projekte/buildown_ai/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_LandingLink = _sfc_main$1;
  const _component_Icon = __nuxt_component_1;
  _push(`<section${ssrRenderAttrs(_attrs)}><div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6"><div class="mx-auto max-w-screen-sm text-center"><h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600"> 404 </h1><p class="mb-4 mt-0 text-9xl font-light text-gray-500">\u{1F937}\u200D\u2642\uFE0F</p><p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl"> Something&#39;s missing. </p><p class="mb-4 text-lg font-light text-gray-500"> Sorry, we can&#39;t find that page. You&#39;ll find lots to explore on the home page. </p><div class="px-5 py-2.5 my-8">`);
  _push(ssrRenderComponent(_component_LandingLink, {
    size: "lg",
    styleName: "primary",
    rel: "noopener",
    href: "/",
    target: "_top"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Icon, {
          name: "carbon:home",
          class: "inline-block mr-2 text-sm"
        }, null, _parent2, _scopeId));
        _push2(` Back to Homepage`);
      } else {
        return [
          createVNode(_component_Icon, {
            name: "carbon:home",
            class: "inline-block mr-2 text-sm"
          }),
          createTextVNode(" Back to Homepage")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/Notfound.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_4 as _ };
//# sourceMappingURL=Notfound-CJWs5zkI.mjs.map
