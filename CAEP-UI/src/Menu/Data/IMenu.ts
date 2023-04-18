import { CMenu } from "../menu";
import { IPage } from "./IPage";


class IMenu {
    public mainPage: IPage;
    public current: IPage;

    public renderer: CMenu;
    constructor() {

    }

    //#region Render
    public render(name: string = undefined): void {

    }

    public refresh(): void {

    }
    //#endregion

    private findPage(name: string): IPage {
        return this.fetchPage(this.mainPage, name);
    }
    private fetchPage(page: IPage, name: string): IPage {
        if (page.name == name) return page;
        Object.values(page.children).map((childPage: IPage) => {
            let temp = this.fetchPage(childPage, name);
            if (temp != undefined) temp;
        })
    }

    public setMainPage(): void {

    }

    public renderMainPage(): void {

    }
}