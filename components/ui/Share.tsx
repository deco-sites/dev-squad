import { useScript } from "deco/hooks/useScript.ts";
import { invoke } from "site/runtime.ts";

export default function Share() {
  const onClick = async () => {
    console.log("share!");
    const data = await invoke["deco-sites/my-store"].loaders.myLoader({
      /* your function input props */
    });
  };

  return (
    <button
      class="rounded bg-fuchsia-600 p-2 ml-auto block mr-4"
      hx-on:click={useScript(onClick)}
    >
      Share my pickems
    </button>
  );
}
