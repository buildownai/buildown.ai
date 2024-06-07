import { defineEventHandler, readBody, createError } from 'file:///Users/sebastianwessel/projekte/buildown_ai/node_modules/h3/dist/index.mjs';
import { v as verifyTurnstileToken } from '../../runtime.mjs';
import 'file:///Users/sebastianwessel/projekte/buildown_ai/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/sebastianwessel/projekte/buildown_ai/node_modules/destr/dist/index.mjs';
import 'file:///Users/sebastianwessel/projekte/buildown_ai/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/sebastianwessel/projekte/buildown_ai/node_modules/hookable/dist/index.mjs';
import 'file:///Users/sebastianwessel/projekte/buildown_ai/node_modules/klona/dist/index.mjs';
import 'file:///Users/sebastianwessel/projekte/buildown_ai/node_modules/scule/dist/index.mjs';
import 'file:///Users/sebastianwessel/projekte/buildown_ai/node_modules/defu/dist/defu.mjs';
import 'file:///Users/sebastianwessel/projekte/buildown_ai/node_modules/ohash/dist/index.mjs';
import 'file:///Users/sebastianwessel/projekte/buildown_ai/node_modules/ufo/dist/index.mjs';
import 'file:///Users/sebastianwessel/projekte/buildown_ai/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/sebastianwessel/projekte/buildown_ai/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/sebastianwessel/projekte/buildown_ai/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/sebastianwessel/projekte/buildown_ai/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/sebastianwessel/projekte/buildown_ai/node_modules/radix3/dist/index.mjs';
import 'file:///Users/sebastianwessel/projekte/buildown_ai/node_modules/vue/index.mjs';
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

const join_waitlist_post = defineEventHandler(async (event) => {
  const { token, email } = await readBody(event);
  if (!token) {
    throw createError({
      statusCode: 422,
      statusMessage: "Token not provided."
    });
  }
  const turnstileResponse = await verifyTurnstileToken(token);
  if (!turnstileResponse.success) {
    throw createError({
      statusCode: 400,
      statusMessage: turnstileResponse["error-codes"][0]
    });
  }
  try {
    const db = event.context.cloudflare.env.DB;
    const result = await db.prepare("INSERT INTO waitlist (email) VALUES (?)").bind(email).all();
    return {
      ok: true,
      result
    };
  } catch (err) {
    console.error(err);
    throw createError({
      statusCode: 500,
      statusMessage: "Internal Server Error"
    });
  }
});

export { join_waitlist_post as default };
//# sourceMappingURL=join_waitlist.post.mjs.map
