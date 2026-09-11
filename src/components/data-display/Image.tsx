import { useState, type ImgHTMLAttributes, type ReactNode } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "../general/Button";
import { cn } from "../../utils/cn";

export interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  fallback?: ReactNode;
  width?: number | string;
  height?: number | string;
  preview?: boolean;
}
export function Image({
  src,
  alt = "",
  fallback,
  width,
  height,
  preview = false,
  className,
  onError,
  ...rest
}: ImageProps) {
  const [failedSrc, setFailedSrc] = useState<string>();
  if (!src || failedSrc === src) {
    // One string for both the visible text and the accessible name (WCAG 2.5.3).
    // Visible string wins so the name always contains what is rendered.
    const fallbackLabel =
      (typeof fallback === "string" ? fallback : alt) || "Image unavailable";
    return (
      <span
        className={cn(
          "inline-flex items-center justify-center min-w-12 min-h-12 rounded-none border border-solid border-rule bg-canvas text-label-secondary font-medium",
          className,
        )}
        style={{ width, height }}
        role="img"
        aria-label={fallbackLabel}
      >
        {fallback ?? (alt ? alt.slice(0, 1).toUpperCase() : fallbackLabel)}
      </span>
    );
  }
  const img = (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={cn("block max-w-full object-cover rounded-none", className)}
      onError={(e) => {
        setFailedSrc(src);
        onError?.(e);
      }}
      {...rest}
    />
  );
  if (!preview) return img;
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button
          type="button"
          className={cn(
            "p-0 bg-transparent cursor-zoom-in",
            "transition-opacity duration-[var(--su-duration-fast)] ease-[var(--su-ease-out)] motion-reduce:transition-none",
            "[@media(hover:hover)]:hover:opacity-80",
            "su-focus-ring",
          )}
          aria-label={`Preview ${alt || "image"}`}
        >
          {img}
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        {/* Darker than `su-overlay` on purpose: a lightbox needs the white title legible over it. */}
        <Dialog.Overlay className="su-overlay-strong" />
        <Dialog.Content
          className="fixed inset-[5vh_5vw] z-[var(--su-z-modal)] flex flex-col items-center justify-center gap-su4 animate-su-pop-in motion-reduce:animate-none"
          aria-describedby={undefined}
        >
          {/* Literal white: always sits on the dark scrim, not theme-dependent. */}
          <Dialog.Title className="text-white text-body">
            {alt || "Image preview"}
          </Dialog.Title>
          <img
            src={src}
            alt={alt}
            className="max-w-full max-h-[75vh] object-contain"
          />
          <Dialog.Close asChild>
            <Button variant="default">Close preview</Button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
