import { useSection } from "deco/hooks/useSection.ts";
import { useScript } from "deco/hooks/useScript.ts";

interface Props {
  adding: boolean;
}

export default function DropArea({ adding = false }: Props) {
  const dragOver = () => {
    event!.preventDefault();
    useSection({ props: { adding: true } });
  };

  const dragLeave = () => {
    event!.preventDefault();
    useSection({ props: { adding: false } });
  };

  const onDrop = () => {
    event!.preventDefault();
    useSection({ props: { adding: false } });

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
        x-on:drop={useScript(onDrop)}
        x-on:dragover={useScript(dragOver)}
        x-on:dragleave={useScript(dragLeave)}
      >
      </ul>
    </div>
  );
}
