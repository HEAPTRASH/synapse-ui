import * as RadixAvatar from "@radix-ui/react-avatar";
import { forwardRef, type ComponentPropsWithoutRef, type ReactNode } from "react";
import { cn } from "../../utils/cn";

export type AvatarSize = "sm" | "md" | "lg";

export interface AvatarProps extends ComponentPropsWithoutRef<typeof RadixAvatar.Root> {
  src?: string;
  /**
   * Accessible name for the photo (e.g. the person's name) — required whenever
   * `src` is set; leave unset only for a decorative avatar.
   */
  alt?: string;
  fallback?: ReactNode;
  size?: AvatarSize;
}

const sizeClass: Record<AvatarSize, string> = {
  sm: "size-[28px] text-caption-1",
  md: "size-9 text-footnote",
  lg: "size-12 text-subhead",
};

// ponytail: fallback text is assumed to be 1-2 letter initials and hard-clips
// beyond that; if a caller ever needs longer text, add `truncate` here rather
// than Ant's ResizeObserver font auto-shrink.
export const Avatar = forwardRef<HTMLSpanElement, AvatarProps>(function Avatar(
  { src, alt, fallback, size = "md", className, children, ...rest },
  ref,
) {
  return (
    <RadixAvatar.Root
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center overflow-hidden rounded-none bg-fill-secondary text-label-secondary font-semibold shrink-0",
        sizeClass[size],
        className,
      )}
      {...rest}
    >
      {src ? (
        <RadixAvatar.Image
          className="size-full object-cover"
          src={src}
          alt={alt ?? ""}
        />
      ) : null}
      <RadixAvatar.Fallback
        className="flex items-center justify-center size-full"
        delayMs={200}
      >
        {fallback ?? children ?? "?"}
      </RadixAvatar.Fallback>
    </RadixAvatar.Root>
  );
});
