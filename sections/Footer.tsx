interface Props {
  href: string;
  brand: string;
  text: string;
}

function Footer({
  brand =
    "DayoDawn",
  href = "https://github.com/dayonel-dawntraoz",
  text = "Created & designed with love by",
}: Props) {
  return (
    <footer class="py-8 px-4 w-full text-center text-neutral">
      <p>
        {text} {brand && (
          <a
            href={href}
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
