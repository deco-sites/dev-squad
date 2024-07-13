import { useScript } from "deco/hooks/useScript.ts";

export default function Draggable() {
  const onLoad = () => {
    Sortable.create(document.getElementById("list1"), {
      group: "shared",
      animation: 150,
    });
    Sortable.create(document.getElementById("list2"), {
      group: {
        name: "shared",
        put: function (to) {
          return to.el.children.length < 5;
        },
      },
      animation: 150,
    });
  };

  return (
    <>
      <script
        type="module"
        dangerouslySetInnerHTML={{ __html: useScript(onLoad) }}
      />

      <div class="flex w-full">
        <div class="list half basis-1/2" id="list1">
          <div>Item 1.1</div>
          <div>Item 1.2</div>
          <div>Item 1.3</div>
          <div>Item 1.4</div>
          <div>Item 1.5</div>
        </div>

        <div class="list half basis-1/2" id="list2">
          <div>Item 2.1</div>
          <div>Item 2.2</div>
          <div>Item 2.3</div>
          <div>Item 2.4</div>
          <div>Item 2.5</div>
        </div>
      </div>
    </>
  );
}
