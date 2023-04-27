import React from "react";
import { DimensionValue } from "@adobe/react-spectrum";
import { FOption } from "../Menu/Data/components";
export declare class CCNumber extends React.Component<any, any> {
    id: string;
    content: any;
    defaultValue: any;
    range: {
        min: number;
        max: number;
    };
    width: string;
    step: number;
    private enable;
    callback: Function;
    props: {
        id: string;
        content: any;
        defaultValue?: any;
        range?: {
            min: number;
            max: number;
        };
        width?: string | DimensionValue;
        step?: number;
        enable?: boolean;
        callback?: Function;
    };
    state: {
        value: any;
    };
    constructor(props: any);
    render(): JSX.Element;
}
/**
 * @class 开关
 * @classdesc 开关
 */
export declare class CCToggle extends React.Component<any, any> {
    id: string;
    content: any;
    defaultValue: any;
    private enable;
    callback: Function;
    props: {
        id: string;
        content: any;
        defaultValue?: any;
        enable?: boolean;
        callback?: Function;
    };
    state: {
        value: any;
    };
    constructor(props: any);
    render(): JSX.Element;
}
/**
 * @class 复选框
 * @classdesc 复选框
 */
export declare class CCCheckbox extends React.Component<any, any> {
    id: string;
    content: any;
    defaultValue: any;
    private enable;
    callback: Function;
    props: {
        id: string;
        content: any;
        defaultValue?: any;
        enable?: boolean;
        callback?: Function;
    };
    state: {
        value: any;
    };
    constructor(props: any);
    render(): JSX.Element;
}
/**
 * @class 按钮
 * @classdesc 按钮
 */
export declare class CCButton extends React.Component<any, any> {
    private enable;
    label: string;
    width: string | DimensionValue;
    callback: Function;
    props: {
        label?: string;
        enable?: boolean;
        callback?: Function;
    };
    state: {
        value: any;
    };
    constructor(props: any);
    render(): JSX.Element;
}
/**
 * @class 滑动条
 * @classdesc 滑动条
 */
export declare class CCSlider extends React.Component<any, any> {
    id: string;
    content: any;
    range: {
        min: number;
        max: number;
    };
    step: number;
    private enable;
    callback: Function;
    props: {
        id: string;
        content: any;
        range?: {
            min: number;
            max: number;
        };
        step?: number;
        enable?: boolean;
        callback?: Function;
    };
    state: {
        value: any;
    };
    constructor(props: any);
    render(): JSX.Element;
}
/**
 * @class 指向
 * @classdesc 指向
 */
export declare class CCChevron extends React.Component<any, any> {
    private enable;
    callback: Function;
    props: {
        label?: string;
        enable?: boolean;
        callback?: Function;
    };
    state: {
        value: any;
    };
    constructor(props: any);
    render(): JSX.Element;
}
/**
 * @class 选择
 * @classdesc 选择
 */
export declare class CCSelect extends React.Component<any, any> {
    id: string;
    content: any;
    select: number;
    options: FOption[];
    private enable;
    callback: Function;
    props: {
        label?: string;
        enable?: boolean;
        id?: string;
        content?: any;
        select: number;
        options: FOption[];
        callback?: Function;
    };
    state: {
        state: any;
    };
    constructor(props: any);
    next(): void;
    prev(): void;
    render(): JSX.Element;
}
