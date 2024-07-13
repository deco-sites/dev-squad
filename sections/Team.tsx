import { Member } from "site/sections/Members.tsx";
import { Pickem } from "site/loaders/GetPickems.tsx";
import CardMember from "site/components/ui/CardMember.tsx";
import { useSection } from "deco/hooks/useSection.ts";

export default function Team({ pickem, selected }: { pickem: Pickem, selected?: Member }) {
  let members: Member[] = [];
  if (pickem?.json) {
    members = JSON.parse(pickem.json) as Member[];
    console.log(members);
  }

  return (
    <div id="team-showcase" class="flex flex-col items-center gap-8 md:gap-12">
      <div class="w-full max-w-xl px-4">
        {selected ? (<CardMember member={selected} />) : (<CardMember member={members[0]} />)}
      </div>
      <div class="w-full max-w-xl grid grid-flow-col auto-cols-[64px] md:auto-cols-[86px] place-content-center gap-4">
        {members.map((m) => {
          return (
            <div hx-get={useSection({ props: { selected: m } })} hx-target="#team-showcase" hx-swap="outerHTML">
              <CardMember member={m} selected={selected?.name ?? members[0].name} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
