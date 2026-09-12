import type { HTMLAttributes, Ref } from "react";
export interface LayoutProps extends HTMLAttributes<HTMLDivElement> {
    /** React 19 forwards `ref` as an ordinary prop through `{...rest}`. */
    ref?: Ref<HTMLDivElement>;
}
export declare function Layout({ className, ...rest }: LayoutProps): import("react").JSX.Element;
export declare namespace Layout {
    var Header: typeof import("./Layout").Header;
    var Sider: typeof import("./Layout").Sider;
    var Content: typeof import("./Layout").Content;
    var Footer: typeof import("./Layout").Footer;
}
export declare function Header({ className, ...rest }: LayoutProps): import("react").JSX.Element;
export declare function Sider({ className, ...rest }: LayoutProps): import("react").JSX.Element;
export declare function Content({ className, ...rest }: LayoutProps): import("react").JSX.Element;
export declare function Footer({ className, ...rest }: LayoutProps): import("react").JSX.Element;
//# sourceMappingURL=Layout.d.ts.map