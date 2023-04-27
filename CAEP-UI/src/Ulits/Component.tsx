import React from "react";
import { motion } from "framer-motion";
import { Scrollbars } from 'react-custom-scrollbars-2';

import { View, Heading, Flex, Text, DimensionValue } from "@adobe/react-spectrum";
import {
    TextField, TextArea, NumberField, Content, Checkbox, Switch, ActionButton, Slider,
    TooltipTrigger, Tooltip,
    DialogTrigger, Dialog,
    MenuTrigger, Menu, Picker, Item, Section,
    Image, Link, StatusLight, ProgressCircle, Footer
} from "@adobe/react-spectrum";

import ICON_ChevronDoubleRight from '@spectrum-icons/workflow/ChevronDoubleRight';
import ICON_ChevronLeft from '@spectrum-icons/workflow/ChevronLeft';
import ICON_ChevronRight from '@spectrum-icons/workflow/ChevronRight';
import { FOption } from "../Menu/Data/components";
import { CProvider } from "./Provider";



export class CCNumber extends React.Component<any, any> {
    public id: string;
    public content: any;
    public defaultValue: any;

    public range: { min: number, max: number };
    public width: string;
    public step: number;

    private enable: boolean;

    public callback: Function;
    public props: {
        id: string, content: any,
        defaultValue?: any, range?: { min: number, max: number },
        width?: string | DimensionValue, step?: number, enable?: boolean,
        callback?: Function
    };
    state: { value: any };
    constructor(props: any) {
        super(props);
        this.id = props.id;
        this.content = props.content;
        this.defaultValue = props.defaultValue;

        this.range = props.range || { min: -99999, max: 99999 };
        this.width = props.width || 'size-1000';
        this.step = props.step || 1;

        this.enable = props.enable != undefined ? props.enable : true;

        this.callback = props.callback || function () { };

        this.state = { value: undefined };
    }


    render() {
        let value = this.content[this.id] != undefined ? this.content[this.id] : this.defaultValue;
        return (
            <Flex flex={1} flexGrow={1}>
                <NumberField
                    aria-label="ExNumber"
                    flex={1}
                    flexGrow={1}
                    marginStart={'auto'}
                    maxWidth={this.width}
                    isDisabled={!this.enable}
                    hideStepper

                    step={this.step}
                    value={value}
                    minValue={this.range.min}
                    maxValue={this.range.max}
                    onChange={(value: number) => {
                        this.content[this.id] = value;
                        this.callback();
                        this.setState({ value: value });
                    }}
                />
            </Flex>
        )
    }
}

/**
 * @class 开关
 * @classdesc 开关
 */
export class CCToggle extends React.Component<any, any> {
    public id: string;
    public content: any;
    public defaultValue: any;

    private enable: boolean;

    public callback: Function;
    public props: {
        id: string, content: any,
        defaultValue?: any, enable?: boolean,
        callback?: Function
    };
    state: { value: any };
    constructor(props: any) {
        super(props);
        this.id = props.id;
        this.content = props.content;
        this.defaultValue = props.defaultValue;

        this.enable = props.enable != undefined ? props.enable : true;

        this.callback = props.callback || function () { };
    }

    render() {
        let value = this.content[this.id] != undefined ? this.content[this.id] : this.defaultValue;
        return (
            <Flex flex={1} flexGrow={1} marginStart={'auto'} >
                <Switch
                    aria-label="ExToggle"
                    marginStart='auto'
                    marginEnd='size-0'
                    isDisabled={!this.enable}

                    isSelected={value}
                    onChange={(value: any) => {
                        this.content[this.id] = value;
                        this.callback(value);
                        this.setState({ state: value });
                    }}
                />
            </Flex>
        )
    }
}


/**
 * @class 复选框
 * @classdesc 复选框
 */
export class CCCheckbox extends React.Component<any, any> {
    public id: string;
    public content: any;
    public defaultValue: any;

    private enable: boolean;

    public callback: Function;
    public props: {
        id: string, content: any,
        defaultValue?: any, enable?: boolean,
        callback?: Function
    };
    state: { value: any };
    constructor(props: any) {
        super(props);
        this.id = props.id;
        this.content = props.content;
        this.defaultValue = props.defaultValue;

        this.enable = props.enable != undefined ? props.enable : true;

        this.callback = props.callback || function () { };
    }

    render() {
        let value = this.content[this.id] != undefined ? this.content[this.id] : this.defaultValue;
        return (
            <Flex flex={1} flexGrow={1} marginStart={'auto'} >
                <Checkbox
                    aria-label="ExToggle"
                    marginStart='auto'
                    marginEnd='-7px'
                    isDisabled={!this.enable}

                    isSelected={value}
                    onChange={(value: any) => {
                        this.content[this.id] = value;
                        this.callback(value);
                        this.setState({ state: value });
                    }}
                />
            </Flex>
        )
    }
}


/**
 * @class 按钮
 * @classdesc 按钮
 */
export class CCButton extends React.Component<any, any> {
    private enable: boolean;

    public label: string;

    public width: string | DimensionValue;

    public callback: Function;
    public props: {
        label?: string, enable?: boolean,
        callback?: Function
    };
    state: { value: any };
    constructor(props: any) {
        super(props);
        this.enable = props.enable != undefined ? props.enable : true;

        this.label = props.label || '';

        this.callback = props.callback || function () { };
    }

    render() {
        return (
            <Flex flex={1} flexGrow={1} marginStart={'auto'} >
                <Flex marginY='auto' marginStart='auto'>
                    <ActionButton
                        aria-label="ExButton"
                        width={this.width}
                        maxWidth={this.width}

                        isDisabled={!this.enable}

                        onPress={() => { this.callback() }}
                    >
                        {this.label}
                    </ActionButton>
                </Flex>
            </Flex>
        )
    }
}


/**
 * @class 滑动条
 * @classdesc 滑动条
 */
export class CCSlider extends React.Component<any, any> {
    public id: string;
    public content: any;

    public range: { min: number, max: number };
    public step: number;

    private enable: boolean;

    public callback: Function;
    public props: {
        id: string, content: any,
        range?: { min: number, max: number }, step?: number,
        enable?: boolean,
        callback?: Function
    };
    state: { value: any };
    constructor(props: any) {
        super(props);
        this.id = props.id;
        this.content = props.content;

        this.range = props.range || { min: 0, max: 100 };
        this.step = props.step || 1;

        this.enable = props.enable != undefined ? props.enable : true;

        this.callback = props.callback || function () { };

        this.state = { value: undefined };
    }

    render() {
        return (
            <Flex flex={1} flexGrow={1} gap={'size-100'}>
                <Slider
                    aria-label="ExSlider"
                    maxWidth={'size-2000'}
                    marginStart={'auto'}
                    minValue={this.range.min}
                    maxValue={this.range.max}
                    step={this.step}

                    value={this.content[this.id]}
                    onChange={(value: any) => {
                        this.content[this.id] = value;
                        this.setState({ value: value })
                    }}
                />
                <NumberField
                    aria-label="ExNumber"
                    maxWidth={'size-700'}
                    isDisabled={!this.enable}
                    hideStepper

                    step={this.step}
                    value={this.content[this.id]}
                    minValue={this.range.min}
                    maxValue={this.range.max}
                    onChange={(value: number) => {
                        this.content[this.id] = value;
                        this.callback(value);
                        this.setState({ value: value });
                    }}
                    onKeyDown={(key: any) => {

                    }}
                />
            </Flex>
        )
    }
}


/**
 * @class 指向
 * @classdesc 指向
 */
export class CCChevron extends React.Component<any, any> {
    private enable: boolean;

    public callback: Function;
    public props: {
        label?: string, enable?: boolean,
        callback?: Function
    };
    state: { value: any };
    constructor(props: any) {
        super(props);
        this.enable = props.enable != undefined ? props.enable : true;

        this.callback = props.callback || function () { };
    }

    render() {
        return (
            <CProvider.Consumer>
                {(provider) =>
                    <Flex flex={1} flexGrow={1} marginStart={'auto'} >
                        {provider.tap &&
                            <motion.div
                                whileHover={{
                                    color: "#007AFF",
                                    backgroundColor: "#007AFF"
                                }}
                                transition={{ ease: "easeOut", duration: .3 }}
                            >
                                <View
                                    UNSAFE_className="spectrum-ActionButton_e2d99e"
                                    width={'size-1000'}
                                >
                                    <Flex marginY='auto' marginStart='auto' marginEnd={'size-100'}>
                                        <ICON_ChevronDoubleRight />
                                    </Flex>
                                </View>
                            </motion.div>}
                        {!provider.tap &&
                            <View
                                UNSAFE_className="spectrum-ActionButton_e2d99e"
                                width={'size-1000'}
                            >
                                <Flex marginY='auto' marginStart='auto'>
                                    <ICON_ChevronDoubleRight />
                                </Flex>
                            </View>
                        }
                    </Flex>
                }
            </CProvider.Consumer>

        )
    }
}


/**
 * @class 选择
 * @classdesc 选择
 */
export class CCSelect extends React.Component<any, any> {
    public id: string;
    public content: any;

    public select: number;
    public options: FOption[];

    private enable: boolean;
    public callback: Function;
    public props: {
        label?: string, enable?: boolean,
        id?: string;
        content?: any;

        select: number;
        options: FOption[];
        callback?: Function
    };
    state: { state: any };
    constructor(props: any) {
        super(props);
        this.enable = props.enable != undefined ? props.enable : true;

        this.id = props.id;
        this.content = props.content;

        this.select = props.select || 0;
        this.options = props.options || [];

        this.callback = props.callback || function () { };
    }

    next() {
        this.select = (this.select + 1) % this.options.length;
        if (this.content && this.id) {
            this.content[this.id] = this.options[this.select];
        }
        this.setState({ state: this.select })
    }
    prev() {
        if (this.select - 1 < 0) this.select = this.options.length;
        this.select = (this.select - 1) % this.options.length;
        if (this.content && this.id) {
            this.content[this.id] = this.options[this.select];
        }
        this.setState({ state: this.select })
    }

    render() {
        return (
            <CProvider.Consumer>
                {(provider) => {
                    return (<Flex flex={1} flexGrow={1} marginStart={'auto'} >
                        <Flex marginY='auto' marginStart='auto'>
                            <View
                                UNSAFE_className="spectrum-ActionButton_e2d99e"
                                aria-label="ExButton"
                                width={'size-2000'}
                                maxWidth={'size-2000'}
                            >
                                <View UNSAFE_className="overflow-hide" width={'100%'} flex={1}>
                                    <Flex flex={1} flexGrow={1} height='100%' gap={'size-50'}>
                                        <motion.div
                                            style={{ height: '100%' }}
                                            whileHover={{
                                                color: "#007AFF"
                                            }}
                                            onClick={this.prev.bind(this)}
                                        >
                                            <Flex height='100%'>
                                                <ICON_ChevronLeft marginY={'auto'} size="S" />
                                            </Flex>
                                        </motion.div>
                                        <Flex UNSAFE_className="text-ellip" flex={1} flexGrow={1}>
                                            <Text UNSAFE_className="text-ellip" marginY={'auto'} marginX={'auto'}>
                                                {this.options[this.select].desc}
                                            </Text>
                                        </Flex>
                                        <motion.div
                                            style={{ height: '100%' }}
                                            whileHover={{
                                                color: "#007AFF"
                                            }}
                                            onClick={this.next.bind(this)}
                                        >
                                            <Flex height='100%'>
                                                <ICON_ChevronRight marginY={'auto'} size="S" />
                                            </Flex>
                                        </motion.div>
                                    </Flex>
                                </View>
                            </View>
                        </Flex>
                    </Flex>)
                }}
            </CProvider.Consumer>

        )
    }
}