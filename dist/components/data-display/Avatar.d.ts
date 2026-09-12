import * as RadixAvatar from "@radix-ui/react-avatar";
import { type ComponentPropsWithoutRef, type ReactNode } from "react";
export type AvatarSize = "sm" | "md" | "lg";
export interface AvatarProps extends ComponentPropsWithoutRef<typeof RadixAvatar.Root> {
    src?: string;
    /**
     * Accessible name for the photo (e.g. the person's name) — required whenever
     * `src` is set; leave unset only for a decorative avatar.
     */
    alt?: string;
    fallback?: ReactNode;
    size?: AvatarSize;
}
export declare const Avatar: import("react").ForwardRefExoticComponent<AvatarProps & import("react").RefAttributes<HTMLSpanElement>>;
//# sourceMappingURL=Avatar.d.ts.map