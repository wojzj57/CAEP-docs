import { Button, Flex, Input, Popover, Slider, Space, Typography } from "antd"
import { useEffect, useState } from "react";

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

export const DateInputer = ({ value, onChange }: { value?: string, onChange?: (date: string) => void }) => {
    const stringToDate = (date?: string) => {
        try {
            if (!date) return 946684800000;
            return new Date(date).getTime();
        } catch (error) {
            return 946684800000;
        }
    }

    return (
        <Space.Compact className="flex flex-grow">
            <Input
                defaultValue={value}
                placeholder={"不详"}
                value={value}
                onChange={(event) => {
                    if (onChange) {
                        onChange(event.target.value)
                    }
                }} />
            <Popover placement="bottom"
                content={
                    <Flex vertical style={{ width: "160px" }}>
                        <Slider
                            tooltip={{ formatter: null }}
                            min={-946771200000}
                            max={1577836800000}
                            value={stringToDate(value)}
                            onChange={(nextValue) => {
                                if (onChange) {
                                    const newdate = new Date(nextValue).toISOString().split('T')[0]
                                    onChange(newdate);
                                }
                            }}
                        />
                    </Flex>
                } arrow={false}>
                <Button style={{ paddingLeft: "4px", paddingRight: "4px" }} type="primary">{
                    <svg className="flex my-auto ex-color" style={{ fill: "var(--gray-700)", height: 16, width: 16, marginRight: "2px" }} viewBox="0 0 18 18" >
                        <path className="fill" d="M17.5,3H15V1.5a.5.5,0,0,0-.5-.5h-1a.5.5,0,0,0-.5.5V3H6V1.5A.5.5,0,0,0,5.5,1h-1a.5.5,0,0,0-.5.5V3H1.5a.5.5,0,0,0-.5.5v13a.5.5,0,0,0,.5.5h16a.5.5,0,0,0,.5-.5V3.5A.5.5,0,0,0,17.5,3ZM17,16H2V4H4v.5a.5.5,0,0,0,.5.5h1A.5.5,0,0,0,6,4.5V4h7v.5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5V4h2Z" />
                    </svg>
                }</Button>
            </Popover>
        </Space.Compact>

    )
}
