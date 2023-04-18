import React, { ReactNode, Ref } from "react";
import { render } from "react-dom";

import { Provider, View, Flex } from '@adobe/react-spectrum';
import { darkTheme, lightTheme } from '@adobe/react-spectrum';

import { CProvider } from "./Provider";

export class CView extends React.Component<any, any> {
    props: any;
    constructor(props?: any) {
        super(props);
    }

    render(): React.ReactNode {
        return (
            <Provider theme={darkTheme} colorScheme={'dark'}>
                <CProvider.Provider value={{
                    tap: true,
                    theme: 'dark'
                }}>
                    <Flex height={'100%'} direction='column'>
                        <View height={'100%'} padding={'size-100'}>
                            {this.props.children}
                        </View>
                    </Flex>
                </CProvider.Provider>
            </Provider>
        )
    }
}