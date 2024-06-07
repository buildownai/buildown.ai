import { _ as __nuxt_component_0 } from './Container-CgZQ0K6n.mjs';
import { _ as _sfc_main$1 } from './Sectionhead-CVrqAhsS.mjs';
import { withCtx, createTextVNode, createVNode, useSSRContext } from 'file:///Users/sebastianwessel/projekte/buildown_ai/node_modules/vue/index.mjs';
import { ssrRenderComponent } from 'file:///Users/sebastianwessel/projekte/buildown_ai/node_modules/vue/server-renderer/index.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = {
  __name: "[...slug]",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LandingContainer = __nuxt_component_0;
      const _component_LandingSectionhead = _sfc_main$1;
      _push(ssrRenderComponent(_component_LandingContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<main class="pt-1 antialiased"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_LandingSectionhead, null, {
              title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Resources`);
                } else {
                  return [
                    createTextVNode("Resources")
                  ];
                }
              }),
              desc: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Here You will find useful resources soon`);
                } else {
                  return [
                    createTextVNode("Here You will find useful resources soon")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</main>`);
          } else {
            return [
              createVNode("main", { class: "pt-1 antialiased" }, [
                createVNode(_component_LandingSectionhead, null, {
                  title: withCtx(() => [
                    createTextVNode("Resources")
                  ]),
                  desc: withCtx(() => [
                    createTextVNode("Here You will find useful resources soon")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/resources/[...slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_...slug_-YhcOixBd.mjs.map
