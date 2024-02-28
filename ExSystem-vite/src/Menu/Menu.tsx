import { ConfigProvider, Flex, Typography, theme } from "antd"

import "./Menu.less"
import { ExMenuPage } from "./Page"
import { getMenuItem } from "./MenuComponents";
import React, { useEffect, useState } from "react";

const testPage = new ExMenuPage("XSC");
testPage.items = [
    {
        title: "Dashboard", component: {
            type: "button",
            enterHandler: () => {
                console.log("enter 1")
            },
            desc: "Dashboard"
        }
    },
    {
        type: "divider"
    },
    {
        title: "DashboardXX", component: {
            type: "button",
            enterHandler: () => {
                console.log("enter 2")
            },
        }
    },
]

export const ExMenu = () => {
    return (
        <ConfigProvider theme={{
            algorithm: theme.darkAlgorithm,
        }}
        >
            <MenuArea>
                <MenuPage page={testPage} />
            </MenuArea>
        </ConfigProvider >
    )
}


// const MenuPageRef = React.createRef
const MenuPage = ({ page }: { page: ExMenuPage }) => {
    const [state, setState] = useState(0);

    const upHandler = () => {
        const index = page.indexUp();
        setState(index);
    }
    const downHandler = () => {
        const index = page.indexDown();
        setState(index);
    }
    const enterHandler = () => {
        page.ender();
    }

    useEffect(() => {
        const eventListener = (e: KeyboardEvent) => {
            if ((e.key == "Enter" || e.key == " "))
                return enterHandler()
            if (e.key == "ArrowUp")
                return upHandler()
            if (e.key == "ArrowDown")
                return downHandler()
        }
        document.addEventListener('keydown', eventListener)
        return () => {
            document.removeEventListener('keydown', eventListener)
        }
    }, [])

    return (
        <Flex className="ex-menu-page forbidden-act" vertical>
            <Flex className="ex-menu-panel"
                vertical
                gap={"small"}
            >
                <Flex vertical
                    style={{ paddingTop: "8px", paddingBottom: "4px" }}
                >
                    <Typography.Title className="m-none" level={3}>
                        {page.title}
                    </Typography.Title>
                </Flex>
                <Flex
                    vertical
                    gap={"small"}
                >
                    {page.items.map((item, index) =>
                        <Flex key={index} vertical className="flex-grow">
                            {
                                item.type == "divider" ?
                                    <MenuDivider />
                                    :
                                    <MenuItem desc={item.title} active={page.index == index}>
                                        {
                                            getMenuItem(item.component)
                                        }
                                    </MenuItem>
                            }
                        </Flex>
                    )}
                </Flex>
            </Flex>
        </Flex>
    )
}

export const MenuItem = ({ active, desc, children }: { active?: boolean, desc: string, children: JSX.Element | undefined }) => {
    return (
        <Flex className={`flex-grow forbidden-act ex-menu-item ${active ? " ex-menu-item-active" : undefined}`} gap={"small"}>
            <Flex className="my-auto"
                style={{ width: "80px" }}
            >
                <Typography.Text>{desc}</Typography.Text>
            </Flex>
            <Flex className="flex-grow my-auto" vertical>
                {children}
            </Flex>
        </Flex>
    )
}

export const MenuDivider = () => {
    return (
        <Flex className={`flex-grow forbidden-act ex-menu-divider`} gap={"small"}>
            <div className="flex-grow ex-menu-divider-line" />
        </Flex>
    )
}

export const MenuArea = ({ children }: { children: JSX.Element }) => {
    return (
        <Flex className="ex-menu-area" vertical>
            {children}
        </Flex>
    )
}