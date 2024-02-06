import { Button, Card, Checkbox, Col, Flex, Form, FormInstance, Input, Modal, Row, Select, Space } from "antd"
import { CloseOutlined } from '@ant-design/icons';
import { ExEvent } from "@/Types/Event"
import { InputItem } from "../Common/Inputs"
import { useState } from "react"
import { CallConst } from "./EmergencyCallConst"


import { testEvent } from "@/Dev/Test"
import { Block } from "../Common/Block"

export const EmergencyCallModal = () => {
    return (
        <Modal className="ex-modal"
            open
            centered
            mask={false}
            title={"创建呼叫"}
        >
            <EmergencyCall event={testEvent} />
        </Modal >
    )
}

export namespace EmergencyCallSpace {

}

export const EmergencyCall = ({ event }: { event: ExEvent }) => {
    const [state, setState] = useState(false);
    const [form] = Form.useForm<ExEvent>();

    return (
        <Flex className="flex-grow pos-rel">
            <Flex className="pos-abs-abut overflow-auto">
                <Flex vertical>
                    <Form
                        form={form}
                        initialValues={event}

                        className="ex-form"
                        layout={"inline"}

                        // onFinish={onFinish}
                        // onFinishFailed={onFinishFailed}
                        autoComplete="off"
                        requiredMark={false}
                    >
                        <Flex vertical gap={"small"} className="flex-grow">
                            <CallInfoBlock {...{ form, event }} />
                            <CallSuspectBlock {...{ form, event }} />
                        </Flex>
                    </Form>
                </Flex>
            </Flex>
        </Flex>
    )
}

const CallInfoBlock = ({ form, event }: { form: FormInstance<ExEvent>, event: ExEvent }) => {
    return (
        <Block title={"呼叫信息"} >
            <Row className="flex-grow" gutter={[0, 12]}>
                <Col span={6}>
                    <InputItem title={"呼叫类型"}>
                        <Form.Item<ExEvent>
                            name="class"
                        >
                            <Select
                                defaultValue={event.class}
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
                            <Select
                                mode="tags"
                                onChange={(value: string[]) => {
                                    if (value.length == 0)
                                        form.setFieldValue("type", undefined)
                                    if (value.length == 1)
                                        form.setFieldValue("type", value[0])
                                    if (value.length >= 2)
                                        form.setFieldValue("type", value[1])
                                }}
                                options={[{ label: "1", value: "1" }, { label: "2", value: "2" }]}
                            />
                        </Form.Item>
                    </InputItem>
                </Col>
                <Col span={12}>
                    <InputItem title={"呼叫位置"}>
                        <Form.Item<ExEvent>
                            name="postal"
                        >
                            <Space.Compact className="flex flex-grow">
                                <Input defaultValue={event.postal} />
                                <Button style={{ paddingLeft: "4px", paddingRight: "4px" }} type="primary">{
                                    <svg className="flex my-auto ex-color" style={{ fill: "var(--gray-700)", height: 16, width: 16, marginRight: "2px" }} viewBox="0 0 18 18" >
                                        <path className="fill" d="M9,.9625a6,6,0,0,0-6,6c0,3.3135,6,10.875,6,10.875s6-7.5615,6-10.875A6,6,0,0,0,9,.9625ZM9,9.325A2.325,2.325,0,1,1,11.325,7,2.325,2.325,0,0,1,9,9.325Z" />
                                    </svg>
                                }</Button>
                            </Space.Compact>
                        </Form.Item>
                    </InputItem>
                </Col>
                <Col span={24}>
                    <InputItem title={"呼叫标题"}>
                        <Form.Item<ExEvent>
                            name="title"
                        >
                            <Input defaultValue={event.title} />
                        </Form.Item>
                    </InputItem>
                </Col>
                <Col span={24}>
                    <InputItem title={"呼叫内容"}>
                        <Form.Item<ExEvent>
                            name="desc"
                        >
                            <Input.TextArea defaultValue={event.desc} autoSize={{ minRows: 4 }} />
                        </Form.Item>
                    </InputItem>
                </Col>
            </Row>
        </Block>
    )
}

const CallSuspectBlock = ({ form, event }: { form: FormInstance<ExEvent>, event: ExEvent }) => {
    return (
        <Block title={"嫌疑信息"} >
            <Row className="flex-grow" gutter={[0, 12]}>
                <Col span={24}>
                    <InputItem title={"嫌疑人"}>
                        <Form.List name={"suspectPersons"}>
                            {(fields, { add, remove }) => (
                                <Flex vertical gap={"small"}>
                                    {fields.map((field) => {
                                        console.log(field)
                                        return (<Card
                                            size="small"
                                            key={field.key}
                                        // extra={
                                        //     <CloseOutlined
                                        //         onClick={() => {
                                        //             remove(field.name);
                                        //         }}
                                        //     />
                                        // }
                                        >
                                            <Form.Item label="Name" name={[field.name, 'name']}>
                                                <Input />
                                            </Form.Item>
                                        </Card>)
                                    }
                                    )}
                                    <Button type="dashed" onClick={() => add()} block>
                                        + Add Item
                                    </Button>
                                </Flex>
                            )}
                        </Form.List>
                    </InputItem>
                </Col>
                <Col span={24}>
                    <InputItem title={"嫌疑车辆"}>
                        <Form.Item<ExEvent>
                            name="class"
                        >
                            <Select
                                defaultValue={event.class}
                                options={CallConst.ClassOptions}
                            />
                        </Form.Item>
                    </InputItem>
                </Col>
            </Row>
        </Block>
    )
}

