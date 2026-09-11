import {
  useCallback,
  useRef,
  useState,
  type ChangeEvent,
  type DragEvent,
  type ReactNode,
} from "react";
import { IconUpload } from "@tabler/icons-react";
import { cn } from "../../utils/cn";
import { Icon, iconDefaults } from "../general/Icon";
import { useFieldState, useFormItemContext } from "./Form";

export interface UploadFile {
  uid: string;
  name: string;
  size: number;
  file: File;
}

export interface UploadProps {
  accept?: string;
  multiple?: boolean;
  disabled?: boolean;
  maxCount?: number;
  className?: string;
  children?: ReactNode;
  /** Accessible name for the dropzone / file input. Defaults to the visible prompt. */
  "aria-label"?: string;
  "aria-labelledby"?: string;
  /** Controlled list. When set, internal state is ignored — drive it from `onChange`/`onRemove`. */
  fileList?: UploadFile[];
  onChange?: (files: UploadFile[]) => void;
  beforeUpload?: (file: File) => boolean | Promise<boolean>;
  /** Called before a file leaves the list. Return `false` to cancel the removal. */
  onRemove?: (file: UploadFile) => boolean | void;
}

let uidCounter = 0;

function createUploadFile(file: File): UploadFile {
  uidCounter += 1;
  return {
    uid: `upload-${uidCounter}`,
    name: file.name,
    size: file.size,
    file,
  };
}

/** Same semantics as the native `accept` attribute: `.ext`, `type/*` or an exact MIME type. */
function matchesAccept(file: File, accept: string) {
  return accept
    .split(",")
    .map((t) => t.trim().toLowerCase())
    .filter(Boolean)
    .some((token) =>
      token.startsWith(".")
        ? file.name.toLowerCase().endsWith(token)
        : token.endsWith("/*")
          ? file.type.toLowerCase().startsWith(token.slice(0, -1))
          : file.type.toLowerCase() === token,
    );
}

const UNITS = ["B", "KB", "MB", "GB", "TB"];

function formatBytes(bytes: number) {
  const i = bytes > 0 ? Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), 4) : 0;
  return `${Number((bytes / 1024 ** i).toFixed(i === 0 ? 0 : 1))} ${UNITS[i]}`;
}

export function Upload({
  accept,
  multiple = false,
  disabled,
  maxCount,
  className,
  children,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledBy,
  fileList,
  onChange,
  beforeUpload,
  onRemove,
}: UploadProps) {
  const item = useFormItemContext();
  const { disabled: isDisabled } = useFieldState(undefined, disabled);

  const inputRef = useRef<HTMLInputElement>(null);
  const [internalFiles, setFiles] = useState<UploadFile[]>([]);
  const files = fileList ?? internalFiles;
  const [dragActive, setDragActive] = useState(false);

  const emit = useCallback(
    (next: UploadFile[]) => {
      setFiles(next);
      onChange?.(next);
    },
    [onChange],
  );

  const processFiles = async (picked: FileList | File[]) => {
    const incoming = Array.from(picked).filter(
      (file) => !accept || matchesAccept(file, accept),
    );
    const accepted: UploadFile[] = [];

    for (const file of incoming) {
      if (beforeUpload) {
        const result = await beforeUpload(file);
        if (!result) continue;
      }
      accepted.push(createUploadFile(file));
    }

    if (accepted.length === 0) return;

    const next = multiple
      ? [...files, ...accepted].slice(0, maxCount ?? Infinity)
      : accepted.slice(0, 1);
    emit(next);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      void processFiles(event.target.files);
      event.target.value = "";
    }
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragActive(false);
    if (isDisabled) return;
    if (event.dataTransfer.files.length > 0) {
      void processFiles(event.dataTransfer.files);
    }
  };

  const removeFile = (file: UploadFile) => {
    if (onRemove?.(file) === false) return;
    emit(files.filter((f) => f.uid !== file.uid));
  };

  const defaultLabel = "Click or drag files to upload";
  // The dropzone is a div, so a FormItem's <label for> can never name it. Point at
  // the item's label element when there is one; otherwise synthesize a name.
  const labelledBy = ariaLabelledBy ?? (ariaLabel ? undefined : item?.labelId);
  const accessibleName = labelledBy
    ? undefined
    : (ariaLabel ?? (typeof children === "string" ? children : defaultLabel));

  return (
    <div className={cn("w-full", className)}>
      <div
        role="button"
        tabIndex={isDisabled ? -1 : 0}
        aria-label={accessibleName}
        aria-labelledby={labelledBy}
        className={cn(
          "su-focus-ring flex flex-col items-center justify-center gap-su2 min-h-[120px] p-su4 border-[1.5px] border-dashed border-rule-strong rounded-none bg-canvas text-label-secondary text-footnote text-center cursor-pointer transition-[border-color,background] duration-[var(--su-duration-fast)] ease-[var(--su-ease-out)] focus-visible:border-accent",
          !isDisabled && "hover:(border-accent bg-accent-soft)",
          dragActive && "border-accent bg-accent-soft",
          isDisabled && "opacity-45 cursor-not-allowed",
        )}
        onClick={() => !isDisabled && inputRef.current?.click()}
        onKeyDown={(e) => {
          if ((e.key === "Enter" || e.key === " ") && !isDisabled) {
            e.preventDefault();
            inputRef.current?.click();
          }
        }}
        onDragOver={(e) => {
          e.preventDefault();
          if (!isDisabled) setDragActive(true);
        }}
        onDragLeave={() => setDragActive(false)}
        onDrop={handleDrop}
        aria-describedby={item?.descriptionId}
        aria-invalid={item?.error ? true : undefined}
      >
        <input
          ref={inputRef}
          id={item?.id}
          type="file"
          accept={accept}
          multiple={multiple}
          disabled={isDisabled}
          className="hidden"
          onChange={handleInputChange}
          aria-hidden="true"
          tabIndex={-1}
        />
        {children ?? (
          <>
            <Icon size="lg" className="text-accent">
              <IconUpload {...iconDefaults} />
            </Icon>
            <span>{defaultLabel}</span>
          </>
        )}
      </div>
      {files.length > 0 && (
        <ul className="flex flex-col gap-su2 mt-su3 list-none m-0 p-0">
          {files.map((file) => (
            <li
              key={file.uid}
              className="su-hairline flex items-center justify-between gap-su3 pl-su3 rounded-none bg-paper text-footnote text-label"
            >
              <span className="flex min-w-0 items-baseline gap-su2">
                <span className="truncate">{file.name}</span>
                <span className="shrink-0 font-mono text-label-tertiary text-caption-2">
                  {formatBytes(file.size)}
                </span>
              </span>
              <button
                type="button"
                className="su-focus-ring shrink-0 min-w-[var(--su-hit-target)] min-h-[var(--su-hit-target)] px-su2 rounded-none bg-transparent text-danger-text text-footnote cursor-pointer transition-[background] duration-[var(--su-duration-fast)] ease-[var(--su-ease-out)] hover:not-disabled:bg-fill disabled:(opacity-45 cursor-not-allowed)"
                disabled={isDisabled}
                onClick={() => removeFile(file)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
