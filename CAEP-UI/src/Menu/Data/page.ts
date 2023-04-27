import { CEItemType } from "../../Ulits/Item";
import { FIndexInterval } from "../../Ulits/Ulits";
import { item, itemType, space } from "./item";

export namespace page {
    export interface pageTree {
        parent?: page;
        children: { [name: string]: page };
    }
}

export class page implements page.pageTree {
    public name: string;
    public description: string;

    public parent?: page;
    public children: { [name: string]: page } = {};

    public items: itemType[] = [];

    public currentItem: number = 0;
    constructor(data: {
        name?: string,
        description?: string,
        items?: itemType[],
        children?: { [name: string]: page }
    }) {
        data = data || {};
        this.name = data.name;
        this.description = data.description;

        this.items = data.items || [];
        this.children = data.children || {};
        Object.values(this.children).map((page: page) => {
            page.parent = this;
        })
    }


    public nextItem(): { index: number, item: itemType } {
        var index = this.currentItem + 1;
        if (index >= this.items.length) {
            index = 0;
        }
        if (this.items[index].type = CEItemType.Filter) {
            return this.nextItem();
        }
        return { index: index, item: this.items[index] };
    }

    public prevItem(): { index: number, item: itemType } {
        var index = this.currentItem - 1;
        if (index < 0) {
            index = this.items.length - 1;
        }
        if (this.items[index].type = CEItemType.Filter) {
            return this.prevItem();
        }
        return { index: index, item: this.items[index] };
    }



    public addItem(item: itemType) {
        this.items.push(item);
    }

    public addSubPage(page: page) {
        page.parent = this;
        this.children[page.name] = page;
    }
}