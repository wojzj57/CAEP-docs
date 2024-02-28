import { ExMenuPage } from "./Page";

export type EmButton = {
    type: "button";
    enterHandler: () => void;
    desc?: string;
};

export type EmPage = {
    type: "page";
    enterHandler: () => void;
    page: ExMenuPage;
};

export type ExMenuComponents = EmButton | EmPage;
