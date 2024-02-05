import { Typography } from "antd"


export const ExHeader = ({ children }: { children: string }) => {
    return (
        <Typography.Text className="ex-header">
            {children}
        </Typography.Text>
    )
}

export const ExText = ({ children }: { children: string }) => {
    return (
        <Typography.Text className="ex-text">
            {children}
        </Typography.Text>
    )
}