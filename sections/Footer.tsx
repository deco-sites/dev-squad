interface Props {
  href: string;
  brand: string;
  text: string;
}

function Footer({
  brand,
  href,
  text,
}: Props) {
  return (
    <footer class="p-4 w-full text-center text-neutral">
      <p>
        {text} {brand && (
          <a
            href={href}
            class="font-josefin-sans text-primary"
            target="_blank"
          >
            {brand}
          </a>
        )}
      </p>
    </footer>
  );
}

export default Footer;
