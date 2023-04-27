import React, { ReactNode } from "react";
import { render } from "react-dom";

import { CView } from "../Ulits/View";

import { CMenu, CPage } from "../Menu/MenuGUI";

import "../../css/ex.css";
import "../../css/caep.css"


export class CRenderer {
    public context: ReactNode;
    constructor(props?: any) {
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