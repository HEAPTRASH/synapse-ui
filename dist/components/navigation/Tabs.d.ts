import * as TabsPrimitive from "@radix-ui/react-tabs";
import type { ReactNode } from "react";
export type TabsProps = TabsPrimitive.TabsProps;
export declare function Tabs({ className, dir, ...rest }: TabsProps): import("react").JSX.Element;
export interface TabsListProps extends TabsPrimitive.TabsListProps {
    /** Actions aligned to the end of the tab row. Rendered outside `role="tablist"`. */
    extra?: ReactNode;
}
export declare function TabsList({ className, extra, ...rest }: TabsListProps): import("react").JSX.Element;
export type TabsTriggerProps = TabsPrimitive.TabsTriggerProps;
export declare function TabsTrigger({ className, ...rest }: TabsTriggerProps): import("react").JSX.Element;
export type TabsContentProps = TabsPrimitive.TabsContentProps;
export declare function TabsContent({ className, ...rest }: TabsContentProps): import("react").JSX.Element;
//# sourceMappingURL=Tabs.d.ts.map