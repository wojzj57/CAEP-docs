import { ConfigProvider, Flex, Typography, theme } from "antd"

import "./Menu.less"

export const ExMenu = () => {
    return (
        <ConfigProvider theme={{
            algorithm: theme.darkAlgorithm,
        }}
        >
            <MenuArea>
                <MenuPage />
            </MenuArea>
        </ConfigProvider >
    )
}

const MenuPage = () => {
    return (
        <Flex className="ex-menu-page" vertical>
            <Flex className="ex-menu-panel"
                vertical
                gap={"small"}
            >
                <Flex vertical
                    style={{ paddingTop: "8px", paddingBottom: "4px" }}
                >
                    <Typography.Title className="m-none" level={3}>
                        Menu
                    </Typography.Title>
                </Flex>
                <Flex
                    vertical
                    gap={"small"}
                >
                    <MenuItem desc="Dashboard">
                        <Flex className="flex-grow">
                            <Typography.Text>23</Typography.Text>
                        </Flex>
                    </MenuItem>
                    <MenuItem desc="Dashboardxxxxc2" active>
                        <Flex className="flex-grow">
                            <Typography.Text>23</Typography.Text>
                        </Flex>
                    </MenuItem>
                </Flex>
            </Flex>
        </Flex>
    )
}

export const MenuItem = ({ active, desc, children }: { active?: boolean, desc: string, children: JSX.Element }) => {
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

export const MenuArea = ({ children }: { children: JSX.Element }) => {
    return (
        <Flex className="ex-menu-area" vertical>
            {children}
        </Flex>
    )
}