import { ExImage } from "@/Types/Common";
import { Button, Card, Col, Flex, Form, FormListFieldData, Image, Input, Popover, Row, Select, Slider, Space, Typography, message } from "antd"
import { createRef, useEffect, useRef, useState } from "react";
import { Block } from "./Block";

import "./Inputs.less";
import { CancelButton } from "./Button";
import { ExNote } from "./Text";
import { DefaultOptionType } from "antd/es/select";

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

export const SingleTagInput = ({ value, onChange, options }: {
    value?: string,
    onChange?: (str?: string) => void,
    options: DefaultOptionType[]
}) => {
    return (
        <Select
            mode="tags"
            value={value != undefined ? [value] : undefined}
            placeholder={"不详"}
            onChange={(value: string[]) => {
                if (!onChange) return;
                if (value.length == 0)
                    onChange(undefined);
                if (value.length == 1)
                    onChange(value[0]);
                if (value.length >= 2)
                    onChange(value[1]);
            }}
            options={options}
        />
    )
}

export const PostalInput = ({ value, onChange }: { value?: string, onChange?: (postal?: string) => void }) => {
    return (
        <Space.Compact className="flex flex-grow">
            <Input value={value} onChange={(event) => {
                if (onChange) {
                    onChange(event.target.value);
                }
            }} />
            <Button style={{ paddingLeft: "4px", paddingRight: "4px" }} type="primary">
                {
                    <svg className="flex my-auto ex-color" style={{ fill: "var(--gray-700)", height: 16, width: 16, marginRight: "2px" }} viewBox="0 0 18 18" >
                        <path className="fill" d="M9,.9625a6,6,0,0,0-6,6c0,3.3135,6,10.875,6,10.875s6-7.5615,6-10.875A6,6,0,0,0,9,.9625ZM9,9.325A2.325,2.325,0,1,1,11.325,7,2.325,2.325,0,0,1,9,9.325Z" />
                    </svg>
                }
            </Button>
        </Space.Compact>
    )
}

export const DateInput = ({ value, onChange }: { value?: string, onChange?: (date: string) => void }) => {
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

export const ImageInput = ({ fields, add, remove, disable }: {
    fields: FormListFieldData[],
    add: (image: ExImage) => void,
    remove: (index: number) => void,
    disable: boolean
}) => {
    const [hover, setHover] = useState(false);
    const hoverRef = useRef<boolean>(false);

    useEffect(() => {
        window.addEventListener('paste', pasteHandler);
        return () => {
            window.removeEventListener('paste', pasteHandler);
        }
    }, [])

    useEffect(() => {
        hoverRef.current = hover;
    }, [hover])

    const pasteHandler = async (event: ClipboardEvent) => {
        try {
            if (disable)
                throw new Error("不可编辑")
            if (hoverRef.current && event.clipboardData) {
                const file = event.clipboardData.files[0];
                if (file && file.type == "image/png") {
                    const reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onload = (result) => {
                        if (reader.result) {
                            add(reader.result.slice(22) as string);
                        }
                    };
                }
                else
                    throw new Error("未粘贴图片")
            }
        } catch (error: any) {
            message.error(error.message);
        }
    }

    return (
        <Block title={"照片"}>
            <Card
                className="ex-color"
                size="small"
                bordered={true}

                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}

                style={{
                    paddingRight: "12px",
                    borderColor: hover ? "var(--blue-700)" : undefined,
                }}
            >
                <Row className="flex-grow" gutter={[0, 12]}>
                    {fields.map((field) =>
                        <Col key={field.key} span={4}>
                            <Form.Item name={field.name}>
                                <ImagePreview remove={() => { remove(field.name) }} />
                            </Form.Item>
                        </Col>
                    )}
                </Row>
                <Flex className="flex-grow">
                    <Flex className="mx-auto">
                        <ExNote> 此处粘贴图片</ExNote>
                    </Flex>
                </Flex>
            </Card>
        </Block >
    )
}

export const ImagePreview = ({ value, onChange, remove }: {
    value?: string, onChange?: (date: string) => void
    remove: () => void
}) => {
    return (
        <Flex vertical className="pos-rel">
            <Image
                src={`data:image/png;base64,${value}`}
            />
            <Flex className="pos-abs-abut point-off">
                <Flex className="ml-auto" style={{ marginTop: "4px", marginRight: "4px" }}>
                    <CancelButton type={"default"} onClick={remove} />
                </Flex>
            </Flex>
        </Flex>
    )
}
