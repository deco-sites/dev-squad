import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface Member {
  /**
   * @description Member name.
   */
  name?: string;
  /**
   * @description Member description.
   */
  description?: string;
  /**
   * @description Member picture.
   */
  imageUrl?: string;
  /**
   * @description Member role.
   */
  role?: string;
  /**
   * @description Member score.
   */
  score?: number;
  /**
   * @description Member x url.
   */
  xUrl?: string;
  /**
   * @description Member LinkedIn url.
   */
  linkedInUrl?: string;
  /**
   * @description Member GitHub url.
   */
  gitHubUrl?: string;
}

interface MemberProps {
  members?: Member[];
}

export default function Members({ members }: MemberProps) {
  return (
    <div class="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
      {members && members.map((m) => {
        return (
          <article class="border border-primary rounded-md">
            {m.imageUrl && (
              <Image
                src={m.imageUrl || ""}
                alt={`Profile picture from ${m.name}` || ""}
                height={160}
                width={280}
              />
            )}
            <div class="bg-black text-neutral">
              <h2>{m.name}</h2>
              <p class="line-clamp-2">{m.description}</p>
            </div>
            <p>{m.role}</p>
            <p>{m.score}</p>
            <p>{m.xUrl}</p>
            <p>{m.linkedInUrl}</p>
            <p>{m.gitHubUrl}</p>
          </article>
        );
      })}
    </div>
  );
}
