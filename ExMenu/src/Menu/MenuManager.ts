import { MenuMap } from "./Const";
import { MenuPageRef } from "./GUI/Menu";
import { ExMenu } from "./Page";

export type MenuPageRef = {
    render: (page: ExMenu) => void;
    hide: () => void;
}

class MenuManager {
    public menuMap: { [key: string]: ExMenu } = {};

    constructor() {
        Object.keys(MenuMap).forEach((key: string) => {
            this.menuMap[key] = MenuMap[key].menu;
        })
    }

    render(name: string) {
        const page = this.menuMap[name];
        if (!page) return;
        MenuPageRef.current?.render(page);
    }
}
export const menuManager = new MenuManager();

window.addEventListener("keydown", (e) => {
    if (e.key == "F2") {
        menuManager.render("test");
    }
    if (e.key == "F4") {
        menuManager.render("test2");
    }
});