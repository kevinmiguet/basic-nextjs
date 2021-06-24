import LinkComponent from "next/link";
export function Link({
  label,
  href,
}: {
  label: string;
  as?: "button";
  href: string;
}) {
  return (
    <LinkComponent href={href}>
      <a type="button">{label} </a>;
    </LinkComponent>
  );
}
