import { ExMenuComponents, ExCToggle } from "../Components";
import { ExPage } from "../Page";

export type ExMenuDivider = {
    type: "divider";
};
export type ExMenuPage = {
    type: "page";
    title: string;
    icon?: string;
    page: ExPage;
};
export type ExMenuItem = {
    type?: "item";
    title: string;
    icon?: string;
    component: ExMenuComponents;
};

export type ExMenuItems = ExMenuItem | ExMenuDivider | ExMenuPage;