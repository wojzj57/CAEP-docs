import { CRenderer } from "../../Common/renderer";
import { page } from "./page";
export declare class menu {
    renderer: CRenderer;
    mainPage: page;
    current: page;
    constructor();
    render(name?: string): void;
    refresh(): void;
    private findPage;
    private fetchPage;
    setMainPage(): void;
}
