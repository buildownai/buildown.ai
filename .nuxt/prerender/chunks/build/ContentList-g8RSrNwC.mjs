import { defineComponent, useSlots, h, useSSRContext } from 'file:///Users/sebastianwessel/projekte/buildown_ai/node_modules/vue/index.mjs';
import _sfc_main$1 from './ContentQuery-B2j1j5k4.mjs';
import './asyncData-C6aL7S4Z.mjs';
import './server.mjs';
import 'file:///Users/sebastianwessel/projekte/buildown_ai/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///Users/sebastianwessel/projekte/buildown_ai/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/sebastianwessel/projekte/buildown_ai/node_modules/h3/dist/index.mjs';
import 'file:///Users/sebastianwessel/projekte/buildown_ai/node_modules/devalue/index.js';
import 'file:///Users/sebastianwessel/projekte/buildown_ai/node_modules/ufo/dist/index.mjs';
import 'file:///Users/sebastianwessel/projekte/buildown_ai/node_modules/vue/server-renderer/index.mjs';
import 'file:///Users/sebastianwessel/projekte/buildown_ai/node_modules/@unhead/ssr/dist/index.mjs';
import '../runtime.mjs';
import 'file:///Users/sebastianwessel/projekte/buildown_ai/node_modules/destr/dist/index.mjs';
import 'file:///Users/sebastianwessel/projekte/buildown_ai/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/sebastianwessel/projekte/buildown_ai/node_modules/hookable/dist/index.mjs';
import 'file:///Users/sebastianwessel/projekte/buildown_ai/node_modules/klona/dist/index.mjs';
import 'file:///Users/sebastianwessel/projekte/buildown_ai/node_modules/scule/dist/index.mjs';
import 'file:///Users/sebastianwessel/projekte/buildown_ai/node_modules/defu/dist/defu.mjs';
import 'file:///Users/sebastianwessel/projekte/buildown_ai/node_modules/ohash/dist/index.mjs';
import 'file:///Users/sebastianwessel/projekte/buildown_ai/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/sebastianwessel/projekte/buildown_ai/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/sebastianwessel/projekte/buildown_ai/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/sebastianwessel/projekte/buildown_ai/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/sebastianwessel/projekte/buildown_ai/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/sebastianwessel/projekte/buildown_ai/node_modules/pathe/dist/index.mjs';
import 'file:///Users/sebastianwessel/projekte/buildown_ai/node_modules/shiki/dist/core.mjs';
import 'file:///Users/sebastianwessel/projekte/buildown_ai/node_modules/@shikijs/transformers/dist/index.mjs';
import 'file:///Users/sebastianwessel/projekte/buildown_ai/node_modules/unified/index.js';
import 'file:///Users/sebastianwessel/projekte/buildown_ai/node_modules/mdast-util-to-string/index.js';
import 'file:///Users/sebastianwessel/projekte/buildown_ai/node_modules/micromark/index.js';
import 'file:///Users/sebastianwessel/projekte/buildown_ai/node_modules/unist-util-stringify-position/index.js';
import 'file:///Users/sebastianwessel/projekte/buildown_ai/node_modules/micromark-util-character/index.js';
import 'file:///Users/sebastianwessel/projekte/buildown_ai/node_modules/micromark-util-chunked/index.js';
import 'file:///Users/sebastianwessel/projekte/buildown_ai/node_modules/micromark-util-resolve-all/index.js';
import 'file:///Users/sebastianwessel/projekte/buildown_ai/node_modules/micromark-util-sanitize-uri/index.js';
import 'file:///Users/sebastianwessel/projekte/buildown_ai/node_modules/slugify/slugify.js';
import 'file:///Users/sebastianwessel/projekte/buildown_ai/node_modules/remark-parse/index.js';
import 'file:///Users/sebastianwessel/projekte/buildown_ai/node_modules/remark-rehype/index.js';
import 'file:///Users/sebastianwessel/projekte/buildown_ai/node_modules/remark-mdc/dist/index.mjs';
import 'file:///Users/sebastianwessel/projekte/buildown_ai/node_modules/hast-util-to-string/index.js';
import 'file:///Users/sebastianwessel/projekte/buildown_ai/node_modules/github-slugger/index.js';
import 'file:///Users/sebastianwessel/projekte/buildown_ai/node_modules/detab/index.js';
import 'file:///Users/sebastianwessel/projekte/buildown_ai/node_modules/remark-emoji/index.js';
import 'file:///Users/sebastianwessel/projekte/buildown_ai/node_modules/remark-gfm/index.js';
import 'file:///Users/sebastianwessel/projekte/buildown_ai/node_modules/rehype-external-links/index.js';
import 'file:///Users/sebastianwessel/projekte/buildown_ai/node_modules/rehype-sort-attribute-values/index.js';
import 'file:///Users/sebastianwessel/projekte/buildown_ai/node_modules/rehype-sort-attributes/index.js';
import 'file:///Users/sebastianwessel/projekte/buildown_ai/node_modules/rehype-raw/index.js';
import 'file:///Users/sebastianwessel/projekte/buildown_ai/node_modules/minisearch/dist/es/index.js';
import 'file:///Users/sebastianwessel/projekte/buildown_ai/node_modules/unhead/dist/index.mjs';
import 'file:///Users/sebastianwessel/projekte/buildown_ai/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/sebastianwessel/projekte/buildown_ai/node_modules/unctx/dist/index.mjs';
import 'file:///Users/sebastianwessel/projekte/buildown_ai/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/sebastianwessel/projekte/buildown_ai/node_modules/cookie-es/dist/index.mjs';

const emptyNode = (slot, data) => h("pre", null, JSON.stringify({ message: "You should use slots with <ContentList>", slot, data }, null, 2));
const ContentList = defineComponent({
  name: "ContentList",
  props: {
    /**
     * Query props
     */
    /**
     * The path of the content to load from content source.
     * @default '/'
     */
    path: {
      type: String,
      required: false,
      default: void 0
    },
    /**
     * A query builder params object to be passed to <ContentQuery /> component.
     */
    query: {
      type: Object,
      required: false,
      default: void 0
    }
  },
  /**
   * Content empty fallback
   * @slot empty
   */
  /**
   * Content not found fallback
   * @slot not-found
   */
  render(ctx) {
    const slots = useSlots();
    const { path, query } = ctx;
    const contentQueryProps = {
      ...query || {},
      path: path || (query == null ? void 0 : query.path) || "/"
    };
    return h(
      _sfc_main$1,
      contentQueryProps,
      {
        // Default slot
        default: (slots == null ? void 0 : slots.default) ? ({ data, refresh, isPartial }) => slots.default({ list: data, refresh, isPartial, ...this.$attrs }) : (bindings) => emptyNode("default", bindings.data),
        // Empty slot
        empty: (bindings) => (slots == null ? void 0 : slots.empty) ? slots.empty(bindings) : emptyNode("default", bindings == null ? void 0 : bindings.data),
        // Not Found slot
        "not-found": (bindings) => {
          var _a;
          return (slots == null ? void 0 : slots["not-found"]) ? (_a = slots == null ? void 0 : slots["not-found"]) == null ? void 0 : _a.call(slots, bindings) : emptyNode("not-found", bindings == null ? void 0 : bindings.data);
        }
      }
    );
  }
});
const _sfc_main = ContentList;
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/content/dist/runtime/components/ContentList.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=ContentList-g8RSrNwC.mjs.map
