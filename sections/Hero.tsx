import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface Props {
  title: string;
  logo: ImageWidget;
}

export default function Section({ title, logo }: Props) {
  return <header class="flex flex-col items-center text-center py-8 md:py-12 gap-6 text-neutral">
    <Image
      width={60}
      height={60}
      class="object-fit z-10"
      src={logo}
      alt="Project and website logo"
    />
    <h1 class="tracking-wide font-josefin-sans text-3xl md:text-6xl">{title}</h1>
  </header>
}