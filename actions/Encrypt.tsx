import { AppContext } from "site/apps/site.ts";

interface Props {
  /**
   * @description The json data to be encrypted.
   */
  json?: string;
}

export default async function action(
  props: Props,
  _req: Request,
  ctx: AppContext,
) {
  
}
