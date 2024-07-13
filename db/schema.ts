/**
 * The code snippet below is an example.
 */

import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const members = sqliteTable("members", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name"),
  description: text("description"),
  imageUrl: text("imageUrl"),
  role: text("role"),
  score: integer("score"),
  xUrl: text("xUrl"),
  linkedInUrl: text("linkedInUrl"),
  gitHubUrl: text("gitHubUrl"),
});