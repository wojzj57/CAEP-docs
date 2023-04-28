import React, { ReactNode } from "react";
import { render } from "react-dom";

import { CRenderer } from "../../Common/renderer";
import { CView } from "../../Ulits/View";
import { CMenu } from "../MenuGUI";
import { page } from "./page";


export class menu {
    public renderer: CRenderer;

    public mainPage: page;
    public current: page;
    constructor() {
        this.renderer = new CRenderer();
    }

    //#region Render
    public render(name: string = undefined): void {
        render(
            <CView>
                <CMenu title="TestMenu" mainPage={this.mainPage}>

                </CMenu>
            </CView>
            , document.getElementById("main-content"));
    }

    public refresh(): void {

    }
    //#endregion

    private findPage(name: string): page {
        return this.fetchPage(this.mainPage, name);
    }
    private fetchPage(page: page, name: string): page {
        if (page.name == name) return page;
        Object.values(page.children).map((childPage: page) => {
            let temp = this.fetchPage(childPage, name);
            if (temp != undefined) temp;
        })
    }

    public setMainPage(): void {

    }
}