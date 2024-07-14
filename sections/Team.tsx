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
        <button class="ml-auto flex items-center gap-2 focus:text-primary after:content-['✓'] after:text-primary after:transition after:ease-out after:duration-200 after:opacity-0 active:after:opacity-100" hx-on:click="navigator?.clipboard?.writeText(document?.location?.href); console.log('Copied')">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-share"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
            <polyline points="16 6 12 2 8 6" />
            <line x1="12" x2="12" y1="2" y2="15" />
          </svg>
          <span class="text-sm">Copy URL to share</span>
        </button>
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
