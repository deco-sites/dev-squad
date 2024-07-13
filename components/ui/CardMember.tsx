import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "./Icon.tsx";

import type { Member } from "../sections/Members.tsx";

export default function Members({ member }: Member) {
  return (
    <article class="bg-black text-neutral border border-primary rounded-md">
      {member.imageUrl && (
        <Image
          src={member.imageUrl || ""}
          alt={`Profile picture from ${member.name}` || ""}
          height={160}
          width={280}
        />
      )}
      <div class="p-6">
        <header class="">
          <h2 class="font-josefin-sans text-xl">{member.name}</h2>
          <p class="line-clamp-2 text-xs">{member.description}</p>
        </header>
        <p class="font-josefin-sans">{member.role}</p>
        <footer class="flex gap-x-4">
          <a href={member.xUrl} target="_blank"><Icon id="XMark" /></a>
          <a href={member.linkedInUrl} target="_blank"><Icon id="XMark" /></a>
          <a href={member.gitHubUrl} target="_blank"><Icon id="XMark" /></a>
          <div class="font-josefin-sans">
            <Icon id="Logo" />
            <p>{member.score}</p>
          </div>
        </footer>
      </div>
    </article>
  );
}
