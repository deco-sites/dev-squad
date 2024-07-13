import { pickems } from "site/db/schema.ts";
import type { AppContext } from "site/apps/deco/records.ts";
import { eq, type InferSelectModel } from "drizzle-orm";

export type Pickem = InferSelectModel<typeof pickems>;

export default async function getMembers(
  _: any,
  req: Request,
  { invoke }: AppContext,
): Promise<Pickem> {
  const url = new URL(req.url);
  const pathname = url.pathname;
  const slug = pathname.slice(1);

  // Drizzle ORM client
  const drizzle = await invoke.records.loaders.drizzle();

  // Select all members from the database
  const [data] = await drizzle.select().from(pickems).where(
    eq(pickems.slug, slug),
  );

  return data;
}
