import { DimensionValue } from "@adobe/react-spectrum";
import { CEItemType } from "../../Ulits/Item";
import { ICNumber, ICToggle, ICCheckbox, ICSlider, ICButton, ICChevron, ICSelect } from "./components";

export type itemType = item | space;

export class itemBase {
    public type: CEItemType;
    constructor() { }
}

export class item extends itemBase {
    public name: string = '';
    public header: string = '';
    public hint: string = '';

    public enable: boolean = true;
    public visible: boolean = true;

    public componect: ICNumber | ICToggle | ICCheckbox | ICSlider | ICButton | ICChevron | ICSelect;

    public type: CEItemType = CEItemType.Item;
    constructor(props: {
        name: string,
        header: string,
        hint?: string,
        enable?: boolean,
        visible?: boolean,
        componect: ICNumber | ICToggle | ICCheckbox | ICSlider | ICButton | ICChevron | ICSelect,
    }) {
        super();
        this.name = props.name;
        this.header = props.header;
        this.hint = props.hint || this.hint;

        this.enable = props.enable != undefined ? props.enable : this.enable;
        this.visible = props.visible != undefined ? props.visible : this.visible;

        this.componect = props.componect;
    }
}

export class space extends itemBase {
    public type: CEItemType = CEItemType.Filter;
    public height: string | DimensionValue;
    public line: boolean = false;
    constructor(props?: {
        height?: string | DimensionValue,
        line?: boolean
    }) {
        super();
        props = props || {};
        this.height = props.height || 'size-150';
        this.line = props.line != undefined ? props.line : this.line;
    }
}