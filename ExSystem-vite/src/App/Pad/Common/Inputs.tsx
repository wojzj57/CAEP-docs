import { Flex, Typography } from "antd"

export const InputItem = ({ title, children }: { title: string, children: JSX.Element | JSX.Element[] }) => {
    return (
        <Flex vertical>
            <Typography.Text className="ex-header forbidden-act" type="secondary">
                {title}
            </Typography.Text>
            {children}
        </Flex>
    )
} 