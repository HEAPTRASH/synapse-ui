import type { InputSize, SelectOption } from "./types";
export interface MentionsProps {
    value?: string;
    defaultValue?: string;
    placeholder?: string;
    prefix?: string;
    disabled?: boolean;
    size?: InputSize;
    options?: SelectOption[];
    className?: string;
    onChange?: (value: string) => void;
    onSelect?: (option: SelectOption) => void;
}
export declare function Mentions({ value: valueProp, defaultValue, placeholder, prefix, disabled, size: sizeProp, options, className, onChange, onSelect, }: MentionsProps): import("react").JSX.Element;
//# sourceMappingURL=Mentions.d.ts.map