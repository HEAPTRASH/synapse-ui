import * as Accordion from "@radix-ui/react-accordion";
import type { ReactNode } from "react";
import { cn } from "../../utils/cn";

type CollapseItem = {
  key: string;
  label: ReactNode;
  children: ReactNode;
  disabled?: boolean;
  /** Trailing header content (badge, count, action). Does not toggle the panel. */
  extra?: ReactNode;
};

type CollapseSingleProps = {
  items: CollapseItem[];
  type?: "single";
  collapsible?: boolean;
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  className?: string;
};

type CollapseMultipleProps = {
  items: CollapseItem[];
  type: "multiple";
  defaultValue?: string[];
  value?: string[];
  onValueChange?: (value: string[]) => void;
  className?: string;
};

export type CollapseProps = CollapseSingleProps | CollapseMultipleProps;

function renderItems(items: CollapseItem[]) {
  return items.map((item) => (
    <Accordion.Item
      key={item.key}
      value={item.key}
      className="border-b border-rule last:border-b-0"
      disabled={item.disabled}
    >
      {/* extra lives beside the Trigger, never inside it: Accordion.Trigger is a
          real <button>, so an interactive extra would be a nested control. */}
      <Accordion.Header
        className={cn(
          "m-0 flex w-full items-center hover:bg-canvas",
          "data-[disabled]:opacity-45 data-[disabled]:hover:bg-transparent",
          item.extra != null && "pr-su4",
        )}
      >
        <Accordion.Trigger
          className={cn(
            "flex flex-1 min-w-0 items-center justify-between gap-su3 py-su3 pl-su4 bg-transparent text-label font-sans text-body font-normal text-left cursor-pointer",
            item.extra != null ? "pr-su3" : "pr-su4",
            "disabled:cursor-not-allowed",
            // z-10 so the ring paints over the neighbouring row's hairline
            "su-focus-ring focus-visible:(relative z-10)",
            "after:content-['›'] after:shrink-0 after:w-[1em] after:text-center after:text-label-tertiary after:text-[18px] after:leading-none",
            "after:transition-transform after:duration-[var(--su-duration-fast)] after:ease-[var(--su-ease-out)]",
            "data-[state=open]:after:rotate-90",
          )}
        >
          <span className="flex-1 min-w-0">{item.label}</span>
        </Accordion.Trigger>
        {item.extra != null ? (
          <span className="shrink-0 text-footnote text-label-secondary">{item.extra}</span>
        ) : null}
      </Accordion.Header>
      <Accordion.Content
        className={cn(
          "overflow-hidden data-[state=open]:animate-su-slide-down data-[state=closed]:animate-su-slide-up",
          "motion-reduce:data-[state]:animate-none",
        )}
      >
        <div className="px-su4 pb-su4 text-label-secondary text-subhead leading-[var(--su-leading-relaxed)]">
          {item.children}
        </div>
      </Accordion.Content>
    </Accordion.Item>
  ));
}

export function Collapse(props: CollapseProps) {
  const { items, className } = props;
  const rootClass = cn(
    // no overflow-hidden here: it would clip the trigger's focus ring; the
    // height animation is already clipped by Accordion.Content itself.
    "bg-paper border-t border-rule-strong",
    className,
  );

  if (props.type === "multiple") {
    const { defaultValue, value, onValueChange } = props;
    return (
      <Accordion.Root
        type="multiple"
        className={rootClass}
        defaultValue={defaultValue}
        value={value}
        onValueChange={onValueChange}
      >
        {renderItems(items)}
      </Accordion.Root>
    );
  }

  const { collapsible = true, defaultValue, value, onValueChange } = props;
  return (
    <Accordion.Root
      type="single"
      collapsible={collapsible}
      className={rootClass}
      defaultValue={defaultValue}
      value={value}
      onValueChange={onValueChange}
    >
      {renderItems(items)}
    </Accordion.Root>
  );
}
