
import { updateAppConfig } from '#app/config'
import { defuFn } from 'defu'

const inlineConfig = {
  "nuxt": {
    "buildId": "cf8ab284-9d98-4c81-9025-893a9a10ecf5"
  }
}

// Vite - webpack is handled directly in #app/config
if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    updateAppConfig(newModule.default)
  })
}

import cfg0 from "/Users/sebastianwessel/projekte/buildown_ai/app.config.ts"

export default /*@__PURE__*/ defuFn(cfg0, inlineConfig)
