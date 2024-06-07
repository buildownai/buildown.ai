import { _ as __nuxt_component_0 } from './nuxt-link-DdCycDgy.mjs';
import { defineComponent, mergeProps, withCtx, renderSlot, useSSRContext } from 'file:///Users/sebastianwessel/projekte/buildown_ai/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderSlot } from 'file:///Users/sebastianwessel/projekte/buildown_ai/node_modules/vue/server-renderer/index.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Link",
  __ssrInlineRender: true,
  props: {
    href: {},
    size: { default: "lg" },
    block: { type: Boolean },
    styleName: { default: "primary" },
    className: {}
  },
  setup(__props) {
    const sizes = {
      lg: "px-5 py-2.5",
      md: "px-4 py-2"
    };
    const styles = {
      outline: "bg-white border-2 border-black hover:bg-gray-100 text-black no-underline",
      primary: "bg-black text-white hover:bg-gray-800 border-2 border-transparent no-underline",
      inverted: "bg-white text-black border-2 border-transparent",
      muted: "bg-gray-100 hover:bg-gray-200 border-2 border-transparent  no-underline"
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        href: _ctx.href,
        class: [
          "rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200",
          _ctx.block && "w-full",
          sizes[_ctx.size],
          styles[_ctx.styleName]
        ]
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/Link.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=Link-CTUKQz5d.mjs.map
