import { type HTMLAttributes, type ReactNode, type Ref } from "react";
export interface SplitterProps extends HTMLAttributes<HTMLDivElement> {
    direction?: "horizontal" | "vertical";
    defaultSize?: number;
    /** Controlled size (percent of the first pane). Falls back to internal state when omitted. */
    size?: number;
    /** Fired with the clamped size on every drag/keyboard change. */
    onSizeChange?: (size: number) => void;
    min?: number;
    max?: number;
    first?: ReactNode;
    second?: ReactNode;
    /** Accessible name of the separator. */
    separatorLabel?: string;
    /** Panes are `first`/`second`; children never render. */
    children?: never;
    /** React 19 forwards `ref` as an ordinary prop; merged with the internal one. */
    ref?: Ref<HTMLDivElement>;
}
export declare function Splitter({ direction, defaultSize, size: sizeProp, onSizeChange, min, max, first, second, separatorLabel, className, ref, ...rest }: SplitterProps): import("react").JSX.Element;
//# sourceMappingURL=Splitter.d.ts.map