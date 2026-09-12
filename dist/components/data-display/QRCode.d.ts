import { type HTMLAttributes } from "react";
export interface QRCodeProps extends HTMLAttributes<HTMLDivElement> {
    value: string;
    size?: number;
    fg?: string;
    bg?: string;
}
export declare function QRCode({ value, size, fg, bg, className, style, ...rest }: QRCodeProps): import("react").JSX.Element;
//# sourceMappingURL=QRCode.d.ts.map