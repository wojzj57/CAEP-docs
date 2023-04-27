import React from "react";
import { page } from "./Data/page";
export declare class CMenu extends React.Component<any, any> {
    currentPage: page;
    props: {
        title: string;
        mainPage: page;
    };
    constructor(props: any);
    initEvents(): void;
    bindArrawCode(): void;
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
