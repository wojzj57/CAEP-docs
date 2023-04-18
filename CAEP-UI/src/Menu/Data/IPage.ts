import { FIndexInterval } from "../../Ulits/Ulits";
import { IItemBase } from "./IItem";

export namespace IPage {
    export interface IPageTree {
        parent?: IPage;
        children: { [name: string]: IPage };
    }
}

export class IPage implements IPage.IPageTree {
    public name: string;
    public description: string;

    public parent?: IPage;
    public children: { [name: string]: IPage } = {};

    public items: IItemBase[] = [];

    public exitems: IItemBase[] = [];
    public current: number = 0;
    constructor() {

    }

    public addItem(item: IItemBase) {
        this.items.push(item);
    }

    public addSubPage(page: IPage) {
        this.children[page.name] = page;
    }
}