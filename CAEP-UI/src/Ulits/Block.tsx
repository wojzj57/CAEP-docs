import React from "react";
import { motion } from "framer-motion";

import { View, Heading, Divider, Flex } from "@adobe/react-spectrum";

export class CPanel extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render(): React.ReactNode {
        return (<View
            flex={1}
            UNSAFE_className="cc-panel"
            borderRadius="medium"
            paddingX={"size-100"}
            paddingBottom={"size-150"}
            paddingTop={"size-150"}
        >
            <Flex direction={'column'} flex={1} flexGrow={1} gap='size-50'>
                {React.Children.map(this.props.children, child => {
                    if (child == undefined) return null;
                    return React.cloneElement(child, {
                    });
                })}
            </Flex>
        </View >)
    }
}