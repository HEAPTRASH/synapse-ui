import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../utils/cn";

export interface DescriptionItem {
  label: ReactNode;
  value?: ReactNode;
  span?: number;
}

export interface DescriptionsProps extends Omit<HTMLAttributes<HTMLDListElement>, "title"> {
  title?: ReactNode;
  /** Right-aligned action beside the title (same idiom as Card). */
  extra?: ReactNode;
  items: DescriptionItem[];
  column?: number;
  bordered?: boolean;
}

export function Descriptions({
  title,
  extra,
  items,
  column = 2,
  bordered = false,
  className,
  ...rest
}: DescriptionsProps) {
  return (
    <div
      className={cn(
        "rounded-none bg-paper border-t border-solid border-rule-strong",
        bordered && "border border-solid border-rule border-t-rule-strong",
        className,
      )}
    >
      {title != null || extra != null ? (
        <div className="flex items-center justify-between gap-su3 py-su3 px-su4 border-b border-solid border-rule">
          <div className="text-headline font-semibold min-w-0">
            {title}
          </div>
          {extra != null ? (
            <div className="text-footnote text-label-secondary shrink-0">{extra}</div>
          ) : null}
        </div>
      ) : null}
      <dl
        // `!` beats the inline style below, which has to stay because `column` is
        // an arbitrary number; under sm every item gets its own row.
        className="grid gap-0 m-0 p-0 max-sm:![grid-template-columns:minmax(0,1fr)]"
        style={{ gridTemplateColumns: `repeat(${column}, minmax(0, 1fr))` }}
        {...rest}
      >
        {items.map((item, i) => (
          <div
            key={i}
            className="grid grid-cols-[120px_minmax(0,1fr)] gap-su3 py-su3 px-su4 border-b border-solid border-rule last:border-b-0 max-sm:(grid-cols-1 gap-su1) max-sm:![grid-column:auto]"
            style={item.span ? { gridColumn: `span ${item.span}` } : undefined}
          >
            <dt className="m-0 text-footnote text-label-secondary">{item.label}</dt>
            <dd className="m-0 text-body text-label tabular-nums">
              {item.value ?? "—"}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
