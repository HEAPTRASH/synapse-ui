import type { HTMLAttributes, ReactNode } from "react";
export interface WatermarkProps extends Omit<HTMLAttributes<HTMLDivElement>, "content"> {
    /** Mark text. An array stacks as one line per item. */
    content?: string | string[];
    /** Minimum tile size in px. The tile grows past this when the text needs it. */
    gap?: [number, number];
    rotate?: number;
    /** Where the first tile starts, in px. Defaults to half the gap, like Ant's. */
    offset?: [number, number];
    children?: ReactNode;
}
export declare function Watermark({ content, gap, rotate, offset, className, children, style, ...rest }: WatermarkProps): import("react").JSX.Element;
//# sourceMappingURL=Watermark.d.ts.map