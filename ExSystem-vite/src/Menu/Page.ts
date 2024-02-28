import { ExMenuComponents } from "./Components";

type ExMenuDivider = {
    type: "divider";
};
type ExMenuItem = {
    type?: "item";
    title: string;
    icon?: string;
    component: ExMenuComponents;
};
type ExMenuItems = ExMenuItem | ExMenuDivider;

export class ExMenuPage {
    public index = 0;

    constructor(
        public title: string,
        public items: Array<ExMenuItems> = new Array<ExMenuItems>()
    ) {}

    public ender() {
        const component = (this.items[this.index] as ExMenuItem).component;
        if (component) {
            component.enterHandler();
        }
    }

    public indexUp() {
        this.index = this.index + 1;
        if (this.items.length <= this.index) this.index = 0;
        if ((this.items[this.index] as ExMenuDivider).type == "divider")
            this.indexUp();
        return this.index;
    }
    public indexDown() {
        this.index = this.index - 1;
        if (this.index < 0) this.index = this.items.length - 1;
        if ((this.items[this.index] as ExMenuDivider).type == "divider")
            this.indexDown();
        return this.index;
    }
}

//
//
//

class MenuPageManager {
    public declare currentPage: ExMenuPage;
    public pageStack = new PageStack();

    constructor() {}
}

class PageStack {
    public pages: ExMenuPage[] = [];

    // 添加元素到栈顶
    push(page: ExMenuPage) {
        this.pages.push(page);
    }

    // 移除并返回栈顶的元素
    pop() {
        if (this.pages.length > 0) return this.pages.pop();
    }

    // 返回栈顶的元素，但不移除它
    peek() {
        return this.pages[this.pages.length - 1];
    }

    // 检查栈是否为空
    isEmpty() {
        return this.pages.length == 0;
    }
}
