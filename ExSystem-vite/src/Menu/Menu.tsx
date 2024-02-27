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
                    <Typography.Text>23</Typography.Text>
                    <Typography.Text>23</Typography.Text>
                    <Typography.Text>23</Typography.Text>
                    <Typography.Text>23</Typography.Text>
                </Flex>
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