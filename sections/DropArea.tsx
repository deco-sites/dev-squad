import { useScript } from "deco/hooks/useScript.ts";

interface Props {
  adding: boolean;
}

export default function DropArea({ adding = false }: Props) {
  const onDragOverDrop = () => {
    event!.preventDefault();
    adding = true;
  };

  const onDragLeaveDrop = () => {
    event!.preventDefault();
    adding = false;
  };

  const onDropOver = () => {
    event!.preventDefault();
    adding = false;

    const target = event!.target!.closest("ul");
    const element = document.getElementById(
      event!.dataTransfer.getData("text/plain"),
    );

    target.appendChild(element);
  };

  return (
    <div class="drag-and-drop__container drag-and-drop__container--to">
      <h3 class="drag-and-drop__title">To</h3>
      <ul
        className={`drag-and-drop__items ${
          adding ? "drag-and-drop__items--adding" : ""
        }`}
        hx-on:drop={useScript(onDropOver)}
        hx-on:dragover={useScript(onDragOverDrop)}
        hx-on:dragleave={useScript(onDragLeaveDrop)}
      >
      </ul>
    </div>
  );
}
