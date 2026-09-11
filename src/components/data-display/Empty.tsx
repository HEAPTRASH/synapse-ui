import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../utils/cn";

export interface EmptyProps extends HTMLAttributes<HTMLDivElement> {
  image?: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
}

export function Empty({
  image,
  description = "No data",
  className,
  children,
  ...rest
}: EmptyProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center text-center py-su8 px-su4",
        className,
      )}
      {...rest}
    >
      {/* Decorative: `description` below already carries the meaning. */}
      <div className="mb-su3 text-label-tertiary" aria-hidden="true">
        {image ?? (
          <span className="inline-flex items-center justify-center size-16 rounded-none bg-fill-quaternary text-title-2">
            ∅
          </span>
        )}
      </div>
      <p className="m-0 text-subhead text-label-secondary">{description}</p>
      {children ? <div className="mt-su4">{children}</div> : null}
    </div>
  );
}
