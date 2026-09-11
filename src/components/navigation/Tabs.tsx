import * as TabsPrimitive from "@radix-ui/react-tabs";
import type { ReactNode } from "react";
import { useConfig } from "../../ConfigProvider";
import { cn } from "../../utils/cn";

export type TabsProps = TabsPrimitive.TabsProps;

export function Tabs({ className, dir, ...rest }: TabsProps) {
  const { direction } = useConfig();
  return (
    <TabsPrimitive.Root
      dir={dir ?? direction}
      className={cn(
        "font-sans data-[orientation=vertical]:(flex items-start gap-su4)",
        className,
      )}
      {...rest}
    />
  );
}

export interface TabsListProps extends TabsPrimitive.TabsListProps {
  /** Actions aligned to the end of the tab row. Rendered outside `role="tablist"`. */
  extra?: ReactNode;
}

// ponytail: the scroller's `py/-my` buys 5px so the trigger's 3px-offset focus ring
// survives the overflow clip; the first/last tab's ring can still clip on the
// horizontal axis. Upgrade path is an inset ring, which is off-spec for the guide.
const listScrollClass =
  "min-w-0 flex-1 overflow-x-auto py-[5px] -my-[5px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden";

export function TabsList({ className, extra, ...rest }: TabsListProps) {
  return (
    <div className="flex max-w-full items-stretch">
      <div className={listScrollClass}>
        <TabsPrimitive.List
          className={cn(
            "flex w-max min-w-full gap-su4 border-b border-b-solid border-b-rule",
            "data-[orientation=vertical]:(w-auto min-w-0 flex-col border-b-0 border-r border-r-solid border-r-rule)",
            className,
          )}
          {...rest}
        />
      </div>
      {extra ? (
        <div className="shrink-0 self-center ps-su4">{extra}</div>
      ) : null}
    </div>
  );
}

export type TabsTriggerProps = TabsPrimitive.TabsTriggerProps;

export function TabsTrigger({ className, ...rest }: TabsTriggerProps) {
  return (
    <TabsPrimitive.Trigger
      className={cn(
        "relative inline-flex shrink-0 items-center justify-center gap-su2 whitespace-nowrap min-h-[var(--su-hit-target)] min-w-[var(--su-hit-target)] px-su2 [appearance:none] rounded-none bg-transparent text-label-secondary font-sans text-subhead font-medium cursor-pointer su-focus-ring transition-colors duration-[var(--su-duration-fast)] ease-[var(--su-ease-out)]",
        "[@media(hover:hover)]:hover:text-label",
        "disabled:(text-label-tertiary cursor-not-allowed)",
        "data-[state=active]:text-label",
        // Indicator is always present so it can draw in instead of popping.
        "after:(content-[''] absolute inset-x-0 bottom-[-1px] h-[2px] bg-accent origin-left scale-x-0 transition-transform duration-[var(--su-duration-base)] ease-[var(--su-ease-out)])",
        "data-[state=active]:after:scale-x-100",
        "contrast-more:data-[state=active]:after:h-[3px]",
        "data-[orientation=vertical]:(w-full justify-start)",
        "data-[orientation=vertical]:after:(inset-y-0 inset-x-auto right-[-1px] w-[2px] h-auto)",
        className,
      )}
      {...rest}
    />
  );
}

export type TabsContentProps = TabsPrimitive.TabsContentProps;

export function TabsContent({ className, ...rest }: TabsContentProps) {
  return (
    <TabsPrimitive.Content
      className={cn(
        "mt-su4 su-focus-ring text-label text-body",
        "data-[state=active]:animate-su-fade-in motion-reduce:animate-none",
        "data-[orientation=vertical]:(mt-0 flex-1 min-w-0)",
        className,
      )}
      {...rest}
    />
  );
}
