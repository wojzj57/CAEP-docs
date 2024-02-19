import { Flex, Typography } from "antd"

export const Block = ({ title, extra, children }: { title: string, extra?: JSX.Element, children: JSX.Element | JSX.Element[] }) => {
    return (
        <Flex vertical className="flex-grow">
            <Flex className="flex-grow">
                <Typography.Title className="ex-header forbidden-act">
                    {title}
                </Typography.Title>
                <Flex className="ml-auto my-auto">
                    {extra}
                </Flex>
            </Flex>
            {children}
        </Flex>
    )
}