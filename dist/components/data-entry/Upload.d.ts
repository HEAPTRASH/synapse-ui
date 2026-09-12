import { type ReactNode } from "react";
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
export declare function Upload({ accept, multiple, disabled, maxCount, className, children, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy, fileList, onChange, beforeUpload, onRemove, }: UploadProps): import("react").JSX.Element;
//# sourceMappingURL=Upload.d.ts.map