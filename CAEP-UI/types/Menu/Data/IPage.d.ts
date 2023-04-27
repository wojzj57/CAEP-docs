import { IItemBase } from "./IItem";
export declare namespace page {
    interface pageTree {
        parent?: page;
        children: {
            [name: string]: page;
        };
    }
}
export declare class page implements page.pageTree {
    name: string;
    description: string;
    parent?: page;
    children: {
        [name: string]: page;
    };
    items: IItemBase[];
    exitems: IItemBase[];
    current: number;
    constructor();
    addItem(item: IItemBase): void;
    addSubPage(page: page): void;
}
