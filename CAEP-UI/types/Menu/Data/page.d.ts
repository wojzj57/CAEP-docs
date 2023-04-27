import { itemType } from "./item";
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
    items: itemType[];
    currentItem: number;
    constructor(data: {
        name?: string;
        description?: string;
        items?: itemType[];
        children?: {
            [name: string]: page;
        };
    });
    nextItem(): {
        index: number;
        item: itemType;
    };
    prevItem(): {
        index: number;
        item: itemType;
    };
    addItem(item: itemType): void;
    addSubPage(page: page): void;
}
