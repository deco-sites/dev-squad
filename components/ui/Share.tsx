import { useScript } from "deco/hooks/useScript.ts";

export default function Share() {
  const onClick = () => {
    console.log("share!");
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
