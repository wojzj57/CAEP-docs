import { ExMenuComponents } from "./Components";
import { ExMenuDivider, ExMenuItems, ExMenuPage } from "./GUI/Items";
import { menuManager } from "./MenuManager";

type ExPageOptions = {
  viewCount: number;
  width: string;
};

type ExMenuOptions = ExPageOptions & {
  hideCallback?: () => void;
  showCallback?: () => void;
};

export class ExBasePage {
  public type = "base";

  public bobber = 0;
  public index = 0;
  private _items: Array<ExMenuItems> = new Array<ExMenuItems>();
  constructor(
    public title: string,
    items: Array<ExMenuItems> = new Array<ExMenuItems>()
  ) {
    this._items = items;
    if (this._items[this.index] && this._items[this.index].type == "divider")
      this._indexDown();
  }

  public get items() {
    return this._items;
  }
  public set items(items: Array<ExMenuItems>) {
    const setItemPageParent = (items: Array<ExMenuItems>, parent: ExPage) => {
      for (let i = 0; i < items.length; i++) {
        if (items[i].type == "page") {
          const page = (items[i] as ExMenuPage).page;
          page.parent = parent;
          setItemPageParent(page.items, page);
        }
      }
    };

    setItemPageParent(items, this);
    this._items = items;
    if (this._items[this.index].type == "divider") this._indexDown();
  }

  public get length() {
    return this.items.length;
  }

  public get indexUp() {
    return this._indexUp();
  }
  public get indexDown() {
    return this._indexDown();
  }

  private colculateBobber() {
    const index = this.index;
    const viewCount = menuManager.viewCount;

    if (this.bobber < index - viewCount) this.bobber = index - viewCount;
    if (index < this.bobber) this.bobber = index;
    this.bobber = Math.min(this.items.length - viewCount - 1, this.bobber);
  }

  private _indexUp() {
    this.index = this.index - 1;
    if (this.index < 0) this.index = this.items.length - 1;
    if ((this.items[this.index] as ExMenuDivider).type == "divider")
      this._indexUp();

    this.colculateBobber();
    return this.index;
  }
  private _indexDown() {
    this.index = this.index + 1;
    if (this.items.length <= this.index) this.index = 0;
    if ((this.items[this.index] as ExMenuDivider).type == "divider")
      this._indexDown();

    this.colculateBobber();
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
      hideCallback: () => {},
      showCallback: () => {},
    }
  ) {
    super(title, items);
  }
}

export class ExPage extends ExBasePage {
  public type = "page";
  public parent?: ExPage;

  constructor(
    public title: string,
    items: Array<ExMenuItems> = new Array<ExMenuItems>()
  ) {
    super(title, items);
  }
}
