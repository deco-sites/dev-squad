import { useScript } from "deco/hooks/useScript.ts";
import { Member } from "site/sections/Members.tsx";
import CardMember from "site/components/ui/CardMember.tsx";

interface DraggableProps {
  members?: Member[];
}

export default function Draggable({ members }: DraggableProps) {
  console.log(members);

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
        <div
          class="list half basis-1/2 container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6"
          id="list1"
        >
          {members && members.map((m) => {
            return <CardMember member={m} />;
          })}
        </div>

        <div class="list half basis-1/2 h-80" id="list2">
        </div>
      </div>
    </>
  );
}
