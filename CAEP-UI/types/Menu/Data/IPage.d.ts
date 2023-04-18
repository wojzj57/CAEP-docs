import { IItemBase } from "./IItem";
export declare namespace IPage {
    interface IPageTree {
        parent?: IPage;
        children: {
            [name: string]: IPage;
        };
    }
}
export declare class IPage implements IPage.IPageTree {
    name: string;
    description: string;
    parent?: IPage;
    children: {
        [name: string]: IPage;
    };
    items: IItemBase[];
    exitems: IItemBase[];
    current: number;
    constructor();
    addItem(item: IItemBase): void;
    addSubPage(page: IPage): void;
}
