import type { ReactNode } from "react";
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
export declare function Collapse(props: CollapseProps): import("react").JSX.Element;
export {};
//# sourceMappingURL=Collapse.d.ts.map