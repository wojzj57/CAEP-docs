import { ExMenuComponents } from "./Components";

export type ExMenuDivider = {
    type: "divider";
};
export type ExMenuItem = {
    type?: "item";
    title: string;
    icon?: string;
    component: ExMenuComponents;
};
export type ExMenuItems = ExMenuItem | ExMenuDivider;