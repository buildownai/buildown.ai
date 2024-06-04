// drizzle.config.ts
import type { Config } from "drizzle-kit";

const {
  LOCAL_DB_PATH,
  WRANGLER_CONFIG,
  DB_NAME = "buildownai-waitlist",
} = process.env;

export default LOCAL_DB_PATH
  ? ({
      schema: "./src/schema.ts",
      dialect: "sqlite",
      dbCredentials: {
        url: LOCAL_DB_PATH,
      },
    } satisfies Config)
  : ({
      schema: "./src/schema.ts",
      out: "./migrations",
      dialect: "sqlite",
      driver: "d1-http",
      dbCredentials: {
        wranglerConfigPath:
          new URL("wrangler.toml", import.meta.url).pathname +
          // This is a hack to inject additional cli flags to wrangler
          // since drizzle-kit doesn't support specifying environments
          WRANGLER_CONFIG
            ? ` ${WRANGLER_CONFIG}`
            : "",
        dbName: DB_NAME,
      },
    } satisfies Config);