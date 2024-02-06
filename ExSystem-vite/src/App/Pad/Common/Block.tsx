import { Flex, Typography } from "antd"

export const Block = ({ title, children }: { title: string, children: JSX.Element | JSX.Element[] }) => {
    return (
        <Flex vertical>
            <Typography.Title className="ex-header forbidden-act">
                {title}
            </Typography.Title>
            {children}
        </Flex>
    )
}