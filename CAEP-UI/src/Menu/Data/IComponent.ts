import { DimensionValue } from "@adobe/react-spectrum";

export type FOption = {
    name: string,
    desc: string
}

export type IComponents = ICNumber | ICToggle | ICCheckbox | ICSlider | ICButton | ICChevron | ICSelect;


type ICallback = (...props: any) => void;

export class IComponent {
    public id: string;
    public content: object;
    public callback: ICallback;
    constructor(props: {
        id: string,
        content: object,
        callback?: ICallback
    }) {
        this.id = props.id;
        this.content = props.content;
        this.callback = props.callback || function () { };
    }
}

export class ICNumber extends IComponent {
    public defaultValue?: number;
    public range?: { min: number, max: number };
    public width?: string | DimensionValue;
    public step?: number;
    public enable?: boolean;
    constructor(props: {
        id: string,
        content: object,
        callback?: ICallback,

        defaultValue?: number,
        range?: { min: number, max: number },
        width?: string | DimensionValue,
        step?: number,
        enable?: boolean,
    }) {
        super(props);
        this.defaultValue = props.defaultValue;
        this.range = props.range;
        this.width = props.width;
        this.step = props.step;
        this.enable = props.enable == undefined ? this.enable : props.enable;
    }
}

export class ICToggle extends IComponent {
    public defaultValue?: number;
    public enable?: boolean;
    constructor(props: {
        id: string,
        content: object,
        callback?: ICallback,

        defaultValue?: number,
        enable?: boolean,
    }) {
        super(props);
        this.defaultValue = props.defaultValue;
        this.enable = props.enable == undefined ? this.enable : props.enable;
    }
}

export class ICCheckbox extends IComponent {
    public defaultValue?: number;
    public enable?: boolean;
    constructor(props: {
        id: string,
        content: object,
        callback?: ICallback,

        defaultValue?: number,
        enable?: boolean,
    }) {
        super(props);
        this.defaultValue = props.defaultValue;
        this.enable = props.enable == undefined ? this.enable : props.enable;
    }
}

export class ICSlider extends IComponent {
    public defaultValue?: number;
    public range?: { min: number, max: number };
    public enable?: boolean;
    constructor(props: {
        id: string,
        content: object,
        callback?: ICallback,

        defaultValue?: number,
        range?: { min: number, max: number },
        enable?: boolean,
    }) {
        super(props);
        this.defaultValue = props.defaultValue;
        this.range = props.range;
        this.enable = props.enable == undefined ? this.enable : props.enable;
    }
}

export class ICButton extends IComponent {
    public label?: string;
    public enable?: boolean;
    constructor(props: {
        id: string,
        content: object,
        callback?: ICallback,

        label?: string,
        enable?: boolean,
    }) {
        super(props);
        this.label = props.label;
        this.enable = props.enable == undefined ? this.enable : props.enable;
    }
}

export class ICChevron extends IComponent {
    public enable?: boolean;
    constructor(props: {
        id: string,
        content: object,
        callback?: ICallback,

        enable?: boolean,
    }) {
        super(props);
        this.enable = props.enable == undefined ? this.enable : props.enable;
    }
}

export class ICSelect extends IComponent {
    public select: number;
    public options: FOption[];
    public enable?: boolean;
    constructor(props: {
        id: string,
        content: object,
        callback?: ICallback,

        select: number,
        options: FOption[],
        enable?: boolean,
    }) {
        super(props);
        this.select = props.select || 0;
        this.options = props.options || [];
        this.enable = props.enable == undefined ? this.enable : props.enable;
    }
}
