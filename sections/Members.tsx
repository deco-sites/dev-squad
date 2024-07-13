import Draggable from "site/components/ui/Draggable.tsx";
import Share from "site/components/ui/Share.tsx";

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
      <Draggable members={members}></Draggable>
      <Share></Share>
    </>
  );
}
