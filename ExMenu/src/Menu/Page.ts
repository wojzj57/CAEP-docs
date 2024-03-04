import { ExMenuComponents } from "./Components";
import { ExMenuDivider, ExMenuItems, ExMenuPage } from "./GUI/Items";


type ExPageOptions = {
    viewCount: number;
    width: string;
}

type ExMenuOptions = ExPageOptions & {
    hideCallback?: () => void;
    showCallback?: () => void;
}

class ExBasePage {
    public type = "base";

    public index = 0;
    private _items: Array<ExMenuItems> = new Array<ExMenuItems>()
    constructor(
        public title: string,
        items: Array<ExMenuItems> = new Array<ExMenuItems>(),
        public options: ExPageOptions = {
            viewCount: 7,
            width: "320px"
        }
    ) {
        this._items = items;
    }

    public get items() {
        return this._items;
    }
    public set items(items: Array<ExMenuItems>) {
        for (let i = 0; i < items.length; i++) {
            if (items[i].type == "page") {
                (items[i] as ExMenuPage).page.parent = this;
            }
        }
        this._items = items;
    }

    public get indexUp() {
        return this._indexUp();
    }
    public get indexDown() {
        return this._indexDown();
    }

    private _indexUp() {
        this.index = this.index - 1;
        if (this.index < 0) this.index = this.items.length - 1;
        if ((this.items[this.index] as ExMenuDivider).type == "divider")
            this._indexUp();
        return this.index;
    }
    private _indexDown() {
        this.index = this.index + 1;
        if (this.items.length <= this.index) this.index = 0;
        if ((this.items[this.index] as ExMenuDivider).type == "divider")
            this._indexDown();
        return this.index;
    }


    public addItem(title: string, component: ExMenuComponents) {
        this._items.push({ type: "item", title: title, component: component });
    }
    public addDivider() {
        this._items.push({ type: "divider" });
    }
    public addSubPage(title: string, page: ExPage) {
        page.parent = this;
        this._items.push({ type: "page", title: title, page: page });
    }
}

export class ExMenu extends ExBasePage {
    public type = "menu";
    constructor(
        public title: string,
        public hotkey: string,
        items: Array<ExMenuItems> = new Array<ExMenuItems>(),
        public options: ExMenuOptions = {
            viewCount: 7,
            width: "320px",
            hideCallback: () => { },
            showCallback: () => { }
        }
    ) {
        super(title, items, options);
    }
}

export class ExPage extends ExBasePage {
    public type = "page";
    public parent?: ExPage;

    constructor(
        public title: string,
        items: Array<ExMenuItems> = new Array<ExMenuItems>(),
        public options: ExPageOptions = {
            viewCount: 7,
            width: "320px"
        }
    ) {
        super(title, items, options);
    }
}

export type ExPages = ExMenu | ExPage;