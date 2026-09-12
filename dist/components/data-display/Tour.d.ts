import { type ReactNode } from "react";
export interface TourStep {
    target: string;
    title?: ReactNode;
    description?: ReactNode;
}
export interface TourProps {
    open?: boolean;
    steps: TourStep[];
    current?: number;
    defaultCurrent?: number;
    onChange?: (index: number) => void;
    onClose?: () => void;
}
export declare function Tour({ open, steps, current, defaultCurrent, onChange, onClose, }: TourProps): import("react").JSX.Element;
//# sourceMappingURL=Tour.d.ts.map