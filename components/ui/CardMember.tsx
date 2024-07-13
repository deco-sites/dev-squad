import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

import { Member } from "site/sections/Members.tsx";

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
      <div class="p-6 flex flex-col gap-6">
        <header class="flex flex-col gap-3">
          <h2 class="font-josefin-sans text-xl">{member.name}</h2>
          <p class="line-clamp-2 text-xs">{member.description}</p>
        </header>
        <p class="font-josefin-sans flex gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary lucide lucide-tag">
            <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"/>
            <circle cx="7.5" cy="7.5" r=".5" fill="currentColor"/>
          </svg>
          {member.role}
        </p>
        <footer class="flex gap-x-4">
          <a href={member.xUrl} target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-twitter">
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
            </svg>
          </a>
          <a href={member.linkedInUrl} target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect width="4" height="12" x="2" y="9"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </a>
          <a href={member.gitHubUrl} target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
              <path d="M9 18c-4.51 2-5-2-7-2"/>
            </svg>
          </a>
          <div class="ml-auto font-josefin-sans flex gap-3">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.9436 16.0754C16.116 18.4613 13.2377 20 10 20C5.62792 20 1.91116 17.1942 0.552094 13.2851L2.90402 10.9131L2.72967 10.7402C2.97791 10.4907 3.23787 10.23 3.5028 9.9651C4.96092 8.507 6.62525 6.86498 7.27857 6.31214C8.95042 4.89744 11.3714 5.22146 12.8739 6.37718C13.5543 6.90061 15.2175 8.54402 16.6416 9.97972C17.259 10.6022 17.8486 11.2031 18.3226 11.6887C18.4328 11.1429 18.4906 10.5782 18.4906 10C18.4906 5.31079 14.6892 1.50943 10 1.50943C5.31079 1.50943 1.50943 5.31079 1.50943 10L1.50945 10.0141L0.101977 11.4335C0.0347753 10.9654 0 10.4867 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 11.7038 19.5739 13.308 18.8225 14.712L16.98 12.8296L16.8069 12.9991C16.3509 12.5324 15.7983 11.9695 15.2216 11.3882C13.7448 9.89936 12.2004 8.3824 11.6544 7.96243C10.7041 7.23137 9.35147 7.17803 8.57049 7.83889C7.9974 8.32383 6.40701 9.88934 4.91701 11.3793C4.18174 12.1146 3.48445 12.8177 2.97085 13.3372C2.76031 13.5502 2.58072 13.7322 2.44211 13.8728C3.8499 16.6146 6.70588 18.4906 10 18.4906C12.8272 18.4906 15.3317 17.1087 16.8749 14.9836L17.9436 16.0754Z" fill="#C6FF00"/>
            </svg>
            <p>{member.score}</p>
          </div>
        </footer>
      </div>
    </article>
  );
}
