import * as Label from "@radix-ui/react-label";
import { type FormHTMLAttributes, type ReactNode } from "react";
import type { InputSize } from "./types";
export type FormLayout = "vertical" | "horizontal";
interface FormContextValue {
    layout: FormLayout;
    disabled?: boolean;
    size?: InputSize;
}
interface FormItemContextValue {
    id: string;
    required?: boolean;
    error?: ReactNode;
    descriptionId?: string;
    /**
     * Id of the rendered `<FormLabel>`, when the item has one. Controls that are
     * not labelable elements (a `div role="button"` dropzone, a composite widget)
     * point `aria-labelledby` at this instead of synthesizing their own name.
     */
    labelId?: string;
}
export declare function useFormContext(): FormContextValue;
export declare function useFormItemContext(): FormItemContextValue | null;
/**
 * Resolve a field's effective size/disabled from its own props falling back to
 * the enclosing `<Form>`. Every data-entry control does this the same way.
 */
export declare function useFieldState(size?: InputSize, disabled?: boolean): {
    size: InputSize;
    disabled: boolean | undefined;
};
/** Shared form label — mono uppercase brand mark */
export declare const formLabelClass = "block mb-su1 su-label text-ink-2";
/** Text label sitting next to a checkbox / radio / switch. */
export declare const controlLabelClass = "text-body text-label select-none";
export interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
    layout?: FormLayout;
    disabled?: boolean;
    size?: InputSize;
    /** Width of the label column in `layout="horizontal"`. Default `120`. */
    labelWidth?: number | string;
}
export declare function Form({ layout, disabled, size, labelWidth, className, style, children, ...rest }: FormProps): import("react").JSX.Element;
export type FormLabelProps = Label.LabelProps;
export declare function FormLabel({ className, children, ...rest }: FormLabelProps): import("react").JSX.Element;
export interface FormItemProps {
    label?: ReactNode;
    required?: boolean;
    help?: ReactNode;
    error?: ReactNode;
    className?: string;
    children?: ReactNode;
}
export declare function FormItem({ label, required, help, error, className, children, }: FormItemProps): import("react").JSX.Element;
export {};
//# sourceMappingURL=Form.d.ts.map