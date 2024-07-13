import CardMember from "../components/ui/CardMember.tsx";
import Draggable from "site/components/ui/Draggable.tsx";

export interface Member {
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
    <>
      <div class="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
        {members && members.map((m) => {
          return (
            <>
              <CardMember member={m} />
            </>
          );
        })}
      </div>
      <Draggable></Draggable>
    </>
  );
}
