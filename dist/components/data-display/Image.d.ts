import { type ImgHTMLAttributes, type ReactNode } from "react";
export interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    fallback?: ReactNode;
    width?: number | string;
    height?: number | string;
    preview?: boolean;
}
export declare function Image({ src, alt, fallback, width, height, preview, className, onError, ...rest }: ImageProps): import("react").JSX.Element;
//# sourceMappingURL=Image.d.ts.map