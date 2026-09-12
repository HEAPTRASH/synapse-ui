import { type HTMLAttributes, type ReactNode } from "react";
export interface TreeNode {
    key: string;
    title: ReactNode;
    children?: TreeNode[];
    disabled?: boolean;
}
export interface TreeProps extends Omit<HTMLAttributes<HTMLDivElement>, "onSelect"> {
    treeData: TreeNode[];
    defaultExpandedKeys?: string[];
    /** Controlled selection. Falls back to `defaultSelectedKeys` when omitted. */
    selectedKeys?: string[];
    defaultSelectedKeys?: string[];
    onSelect?: (key: string) => void;
}
export declare function Tree({ treeData, defaultExpandedKeys, selectedKeys, defaultSelectedKeys, className, onSelect, ...rest }: TreeProps): import("react").JSX.Element;
//# sourceMappingURL=Tree.d.ts.map