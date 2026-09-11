import { useState } from "react";
import { cn } from "../../utils/cn";
import { useFormContext, useFormItemContext } from "./Form";

export interface RateProps {
  "aria-label"?: string;
  value?: number;
  defaultValue?: number;
  count?: number;
  allowClear?: boolean;
  disabled?: boolean;
  className?: string;
  onChange?: (value: number) => void;
}

// 44x44 invisible hit box around a 22px glyph — the guide's "small visible control,
// full-size hit area" pattern. The boxes themselves provide the spacing, so gap-0.
const starButtonClass = [
  "inline-flex items-center justify-center size-[var(--su-hit-target)] p-0 bg-transparent cursor-pointer",
  "transition-colors duration-[var(--su-duration-fast)] ease-[var(--su-ease-out)]",
  "su-focus-ring",
].join(" ");

export function Rate({
  value: valueProp,
  defaultValue = 0,
  count = 5,
  allowClear = true,
  disabled,
  className,
  onChange,
  "aria-label": ariaLabel = "Rating",
}: RateProps) {
  const form = useFormContext();
  const item = useFormItemContext();
  const isDisabled = disabled ?? form.disabled;

  const [internal, setInternal] = useState(defaultValue);
  const [preview, setPreview] = useState<number | null>(null);

  const isControlled = valueProp !== undefined;
  const value = isControlled ? valueProp : internal;
  // Drives both hover and keyboard-focus previews, so both input modes see the same fill.
  const display = preview ?? value;

  return (
    // Not role="slider": a slider must be focusable and own its arrow keys, and
    // must not contain interactive descendants. The stars are real buttons, so
    // this is a labelled group of them.
    // ponytail: no allowHalf / custom character / arrow-key roving focus — add
    // them as additive props when a real rating flow asks for them.
    <div
      id={item?.id}
      className={cn("inline-flex items-center", className)}
      role="group"
      aria-label={ariaLabel}
      aria-describedby={item?.descriptionId}
      aria-invalid={item?.error ? true : undefined}
      onMouseLeave={() => setPreview(null)}
    >
      {Array.from({ length: count }, (_, index) => {
        const starValue = index + 1;
        return (
          <button
            key={starValue}
            type="button"
            disabled={isDisabled}
            className={cn(
              starButtonClass,
              starValue <= display
                ? "text-ink"
                : "text-[var(--su-gray-4)] contrast-more:text-[var(--su-label)]",
              isDisabled && "opacity-45 cursor-not-allowed",
            )}
            aria-label={`${starValue} star${starValue > 1 ? "s" : ""}`}
            aria-pressed={starValue === value}
            onMouseEnter={() => !isDisabled && setPreview(starValue)}
            onFocus={() => !isDisabled && setPreview(starValue)}
            onBlur={() => setPreview(null)}
            onClick={() => {
              if (isDisabled) return;
              const next = allowClear && value === starValue ? 0 : starValue;
              if (!isControlled) setInternal(next);
              onChange?.(next);
            }}
          >
            <svg viewBox="0 0 24 24" className="size-[22px]" fill="currentColor" aria-hidden="true">
              <path d="M12 2.5 15.09 8.76 22 9.77l-5 4.87 1.18 6.86L12 18.26l-6.18 3.24L7 14.64l-5-4.87 6.91-1.01z" />
            </svg>
          </button>
        );
      })}
      {display > 0 && (
        <span className="ml-su1 text-footnote text-label-secondary">
          {display}/{count}
        </span>
      )}
    </div>
  );
}
