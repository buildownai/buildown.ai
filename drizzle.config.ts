// drizzle.config.ts
import type { Config } from "drizzle-kit";

const { LOCAL_DB_PATH } = process.env;

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
        accountId: "",
        databaseId: "",
        token: "",
      },
    } satisfies Config);
