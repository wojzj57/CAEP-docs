import { Button, Card, Checkbox, Col, Flex, Form, FormInstance, Image, Input, Modal, Row, Select, Space, Typography } from "antd"
import { ExEvent } from "@/Types/Event"
import { SingleTagInput, ImageInput, ImagePreview, InputItem, PostalInput } from "../Common/Inputs"
import { useEffect, useRef, useState } from "react"
import { CallConst } from "./EmergencyCallConst"


import { testEvent } from "@/Dev/Test"
import { Block } from "../Common/Block"
import { SuspectCivFields } from "@/App/Fields/Civ/Civ";
import { CancelButton } from "../Common/Button"
import { ExNote } from "../Common/Text"
import { SuspectVehiclesFields } from "@/App/Fields/Vehicle/Vehicle"

export const EmergencyCallModal = () => {
    return (
        <Modal className="ex-modal"
            open
            centered
            mask={false}
            title={"创建呼叫"}
            footer={null}
        >
            <EmergencyCall event={testEvent} />
        </Modal >
    )
}

export const EmergencyCall = ({ event }: { event: ExEvent }) => {
    const [form] = Form.useForm<ExEvent>();

    //@ts-ignore
    const onFinish = (values: any) => {
        console.log('onFinish', values)
    }

    return (
        <Flex vertical className="flex-grow" gap={"middle"}>
            <Flex className="flex-grow pos-rel">
                <Flex className="pos-abs-abut overflow-auto">
                    <Flex className="flex-grow" vertical>
                        <Form
                            form={form}
                            initialValues={event}

                            className="ex-form"
                            layout={"inline"}

                            onFinish={onFinish}
                            // onFinishFailed={onFinishFailed}
                            autoComplete="off"
                            requiredMark={false}
                        >
                            <Flex vertical gap={"small"} className="flex-grow">
                                <CallInfoBlock />
                                <CallNotesBlock />
                                <CallImagesBlock />
                                <CallSuspectCivBlock />
                                <CallSuspectVehicleBlock />
                            </Flex>
                        </Form>
                    </Flex>
                </Flex>
            </Flex>
            <Button
                type="primary"
                htmlType="submit"
                onClick={() => form.submit()}
            >
                提交
            </Button>
        </Flex>
    )
}

const CallInfoBlock = () => {
    return (
        <Block title={"呼叫信息"} >
            <Row className="flex-grow" gutter={[0, 12]}>
                <Col span={6}>
                    <InputItem title={"呼叫类型"}>
                        <Form.Item<ExEvent>
                            name="class"
                        >
                            <Select
                                options={CallConst.ClassOptions}
                            />
                        </Form.Item>
                    </InputItem>
                </Col>
                <Col span={6}>
                    <InputItem title={"Code"}>
                        <Form.Item<ExEvent>
                            name="type"
                        >
                            <SingleTagInput options={[]} />
                        </Form.Item>
                    </InputItem>
                </Col>
                <Col span={12}>
                    <InputItem title={"呼叫位置"}>
                        <Form.Item<ExEvent>
                            name="postal"
                        >
                            <PostalInput />
                        </Form.Item>
                    </InputItem>
                </Col>
                <Col span={24}>
                    <InputItem title={"呼叫标题"}>
                        <Form.Item<ExEvent>
                            name="title"
                        >
                            <Input />
                        </Form.Item>
                    </InputItem>
                </Col>
                <Col span={24}>
                    <InputItem title={"呼叫内容"}>
                        <Form.Item<ExEvent>
                            name="desc"
                        >
                            <Input.TextArea autoSize={{ minRows: 4 }} />
                        </Form.Item>
                    </InputItem>
                </Col>
            </Row>
        </Block>
    )
}

const CallNotesBlock = () => {
    return (
        <Form.List name={"notes"}>
            {(fields, { add, remove }) => (
                <Form.Item>
                    <Block title={"备注"}
                        extra={
                            <Button type="dashed" onClick={() => add()} block>
                                添加备注
                            </Button>
                        }
                    >
                        <Row className="flex-grow" gutter={[0, 12]}>
                            <Col span={24}>
                                <Flex vertical gap={"small"}>
                                    {fields.length == 0 &&
                                        <Flex className="flex-grow">
                                            <ExNote>无备注信息</ExNote>
                                        </Flex>
                                    }
                                    {
                                        fields.map((field) =>
                                            <Flex vertical key={field.key} className="pos-rel">
                                                <Form.Item name={field.name} style={{ marginRight: "0px" }}>
                                                    <Input />
                                                </Form.Item>
                                                <Flex className="pos-abs-abut point-off">
                                                    <Flex className="ml-auto mb-auto" style={{ marginTop: "4px", marginRight: "4px" }}>
                                                        <CancelButton size={"small"} onClick={() => remove(field.name)} />
                                                    </Flex>
                                                </Flex>
                                            </Flex>)
                                    }
                                </Flex>
                            </Col>
                        </Row>
                    </Block>
                </Form.Item>
            )}
        </Form.List>
    )
}
const CallImagesBlock = () => {
    return (
        <Form.List name={"images"}>
            {(fields, { add, remove }) => (
                <Form.Item>
                    <ImageInput {...{ fields, add, remove }} />
                </Form.Item>
            )}
        </Form.List>
    )
}

const CallSuspectCivBlock = () => {
    return (
        <Form.List name={"suspectPersons"}>
            {(fields, { add, remove }) => (
                <Form.Item>
                    <Block title={"嫌疑人"}
                        extra={
                            <Button type="dashed" onClick={() => add()} block>
                                添加嫌疑人
                            </Button>
                        }
                    >
                        <Row className="flex-grow" gutter={[0, 12]}>
                            <Col span={24}>
                                <Flex vertical gap={"small"}>
                                    {fields.length == 0 &&
                                        <Flex className="flex-grow">
                                            <ExNote>无嫌疑人信息</ExNote>
                                        </Flex>
                                    }
                                    {fields.map((field) =>
                                        <Card
                                            className="pos-rel"
                                            size="small"
                                            key={field.key}
                                            style={{ paddingRight: "12px" }}
                                        >
                                            <SuspectCivFields index={field.key} />
                                            <Flex className="pos-abs-abut point-off">
                                                <Flex className="ml-auto mb-auto" style={{ marginTop: "4px", marginRight: "4px" }}>
                                                    <CancelButton onClick={() => remove(field.name)} />
                                                </Flex>
                                            </Flex>
                                        </Card>
                                    )}
                                </Flex>
                            </Col>
                        </Row>
                    </Block>
                </Form.Item>
            )}
        </Form.List>
    )
}

const CallSuspectVehicleBlock = () => {
    return (
        <Form.List name={"suspectVehicles"}>
            {(fields, { add, remove }) => (
                <Form.Item>
                    <Block title={"嫌疑车辆"}
                        extra={
                            <Button type="dashed" onClick={() => add()} block>
                                添加嫌疑车辆
                            </Button>
                        }
                    >
                        <Flex vertical gap={"small"}>
                            {fields.length == 0 &&
                                <Flex className="flex-grow">
                                    <ExNote>无嫌疑车辆信息</ExNote>
                                </Flex>
                            }
                            {fields.map((field) =>
                                <Card
                                    className="pos-rel"
                                    size="small"
                                    key={field.key}
                                    style={{ paddingRight: "12px" }}
                                >
                                    <SuspectVehiclesFields index={field.key} />
                                    <Flex className="pos-abs-abut point-off">
                                        <Flex className="ml-auto mb-auto" style={{ marginTop: "4px", marginRight: "4px" }}>
                                            <CancelButton onClick={() => remove(field.name)} />
                                        </Flex>
                                    </Flex>
                                </Card>
                            )}
                        </Flex>
                    </Block>
                </Form.Item>
            )}
        </Form.List>
    )
}