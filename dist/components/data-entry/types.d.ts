export interface SelectOption {
    label: string;
    value: string;
    disabled?: boolean;
    /** Secondary line under the label — e.g. a mono SKU beside a Geist description. */
    description?: string;
}
export interface CascaderOption {
    label: string;
    value: string;
    disabled?: boolean;
    children?: CascaderOption[];
}
export interface TreeSelectNode {
    key: string;
    title: string;
    disabled?: boolean;
    children?: TreeSelectNode[];
}
export type InputSize = "sm" | "md" | "lg";
//# sourceMappingURL=types.d.ts.map