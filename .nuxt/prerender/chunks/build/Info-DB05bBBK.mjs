import { useSSRContext, mergeProps } from 'file:///Users/sebastianwessel/projekte/buildown_ai/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderSlot } from 'file:///Users/sebastianwessel/projekte/buildown_ai/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-2 pr-2 border bg-slate-100 rounded" }, _attrs))}><h3 class="p-0 m-0 mb-2">\u{1F4A1} Good To Know</h3>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/Info.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Info = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { Info as default };
//# sourceMappingURL=Info-DB05bBBK.mjs.map
