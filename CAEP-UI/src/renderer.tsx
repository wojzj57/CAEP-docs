import React, { ReactNode } from "react";
import { render } from "react-dom";

import { CView } from "./Ulits/View";

import { CMenu, CPage } from "./Menu/menu";

import "../css/ex.css";
import "../css/caep.css";
import { IPage } from "./Menu/Data/IPage";
import { IItem, ISpace } from "./Menu/Data/IItem";
import { ICChevron } from "./Menu/Data/IComponent";

export class CRenderer {
    public context: ReactNode;
    constructor(props?: any) {
        this.context
    }

    render(context: ReactNode): void {
        if (context != undefined) {
            this.context = context;

            render(
                <CView>
                    {this.context}
                </CView>
                , document.getElementById("main-content"));
        }
    }

    refresh() {
        render(
            <CView> </CView>
            , document.getElementById("main-content"));
        render(
            <CView>
                {this.context}
            </CView>
            , document.getElementById("main-content"));
    }

    renderTest() {
        render(
            <CView>
                <CMenu title="Test" mainPage={undefined}></CMenu>
            </CView>
            , document.getElementById("main-content"));
    }
}

let page1 = new IPage();
page1.addItem(new IItem({ name: 're', header: 'RE', componect: new ICChevron({ id: undefined, content: undefined }) }))
page1.addItem(new IItem({ name: 're', header: 'RE', componect: new ICChevron({ id: undefined, content: undefined }) }))
page1.addItem(new IItem({ name: 're', header: 'RE', componect: new ICChevron({ id: undefined, content: undefined }) }))
page1.addItem(new ISpace());
page1.addItem(new IItem({ name: 're', header: 'RE', componect: new ICChevron({ id: undefined, content: undefined }) }))
console.log(page1)