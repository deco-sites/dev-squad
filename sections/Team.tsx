import { Member } from "site/sections/Members.tsx";
import { Pickem } from "site/loaders/GetPickems.tsx";

export default function Team({ pickem }: { pickem: Pickem }) {
  let members: Member[] = [];
  if (pickem?.json) {
    members = JSON.parse(pickem.json) as Member[];
    console.log(members);
  }

  return (
    <>
      {members.map((m) => {
        return (
          <>
            <p class="text-white">Hello {m.name}</p>
            <p class="text-white">Hello {m.description}</p>
            <p class="text-white">Hello {m.imageUrl}</p>
            <p class="text-white">Hello {m.role}</p>
            <p class="text-white">Hello {m.score}</p>
            <p class="text-white">Hello {m.xUrl}</p>
            <p class="text-white">Hello {m.linkedInUrl}</p>
            <p class="text-white">Hello {m.gitHubUrl}</p>
          </>
        );
      })}
    </>
  );
}
