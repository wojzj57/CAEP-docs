import { Flex, Typography } from "antd"
import { EmButton, ExMenuComponents } from "./Components"

export type MenuComponentProps = {
    enterHandler?: () => void,
    leftHandler?: () => void,
    rightHandler?: () => void
}

export const getMenuItem = (component: ExMenuComponents) => {
    switch (component.type) {
        case "button":
            return <MenuButton type={component.type} desc={component.desc} enterHandler={component.enterHandler} />
    }
}


export const MenuButton = ({ desc, enterHandler }: EmButton) => {
    return (
        <Flex className="flex-grow">
            <Flex className="my-auto ml-auto">
                <Typography.Text>{desc}</Typography.Text>
            </Flex>
        </Flex>
    )
}
