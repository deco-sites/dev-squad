import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface Props {
  title: string;
  logo: ImageWidget;
}

export default function Section({ title, logo }: Props) {
  return <header class="flex flex-col items-center text-center py-6 md:py-12 gap-4 text-neutral">
    <a href="/">
      <Image
        width={40}
        height={40}
        class="object-fit z-10"
        src={logo}
        alt="Project and website logo"
      />
    </a>
    <h1 class="tracking-wide font-josefin-sans text-3xl md:text-6xl px-4">{title}</h1>
  </header>
}