import type { SelectOption } from "./types";
export interface TransferProps {
    dataSource?: SelectOption[];
    targetKeys?: string[];
    defaultTargetKeys?: string[];
    disabled?: boolean;
    titles?: [string, string];
    className?: string;
    onChange?: (targetKeys: string[]) => void;
}
export declare function Transfer({ dataSource, targetKeys: targetKeysProp, defaultTargetKeys, disabled, titles, className, onChange, }: TransferProps): import("react").JSX.Element;
//# sourceMappingURL=Transfer.d.ts.map