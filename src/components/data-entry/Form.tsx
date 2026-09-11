import * as Label from "@radix-ui/react-label";
import {
  createContext,
  useContext,
  useId,
  type CSSProperties,
  type FormHTMLAttributes,
  type ReactNode,
} from "react";
import { cn } from "../../utils/cn";
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

const FormContext = createContext<FormContextValue>({ layout: "vertical" });
const FormItemContext = createContext<FormItemContextValue | null>(null);

export function useFormContext(): FormContextValue {
  return useContext(FormContext);
}

export function useFormItemContext(): FormItemContextValue | null {
  return useContext(FormItemContext);
}

/**
 * Resolve a field's effective size/disabled from its own props falling back to
 * the enclosing `<Form>`. Every data-entry control does this the same way.
 */
export function useFieldState(size?: InputSize, disabled?: boolean) {
  const form = useFormContext();
  return {
    size: size ?? form.size ?? "lg",
    disabled: disabled ?? form.disabled,
  } satisfies { size: InputSize; disabled?: boolean };
}

/** Shared form label — mono uppercase brand mark */
export const formLabelClass = "block mb-su1 su-label text-ink-2";

/** Text label sitting next to a checkbox / radio / switch. */
export const controlLabelClass = "text-body text-label select-none";

const labelColumnHeightClass: Record<InputSize, string> = {
  sm: "min-h-[var(--su-control-sm)]",
  md: "min-h-[var(--su-control-md)]",
  lg: "min-h-[var(--su-control-lg)]",
};

export interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  layout?: FormLayout;
  disabled?: boolean;
  size?: InputSize;
  /** Width of the label column in `layout="horizontal"`. Default `120`. */
  labelWidth?: number | string;
}

export function Form({
  layout = "vertical",
  disabled,
  size = "lg",
  labelWidth,
  className,
  style,
  children,
  ...rest
}: FormProps) {
  return (
    <FormContext.Provider value={{ layout, disabled, size }}>
      <form
        className={cn(
          "flex flex-col",
          layout === "horizontal" ? "gap-su3" : "gap-su4",
          className,
        )}
        style={
          labelWidth != null
            ? ({
                ...style,
                "--su-form-label-width":
                  typeof labelWidth === "number" ? `${labelWidth}px` : labelWidth,
              } as CSSProperties)
            : style
        }
        {...rest}
      >
        {children}
      </form>
    </FormContext.Provider>
  );
}

export type FormLabelProps = Label.LabelProps;

export function FormLabel({ className, children, ...rest }: FormLabelProps) {
  const item = useFormItemContext();
  return (
    <Label.Root
      htmlFor={item?.id}
      id={item?.labelId}
      className={cn(formLabelClass, className)}
      {...rest}
    >
      {children}
      {item?.required && (
        <span className="text-danger-text ml-[2px]" aria-hidden="true">
          *
        </span>
      )}
    </Label.Root>
  );
}

export interface FormItemProps {
  label?: ReactNode;
  required?: boolean;
  help?: ReactNode;
  error?: ReactNode;
  className?: string;
  children?: ReactNode;
}

export function FormItem({
  label,
  required,
  help,
  error,
  className,
  children,
}: FormItemProps) {
  const { layout, size = "lg" } = useFormContext();
  const id = useId();
  const horizontal = layout === "horizontal";

  return (
    <FormItemContext.Provider
      value={{
        id,
        required,
        error,
        descriptionId: error || help ? `${id}-description` : undefined,
        labelId: label != null ? `${id}-label` : undefined,
      }}
    >
      <div
        className={cn(
          // the wrapper gap is the single source of the label/field gap inside an
          // item; the label's own bottom margin (for standalone use) is zeroed.
          "flex [&>label]:mb-0",
          horizontal
            ? "flex-row items-start gap-su4"
            : "flex-col gap-su2",
          className,
        )}
      >
        {horizontal ? (
          // always rendered, even unlabelled, so rows stay aligned in a mixed form
          <div
            className={cn(
              "flex items-center flex-[0_0_var(--su-form-label-width,120px)] [&>label]:mb-0",
              labelColumnHeightClass[size],
            )}
          >
            {label != null && <FormLabel>{label}</FormLabel>}
          </div>
        ) : (
          label != null && <FormLabel>{label}</FormLabel>
        )}
        <div className={horizontal ? "flex-1 min-w-0" : undefined}>
          {children}
          {error ? (
            <div
              id={`${id}-description`}
              className="text-caption-1 text-danger-text"
              role="alert"
            >
              {error}
            </div>
          ) : (
            help && (
              <div
                id={`${id}-description`}
                className="text-caption-1 text-label-tertiary"
              >
                {help}
              </div>
            )
          )}
        </div>
      </div>
    </FormItemContext.Provider>
  );
}
