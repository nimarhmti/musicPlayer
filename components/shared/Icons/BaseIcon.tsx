import { type SVGProps } from "react";

import { type IconName } from "@/types/name";

export { IconName };

export function BaseIcon({
  name,
  childClassName,
  className,
  children,
  ...props
}: SVGProps<SVGSVGElement> & {
  name: IconName;
  childClassName?: string;
}) {
  return (
    <svg
      {...props}
      className={`inline self-center w-[1em] h-[1em] ${className}`}
    >
      <use href={`./icons/sprite.svg#${name}`} />
    </svg>
  );
}
