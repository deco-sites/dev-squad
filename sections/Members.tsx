import { useScript } from "deco/hooks/useScript.ts";
import CardMember from "../components/ui/CardMember.tsx";
import DropArea from "./DropArea.tsx";
import { useSection } from "deco/hooks/useSection.ts";

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
  removing?: boolean;
  dragging?: boolean;
}

export default function Members({ members, removing, dragging }: MemberProps) {
  const onDrop = () => {
    event!.preventDefault();

    removing = false;

    const target = event.target.closest("ul");
    const element = document.getElementById(
      event.dataTransfer.getData("text/plain"),
    );
    target.appendChild(element);
  };

  const onDragOver = () => {
    event!.preventDefault();
    removing = true;
  };

  const onDragLeave = () => {
    event!.preventDefault();
    removing = false;
  };

  const onDragStart = () => {
    event!.stopPropagation();
    dragging = true;

    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("text/plain", event.target.id);
  };

  return (
    <>
      <div class="drag-and-drop" x-data="{ adding: false, removing: false }">
        <div class="drag-and-drop__container drag-and-drop__container--from">
          <div class="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
            <ul
              className={`drag-and-drop__items ${
                removing ? "drag-and-drop__items--removing" : ""
              }`}
              hx-on:drop={useScript(onDrop)}
              hx-on:dragover={useScript(onDragOver)}
              hx-on:dragleave={useScript(onDragLeave)}
            >
              {members && members.map((m, i) => {
                return (
                  <>
                    <li
                      id={i}
                      className={`drag-and-drop__item ${
                        dragging ? "drag-and-drop__item--dragging" : ""
                      }`}
                      hx-on:dragstart={useScript(onDragStart)}
                      hx-on:dragend={useSection({ props: { dragging: false } })}
                      hx-data="{ dragging: false }"
                      draggable="true"
                    >
                      Your Item #1
                      <CardMember member={m} />
                    </li>
                  </>
                );
              })}
            </ul>
          </div>

          <DropArea adding={false}></DropArea>
        </div>
      </div>
    </>
  );
}
