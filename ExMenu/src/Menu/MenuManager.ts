import { MenuPageRef } from "./GUI/Menu";
import { ExMenu } from "./Page";

export type MenuPageRef = {
  show: (page: ExMenu) => void;
  hide: () => void;
};

export class MenuManager {
  public menuMap: { [key: string]: ExMenu } = {};
  
  public viewCount = 7;
  public width = "320px";
  constructor() {}

  public addMenu(name: string, menu: ExMenu) {
    this.menuMap[name] = menu;
  }

  public show(name: string) {
    const page = this.menuMap[name];
    if (!page) return;
    this.viewCount = page.options.viewCount;
    this.width = page.options.width;
    MenuPageRef.current?.show(page);
  }
}

export const menuManager = new MenuManager();
