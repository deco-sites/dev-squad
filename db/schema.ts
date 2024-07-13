/**
 * The code snippet below is an example.
 */

import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const pickems = sqliteTable("pickems", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  slug: text("slug"),
  json: text("json"),
});
