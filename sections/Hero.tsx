import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface Props {
  title: string;
  logo: ImageWidget;
}

export default function Section({ title, logo }: Props) {
  return <div>
    <Image
      width={80}
      height={80}
      class="object-fit z-10"
      sizes="(max-width: 640px) 100vw, 30vw"
      src={image}
      alt={image}
      decoding="async"
      loading="lazy"
    />
    <h1>{title}</h1>
  </div>
}