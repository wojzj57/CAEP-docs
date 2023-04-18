import React from "react";
import { IPage } from "./Data/IPage";
export declare namespace CMenu {
    interface CPageTree {
        current: CPage;
        children: {
            [name: string]: CPageTree;
        };
        parent?: CPageTree;
    }
}
export declare class CMenu extends React.Component<any, any> {
    private pageTree;
    props: {
        title: string;
        mainPage: IPage;
    };
    constructor(props: any);
    render(): React.ReactNode;
}
export declare class CPage extends React.Component<any, any> {
    items: React.ReactElement[];
    name: string;
    description: string;
    menu: CMenu;
    parent?: CPage;
    children: {
        [name: string]: CPage;
    };
    itemRefs: React.Ref<unknown>[];
    currentItem: React.Ref<unknown>;
    props: any;
    constructor(props: any);
    nextItem(): void;
    prevItem(): void;
    render(): React.ReactNode;
}
export declare class CMenuHeader extends React.Component<any, any> {
    props: {
        title: string;
    };
    constructor(props: any);
    render(): React.ReactNode;
}
