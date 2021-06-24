import { MouseEventHandler } from "react";
export function Button({
  label,
  onClick,
}: {
  onClick: MouseEventHandler<HTMLButtonElement>;
  label: string;
  as?: "button";
}) {
  return (
    <button type="button" value={label} onClick={onClick}>
      {label}
    </button>
  );
}
