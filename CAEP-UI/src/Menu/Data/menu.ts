import { CMenu } from "../MenuGUI";
import { page } from "./page";


export class menu {
    public mainPage: page;
    public current: page;
    constructor() {

    }

    //#region Render
    public render(name: string = undefined): void {

    }

    public refresh(): void {

    }
    //#endregion

    private findPage(name: string): page {
        return this.fetchPage(this.mainPage, name);
    }
    private fetchPage(page: page, name: string): page {
        if (page.name == name) return page;
        Object.values(page.children).map((childPage: page) => {
            let temp = this.fetchPage(childPage, name);
            if (temp != undefined) temp;
        })
    }

    public setMainPage(): void {

    }
}