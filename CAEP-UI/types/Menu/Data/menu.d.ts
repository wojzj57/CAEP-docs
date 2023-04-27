import { page } from "./page";
export declare class menu {
    mainPage: page;
    current: page;
    constructor();
    render(name?: string): void;
    refresh(): void;
    private findPage;
    private fetchPage;
    setMainPage(): void;
}
