import type { TreeSelectNode } from "./types";
type TreeSelectBaseProps = {
    placeholder?: string;
    disabled?: boolean;
    treeData?: TreeSelectNode[];
    className?: string;
};
export type TreeSelectSingleProps = TreeSelectBaseProps & {
    multiple?: false;
    value?: string;
    defaultValue?: string;
    onChange?: (value: string) => void;
};
export type TreeSelectMultipleProps = TreeSelectBaseProps & {
    multiple: true;
    value?: string[];
    defaultValue?: string[];
    onChange?: (value: string[]) => void;
};
export type TreeSelectProps = TreeSelectSingleProps | TreeSelectMultipleProps;
export declare function TreeSelect(props: TreeSelectProps): import("react").JSX.Element;
export {};
//# sourceMappingURL=TreeSelect.d.ts.map