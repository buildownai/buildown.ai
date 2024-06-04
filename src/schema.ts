import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const waitlist = sqliteTable("waitlist", {
  id: integer("id").primaryKey({
    autoIncrement: true,
  }),
  email: text("email").notNull(),
  created: integer("created", {
    mode: "timestamp_ms",
  })
    .notNull()
    .$defaultFn(() => new Date()),
  modified: integer("modified", {
    mode: "timestamp_ms",
  })
    .notNull()
    .$defaultFn(() => new Date()),
});
