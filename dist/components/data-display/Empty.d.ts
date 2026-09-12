import type { HTMLAttributes, ReactNode } from "react";
export interface EmptyProps extends HTMLAttributes<HTMLDivElement> {
    image?: ReactNode;
    description?: ReactNode;
    children?: ReactNode;
}
export declare function Empty({ image, description, className, children, ...rest }: EmptyProps): import("react").JSX.Element;
//# sourceMappingURL=Empty.d.ts.map