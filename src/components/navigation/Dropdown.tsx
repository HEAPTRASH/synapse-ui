import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { cn } from "../../utils/cn";
import { useConfig } from "../../ConfigProvider";
import { Button, type ButtonProps } from "../general/Button";

export type DropdownProps = DropdownMenu.DropdownMenuProps;

export function Dropdown(props: DropdownProps) {
  const { direction } = useConfig();
  // Radix reads direction from its own `dir` prop / DirectionProvider, and the
  // portaled panel lives outside ConfigProvider's wrapper — so feed it here.
  return <DropdownMenu.Root dir={direction} {...props} />;
}

export type DropdownTriggerProps = DropdownMenu.DropdownMenuTriggerProps &
  Pick<ButtonProps, "variant" | "size" | "icon" | "iconPlacement">;

/** Open state: inset 2px accent ring (Button's frame has no border to tint). */
const triggerOpenClass =
  "data-[state=open]:shadow-[inset_0_0_0_2px_var(--su-accent)]";

export function DropdownTrigger({
  className,
  asChild,
  children,
  variant,
  size,
  icon,
  iconPlacement,
  ...rest
}: DropdownTriggerProps) {
  if (asChild) {
    return (
      <DropdownMenu.Trigger
        asChild
        className={cn(triggerOpenClass, className)}
        {...rest}
      >
        {children}
      </DropdownMenu.Trigger>
    );
  }

  return (
    <DropdownMenu.Trigger asChild>
      <Button
        variant={variant}
        size={size}
        icon={icon}
        iconPlacement={iconPlacement}
        className={cn(triggerOpenClass, className)}
        {...rest}
      >
        {children}
      </Button>
    </DropdownMenu.Trigger>
  );
}

/* Popover surface — the shared `su-popover` shortcut plus this menu's sizing. */
const contentClass =
  "su-popover " +
  "min-w-[max(180px,var(--radix-dropdown-menu-trigger-width,0px))] max-w-[min(calc(100vw-var(--su-space-4)),320px)] " +
  "max-h-[var(--radix-dropdown-menu-content-available-height)] overflow-y-auto overscroll-contain " +
  // `animate-duration-*` (animation-duration), not `duration-*` (transition-duration):
  // su-pop-in's shortcut hardcodes the animation shorthand at --su-duration-fast.
  "origin-[var(--radix-dropdown-menu-content-transform-origin)] animate-su-pop-in animate-duration-[var(--su-duration-base)] " +
  "data-[state=closed]:(animate-reverse animate-duration-[var(--su-duration-fast)]) motion-reduce:animate-none";

export type DropdownContentProps = DropdownMenu.DropdownMenuContentProps & {
  /** Portal target (Ant Design's `getPopupContainer`). Defaults to document.body. */
  container?: HTMLElement | null;
};

export function DropdownContent({
  className,
  sideOffset = 8,
  align = "start",
  collisionPadding = 8,
  container,
  forceMount,
  ...rest
}: DropdownContentProps) {
  return (
    <DropdownMenu.Portal container={container} forceMount={forceMount}>
      <DropdownMenu.Content
        sideOffset={sideOffset}
        align={align}
        collisionPadding={collisionPadding}
        forceMount={forceMount}
        className={cn(contentClass, className)}
        {...rest}
      />
    </DropdownMenu.Portal>
  );
}

/** Shared row vocabulary — items, checkbox/radio items and sub-triggers. */
export const dropdownItemClass =
  "flex items-center gap-su2 min-h-[var(--su-control-md)] [@media(hover:none)]:min-h-[var(--su-hit-target)] " +
  "px-su3 py-su1 rounded-none text-label text-subhead outline-none cursor-default select-none " +
  "transition-colors duration-[var(--su-duration-fast)] ease-[var(--su-ease-out)] " +
  "data-[highlighted]:(bg-ink text-paper) contrast-more:data-[highlighted]:(bg-label text-paper) " +
  "data-[disabled]:(text-label-tertiary cursor-not-allowed)";

const dangerItemClass =
  "text-danger-text data-[highlighted]:!bg-danger-strong data-[highlighted]:!text-on-action";

export type DropdownItemProps = DropdownMenu.DropdownMenuItemProps & {
  /** Destructive action (delete, revoke) — Ant Design's `items[].danger`. */
  danger?: boolean;
};

export function DropdownItem({ className, danger, ...rest }: DropdownItemProps) {
  return (
    <DropdownMenu.Item
      className={cn(dropdownItemClass, danger && dangerItemClass, className)}
      {...rest}
    />
  );
}

export type DropdownSeparatorProps = DropdownMenu.DropdownMenuSeparatorProps;

export function DropdownSeparator({ className, ...rest }: DropdownSeparatorProps) {
  return (
    <DropdownMenu.Separator
      className={cn("h-px my-su1 -mx-su1 su-rule", className)}
      {...rest}
    />
  );
}

export type DropdownLabelProps = DropdownMenu.DropdownMenuLabelProps;

export function DropdownLabel({ className, ...rest }: DropdownLabelProps) {
  return (
    <DropdownMenu.Label
      className={cn(
        "su-label pt-su2 px-su3 pb-su1 text-label-secondary",
        className,
      )}
      {...rest}
    />
  );
}

/** Groups items under a DropdownLabel (`role="group"`). */
export type DropdownGroupProps = DropdownMenu.DropdownMenuGroupProps;

export function DropdownGroup(props: DropdownGroupProps) {
  return <DropdownMenu.Group {...props} />;
}

export type DropdownSubProps = DropdownMenu.DropdownMenuSubProps;

export function DropdownSub(props: DropdownSubProps) {
  return <DropdownMenu.Sub {...props} />;
}

export type DropdownSubTriggerProps = DropdownMenu.DropdownMenuSubTriggerProps;

export function DropdownSubTrigger({
  className,
  children,
  ...rest
}: DropdownSubTriggerProps) {
  return (
    <DropdownMenu.SubTrigger
      className={cn(
        dropdownItemClass,
        "data-[state=open]:(bg-fill-secondary text-label)",
        className,
      )}
      {...rest}
    >
      {children}
      <svg
        className="ms-auto shrink-0 rtl:-scale-x-100"
        viewBox="0 0 12 12"
        width="12"
        height="12"
        aria-hidden="true"
      >
        <path
          d="M4.75 3 7.75 6l-3 3"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="square"
        />
      </svg>
    </DropdownMenu.SubTrigger>
  );
}

export type DropdownSubContentProps = DropdownMenu.DropdownMenuSubContentProps;

export function DropdownSubContent({
  className,
  sideOffset = 4,
  ...rest
}: DropdownSubContentProps) {
  return (
    <DropdownMenu.Portal>
      <DropdownMenu.SubContent
        sideOffset={sideOffset}
        className={cn(contentClass, className)}
        {...rest}
      />
    </DropdownMenu.Portal>
  );
}

/* Square accent swatch, not a tick or a dot — the brand's slot language. */
const indicatorClass =
  "absolute start-su2 top-1/2 -translate-y-1/2 w-[10px] h-[10px] bg-accent";
const selectableItemClass = "relative ps-su6";

export type DropdownCheckboxItemProps =
  DropdownMenu.DropdownMenuCheckboxItemProps;

export function DropdownCheckboxItem({
  className,
  children,
  ...rest
}: DropdownCheckboxItemProps) {
  return (
    <DropdownMenu.CheckboxItem
      className={cn(dropdownItemClass, selectableItemClass, className)}
      {...rest}
    >
      <DropdownMenu.ItemIndicator className={indicatorClass} />
      {children}
    </DropdownMenu.CheckboxItem>
  );
}

export type DropdownRadioGroupProps = DropdownMenu.DropdownMenuRadioGroupProps;

export function DropdownRadioGroup(props: DropdownRadioGroupProps) {
  return <DropdownMenu.RadioGroup {...props} />;
}

export type DropdownRadioItemProps = DropdownMenu.DropdownMenuRadioItemProps;

export function DropdownRadioItem({
  className,
  children,
  ...rest
}: DropdownRadioItemProps) {
  return (
    <DropdownMenu.RadioItem
      className={cn(dropdownItemClass, selectableItemClass, className)}
      {...rest}
    >
      <DropdownMenu.ItemIndicator className={indicatorClass} />
      {children}
    </DropdownMenu.RadioItem>
  );
}
