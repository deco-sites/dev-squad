import { useScript } from "deco/hooks/useScript.ts";
import { Member } from "site/sections/Members.tsx";
import CardMember from "site/components/ui/CardMember.tsx";

interface DraggableProps {
  members?: Member[];
}

export default function Draggable({ members }: DraggableProps) {
  console.log(members);

  const onLoad = () => {
    Sortable.create(document.getElementById("grid-cards"), {
      group: "shared",
      animation: 150,
    });
    Sortable.create(document.getElementById("drop-area"), {
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

      <div
        class="container mx-auto min-h-80 bg-neutral bg-opacity-5 p-6 md:p-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 rounded-lg"
        id="grid-cards"
      >
        {members && members.map((m) => {
          return <CardMember member={m} />;
        })}
      </div>

      <div class="bg-base-100 fixed bottom-6 left-1/2 -translate-x-1/2 grid grid-flow-col auto-cols-[64px] lg:auto-cols-[86px] place-content-center gap-4 w-full max-w-xl h-32 md:h-40 p-4 border border-primary rounded-md" id="drop-area">
      </div>
    </>
  );
}
