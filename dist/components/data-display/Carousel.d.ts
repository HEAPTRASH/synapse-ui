import { type HTMLAttributes, type ReactNode } from "react";
export interface CarouselProps extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode;
}
export declare function Carousel({ className, children, ...rest }: CarouselProps): import("react").JSX.Element;
export declare namespace Carousel {
    var Item: typeof CarouselItem;
}
export interface CarouselItemProps extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode;
}
export declare function CarouselItem({ className, children, ...rest }: CarouselItemProps): import("react").JSX.Element;
//# sourceMappingURL=Carousel.d.ts.map