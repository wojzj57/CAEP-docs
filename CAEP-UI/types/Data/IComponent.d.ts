import { DimensionValue } from "@adobe/react-spectrum";
export type FOption = {
    name: string;
    desc: string;
};
export type IComponents = ICNumber | ICToggle | ICCheckbox | ICSlider | ICButton | ICChevron | ICSelect;
type ICallback = (...props: any) => void;
export declare class IComponent {
    id: string;
    content: object;
    callback: ICallback;
    constructor(props: {
        id: string;
        content: object;
        callback?: ICallback;
    });
}
export declare class ICNumber extends IComponent {
    defaultValue?: number;
    range?: {
        min: number;
        max: number;
    };
    width?: string | DimensionValue;
    step?: number;
    enable?: boolean;
    constructor(props: {
        id: string;
        content: object;
        callback?: ICallback;
        defaultValue?: number;
        range?: {
            min: number;
            max: number;
        };
        width?: string | DimensionValue;
        step?: number;
        enable?: boolean;
    });
}
export declare class ICToggle extends IComponent {
    defaultValue?: number;
    enable?: boolean;
    constructor(props: {
        id: string;
        content: object;
        callback?: ICallback;
        defaultValue?: number;
        enable?: boolean;
    });
}
export declare class ICCheckbox extends IComponent {
    defaultValue?: number;
    enable?: boolean;
    constructor(props: {
        id: string;
        content: object;
        callback?: ICallback;
        defaultValue?: number;
        enable?: boolean;
    });
}
export declare class ICSlider extends IComponent {
    defaultValue?: number;
    range?: {
        min: number;
        max: number;
    };
    enable?: boolean;
    constructor(props: {
        id: string;
        content: object;
        callback?: ICallback;
        defaultValue?: number;
        range?: {
            min: number;
            max: number;
        };
        enable?: boolean;
    });
}
export declare class ICButton extends IComponent {
    label?: string;
    enable?: boolean;
    constructor(props: {
        id: string;
        content: object;
        callback?: ICallback;
        label?: string;
        enable?: boolean;
    });
}
export declare class ICChevron extends IComponent {
    enable?: boolean;
    constructor(props: {
        id: string;
        content: object;
        callback?: ICallback;
        enable?: boolean;
    });
}
export declare class ICSelect extends IComponent {
    select: number;
    options: FOption[];
    enable?: boolean;
    constructor(props: {
        id: string;
        content: object;
        callback?: ICallback;
        select: number;
        options: FOption[];
        enable?: boolean;
    });
}
export {};
