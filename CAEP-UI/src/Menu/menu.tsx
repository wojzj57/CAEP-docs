import React from "react";
import { motion } from "framer-motion";

import { View, Heading, Flex, Text } from "@adobe/react-spectrum";
import {
    ActionButton,
    Tabs, TabList, TabPanels, Item,
    DialogTrigger, Dialog, Content,
    Breadcrumbs
} from "@adobe/react-spectrum";

import { CItem, CSpace } from "../Ulits/Item";
import { CPanel } from "../Ulits/Block";
import { CCButton, CCCheckbox, CCChevron, CCNumber, CCSelect, CCSlider, CCToggle } from "../Ulits/Component";


import { IPage } from "./Data/IPage";

export namespace CMenu {
    export interface CPageTree {
        current: CPage,
        children: { [name: string]: CPageTree },
        parent?: CPageTree
    }
}

export class CMenu extends React.Component<any, any> {
    private pageTree: CMenu.CPageTree;
    props: { title: string, mainPage: IPage }
    constructor(props: any) {
        super(props);
    }

    // currentPage() {
    //     return this.
    // }


    // 事件处理

    // Render

    render(): React.ReactNode {
        return (
            <Flex direction={'column'} gap={'size-100'}>
                <CPanel>
                    <Flex direction={'column'}>
                        <CMenuHeader title={this.props.title} />
                        <CPage />
                    </Flex>
                </CPanel>
                <CPanel>
                    <Flex marginX={'size-100'} direction={'column'}>
                        <Text>{'这是一个非常非常非常长的说明常非常长的说明常非常长的说明常非常长的说明常非常长的说明'}</Text>
                    </Flex>
                </CPanel>
            </Flex>
        )
    }
}

export class CPage extends React.Component<any, any> {
    public items: React.ReactElement[] = [
        <CItem name="test1" header="test1"><CCNumber id={"test"} content={{ test: 1 }}></CCNumber></CItem>,
        <CItem name="test2" header="test2"><CCButton label="刷出武器"></CCButton></CItem>,
        <CSpace line={true} />,
        <CItem name="test3" header="test3"><CCToggle id={"test"} content={{ test: true }}></CCToggle></CItem>,
        <CItem name="test3" header="test3"><CCCheckbox id={"test"} content={{ test: true }}></CCCheckbox></CItem>,
        <CItem name="test4" header="test4"><CCSlider id={"test"} content={{ test: true }}></CCSlider></CItem>,
        <CItem name="test4" header="test4"><CCSelect select={1} options={[{name:'1', desc:'one'}, {name:'2', desc:'two'}, {name:'3', desc:'three'}]} ></CCSelect></CItem>,
        <CItem name="test5" header="test5"><CCChevron></CCChevron></CItem>,
    ];

    public name: string;
    public description: string;

    public menu: CMenu;
    public parent?: CPage;
    public children: { [name: string]: CPage };

    public itemRefs: React.Ref<unknown>[] = [];
    public currentItem: React.Ref<unknown>;

    props: any;
    constructor(props: any) {
        super(props);

        // this.refs []
        // this.items[0].setState()
        this.description = '111111111111111';
    }

    nextItem() {

    }

    prevItem() {

    }
    
    // componentDidMount(): void {
    //     if(!this.currentItem){
    //         currentItem
    //     }
    // }

    render(): React.ReactNode {
        return (
            <Flex flex={1} flexGrow={1} direction={'column'} gap={'size-150'}>
                <Flex marginX={'size-100'}>
                    <Flex marginY={'auto'}>
                        <Text UNSAFE_className="forbidden-select">{this.description}</Text>
                    </Flex>
                </Flex>
                <Flex direction={'column'}>
                    {this.items.map((item, index) => {
                        let _ref = React.createRef();
                        this.itemRefs.push(_ref);
                        return React.cloneElement(item, { key: index, ref: _ref })
                    })}
                </Flex>
            </Flex>
        )
    }
}

export class CMenuHeader extends React.Component<any, any> {
    props: { title: string }
    constructor(props: any) {
        super(props);
    }

    render(): React.ReactNode {
        return (
            <Flex marginX={'size-100'}>
                <Heading UNSAFE_className="forbidden-select" level={1}>{this.props.title}</Heading>
            </Flex>
        )
    }
}

// export class CMenuBreadcrumbs extends React.Component<any, any> {
//     constructor(props: any) {
//         super(props);
//     }

//     render(): React.ReactNode {
//         return (
//             <View overflow={'hidden'} width={'100%'}>
//                 <Breadcrumbs showRoot>
//                     <Item key={'test'}>
//                         test
//                     </Item>
//                     <Item key={'test2'}>
//                         test2
//                     </Item>
//                     <Item key={'test3'}>
//                         test3
//                     </Item>
//                     <Item key={'test4'}>
//                         test4
//                     </Item>
//                     <Item key={'test5'}>
//                         test5
//                     </Item>
//                     <Item key={'test6'}>
//                         test6
//                     </Item>
//                 </Breadcrumbs>
//             </View>
//         )
//     }
// }