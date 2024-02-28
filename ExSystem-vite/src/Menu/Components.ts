import { ExMenuPage } from "./Page";

export type ExButton = {
    type: "button";
    enterHandler: () => void;
    desc?: string;
};

export type ExPage = {
    type: "page";
    enterHandler: () => void;
    page: ExMenuPage;
};

export type ExMenuComponents = ExButton | ExPage;
