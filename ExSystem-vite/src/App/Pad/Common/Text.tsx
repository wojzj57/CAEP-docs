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

export const ExNote = ({ children }: { children: string }) => {
    return (
        <Typography.Text className="forbidden-act" type="secondary">{children}</Typography.Text>
    )
}