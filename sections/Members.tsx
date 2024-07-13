interface Member {
  id: number;
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
      {members && members.map((m) => {
        return (
          <>
            <p>{m.id}</p>
            <p>{m.name}</p>
            <p>{m.description}</p>
            <p>{m.imageUrl}</p>
            <p>{m.role}</p>
            <p>{m.score}</p>
            <p>{m.xUrl}</p>
            <p>{m.linkedInUrl}</p>
            <p>{m.gitHubUrl}</p>
          </>
        );
      })}
    </>
  );
}
