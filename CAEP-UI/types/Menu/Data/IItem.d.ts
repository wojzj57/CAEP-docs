import { DimensionValue } from "@adobe/react-spectrum";
import { CEItemType } from "../../Ulits/Item";
import { ICNumber, ICToggle, ICCheckbox, ICSlider, ICButton, ICChevron, ICSelect } from "./IComponent";
export declare class itemBase {
    type: CEItemType;
    constructor();
}
export declare class item extends itemBase {
    name: string;
    header: string;
    hint: string;
    enable: boolean;
    visible: boolean;
    componect: ICNumber | ICToggle | ICCheckbox | ICSlider | ICButton | ICChevron | ICSelect;
    type: CEItemType;
    constructor(props: {
        name: string;
        header: string;
        hint?: string;
        enable?: boolean;
        visible?: boolean;
        componect: ICNumber | ICToggle | ICCheckbox | ICSlider | ICButton | ICChevron | ICSelect;
    });
}
export declare class ISpace extends itemBase {
    type: CEItemType;
    height: string | DimensionValue;
    line: boolean;
    constructor(props?: {
        height?: string | DimensionValue;
        line?: boolean;
    });
}
