import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "../../utils/cn";
import { useFormContext, useFormItemContext } from "./Form";

export interface SliderProps {
  "aria-label"?: string;
  value?: number[];
  defaultValue?: number[];
  min?: number;
  max?: number;
  step?: number;
  orientation?: "horizontal" | "vertical";
  disabled?: boolean;
  className?: string;
  onValueChange?: (value: number[]) => void;
  onValueCommit?: (value: number[]) => void;
}

export function Slider({
  value,
  defaultValue = [0],
  min = 0,
  max = 100,
  step = 1,
  orientation = "horizontal",
  disabled,
  className,
  onValueChange,
  onValueCommit,
  "aria-label": ariaLabel = "Value",
}: SliderProps) {
  const form = useFormContext();
  const item = useFormItemContext();
  const isDisabled = disabled ?? form.disabled;
  const thumbValues = value ?? defaultValue;

  return (
    <SliderPrimitive.Root
      id={item?.id}
      value={value}
      defaultValue={defaultValue}
      min={min}
      max={max}
      step={step}
      orientation={orientation}
      disabled={isDisabled}
      className={cn(
        "relative flex items-center w-full min-h-[var(--su-hit-target)] touch-none select-none",
        "data-[orientation=vertical]:flex-col data-[orientation=vertical]:w-auto data-[orientation=vertical]:h-40 data-[orientation=vertical]:min-w-[var(--su-hit-target)]",
        isDisabled && "opacity-45 pointer-events-none",
        className,
      )}
      onValueChange={onValueChange}
      onValueCommit={onValueCommit}
      aria-describedby={item?.descriptionId}
      aria-invalid={item?.error ? true : undefined}
    >
      <SliderPrimitive.Track className="relative flex-1 h-0.5 rounded-none bg-rule data-[orientation=vertical]:h-auto data-[orientation=vertical]:w-0.5">
        <SliderPrimitive.Range className="absolute h-full rounded-none bg-action data-[orientation=vertical]:h-auto data-[orientation=vertical]:w-full" />
      </SliderPrimitive.Track>
      {thumbValues.map((_, index) => (
        <SliderPrimitive.Thumb
          key={index}
          className="block size-4 border border-solid border-rule-strong rounded-none bg-paper shadow-none cursor-grab transition-[border-color,background-color] duration-[var(--su-duration-fast)] ease-[var(--su-ease-out)] motion-reduce:transition-none hover:border-accent active:cursor-grabbing active:border-action-press active:bg-accent-soft su-focus-ring"
          aria-label={
            thumbValues.length > 1 ? `${ariaLabel} ${index + 1}` : ariaLabel
          }
        />
      ))}
    </SliderPrimitive.Root>
  );
}
