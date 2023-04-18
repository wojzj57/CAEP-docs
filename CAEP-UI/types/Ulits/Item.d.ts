import React from "react";
import { DimensionValue } from "@adobe/react-spectrum";
export declare enum CEItemStaus {
    Normal = 0,
    Hovered = 1
}
export declare enum CEItemType {
    Item = 0,
    Filter = 1
}
export declare class CItem extends React.Component<any, any> {
    name: string;
    header: string;
    hint: string;
    enable: boolean;
    visible: boolean;
    tpye: CEItemType;
    state: {
        staus: CEItemStaus;
    };
    props: {
        name?: string;
        header?: string;
        hint?: string;
        enable?: boolean;
        visible?: boolean;
        [key: string]: any;
    };
    constructor(props: any);
    render(): React.ReactNode;
}
export declare class CSpace extends React.Component<any, any> {
    height: string | DimensionValue;
    line: boolean;
    tpye: CEItemType;
    props: {
        height?: string | DimensionValue;
        line?: boolean;
        [key: string]: any;
    };
    constructor(props: any);
    render(): React.ReactNode;
}
