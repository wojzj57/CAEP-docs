import React from "react";
import { motion } from "framer-motion";
import { Scrollbars } from 'react-custom-scrollbars-2';

import { Flex, Provider, View } from "@adobe/react-spectrum";
import { DimensionValue } from "@adobe/react-spectrum";
import { Heading, ContextualHelp, Content, Text, Divider } from "@adobe/react-spectrum";
import { CProvider } from "./Provider";

export enum CEItemStaus {
    Normal,
    Hovered
}

export enum CEItemType {
    Item,
    Filter
}


export class CItem extends React.Component<any, any> {
    public name: string = '';
    public header: string = '';
    public hint: string = '';

    public enable: boolean = true;
    public visible: boolean = true;

    public tpye: CEItemType = CEItemType.Item;

    state: { staus: CEItemStaus } = { staus: CEItemStaus.Normal }
    props: { name?: string, header?: string, hint?: string, enable?: boolean, visible?: boolean, [key: string]: any };
    constructor(props: any) {
        super(props);
        this.name = props.name;
        this.header = props.header || '';
        this.hint = props.hint;

        this.visible = props.visible != undefined ? props.visible : true;
        this.enable = props.enable != undefined ? props.enable : true;
    }

    render(): React.ReactNode {
        return (
            <CProvider.Consumer>{(provider) => {
                let hoverVariant = provider.tap ? {
                    backgroundColor: '#ffffff50',
                    boxShadow: '0px 4px 14px rgba(0, 0, 0, 0.3)',
                } : {};

                return (
                    <motion.div
                        style={{
                            borderRadius: 'var(--spectrum-alias-border-radius-medium)',
                            backgroundColor: '#00000000',
                        }}
                        whileHover={hoverVariant}
                        animate={{
                            backgroundColor: this.state.staus == CEItemStaus.Hovered ? '#FFFFFF50' : '#00000000',
                            boxShadow: this.state.staus == CEItemStaus.Hovered ? '0px 4px 14px rgba(0, 0, 0, 0.3)' : '0px',
                        }}
                        transition={{ ease: "easeOut", duration: .3 }}
                    >
                        <View
                            paddingX={'size-100'}
                            paddingY={'size-50'}
                        >
                            <Flex flex={1} flexGrow={1} >
                                <Flex marginBottom={'auto'} height={'size-400'} minWidth={'size-800'} width={'size-1200'}>
                                    <Heading UNSAFE_className="item-header forbidden-select" marginY={'auto'} level={3}>
                                        {this.header}
                                    </Heading>
                                </Flex>
                                <Flex flex={1} flexGrow={1} marginStart={'auto'} maxWidth={'size-6000'} marginY={'auto'}>
                                    <Flex flex={1} flexGrow={1} direction={'column'} gap='size-150'>
                                        {React.Children.map(this.props.children, child => {
                                            if (typeof (child) != 'object') {
                                                return <Flex>{child}</Flex>
                                            }
                                            return React.cloneElement(child, {
                                                enable: this.enable
                                            }
                                            );
                                        })}
                                    </Flex>
                                </Flex>
                            </Flex>
                        </View>
                    </motion.div>)
            }

            }</CProvider.Consumer>

        )
    }
}

export class CSpace extends React.Component<any, any> {
    public height: string | DimensionValue;
    public line: boolean = false;

    public tpye: CEItemType = CEItemType.Item;

    props: { height?: string | DimensionValue, line?: boolean, [key: string]: any };
    constructor(props: any) {
        super(props);
        this.height = props.height || 'size-150';
        this.line = !!props.line;
    }

    render(): React.ReactNode {
        return (
            <View
                UNSAFE_className="item-backround"
                height={this.height}
                borderRadius={'medium'}
                paddingX={'size-50'}
            >
                <Flex height={'100%'}>
                    <View
                        width={'100%'}
                        marginY={'auto'}
                        backgroundColor={this.line ? 'gray-400' : undefined}
                        height={"size-25"}
                        borderRadius={'medium'}
                    >
                    </View>
                </Flex>
            </View>
        )
    }
}