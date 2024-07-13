import { Member } from "site/sections/Members.tsx";

interface TeamProps {
  members?: Member[];
}

export default function Team({ members }: TeamProps) {
  console.log(members);
  // console.log(hash);
  // const json = btoa(hash);
  // const members = JSON.parse(json) as Member[];
  return (
    <div>
      {members && members.map((m) => {
        return (
          <>
            <p>{m.name}</p>
          </>
        );
      })}
    </div>
  );
}
