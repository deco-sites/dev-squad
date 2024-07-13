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
        class="container max-w-[1280px] mx-auto bg-neutral bg-opacity-5 py-8 px-4 md:p-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 rounded-t-2xl"
        id="grid-cards"
      >
        {members && members.map((m) => {
          return <CardMember member={m} />;
        })}
      </div>

      <div class="bg-base-100 fixed bottom-[3rem] left-1/2 -translate-x-1/2 grid grid-flow-col auto-cols-[64px] place-content-center gap-2 w-full max-w-[360px] h-28 p-4 border border-primary rounded-md" id="drop-area">
      </div>
    </>
  );
}
