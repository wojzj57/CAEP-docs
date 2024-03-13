import { MenuMap } from "./MenuList/Config";
import { MenuPageRef } from "./GUI/Menu";
import { ExMenu } from "./Page";

export type MenuPageRef = {
    render: (page: ExMenu) => void;
    hide: () => void;
}

export class MenuManager {
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