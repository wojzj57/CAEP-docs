import { Button, Checkbox, Flex, Form, Input, Modal, Select, Space } from "antd"
import { ExEvent } from "@/Types/Event"
import { InputItem } from "../Common/Inputs"
import { useState } from "react"
import { CallConst } from "./EmergencyCallConst"


import { testEvent } from "@/Dev/Test"

export namespace EmergencyCallSpace {

}

export const EmergencyCall = ({ event }: { event: ExEvent }) => {
    const [state, setState] = useState(false);
    const [form] = Form.useForm();

    // const CallClassOptions = []
    // Object.keys(ExEvent.ClassStringMap).forEach((key: any) => {
    //     //@ts-ignore
    //     CallClassOptions.push({ label: ExEvent.ClassStringMap[key], value: key })
    // })

    return (
        <Flex vertical className={"flex-grow"}>
            <Form
                form={form}
                initialValues={event}

                className="ex-form"
                layout={"inline"}

                // onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Flex className="flex-grow" vertical gap={"middle"}>
                    <Flex className="flex-grow">
                        <InputItem title={"呼叫类型"}>
                            <Form.Item<ExEvent>
                                name="class"
                            >
                                <Select
                                    value={event.class}
                                    options={CallConst.ClassOptions}
                                />
                            </Form.Item>
                        </InputItem>
                        <InputItem title={"呼叫类型"}>
                            <Form.Item<ExEvent>
                                name="type"
                            >
                                <Select
                                    mode="tags"
                                    placeholder="Tags Mode"
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
                        <InputItem title={"呼叫位置"}>
                            <Form.Item<ExEvent>
                                name="postal"
                                wrapperCol={{ span: 12 }}
                            >
                                <Space.Compact>
                                    <Input defaultValue={event.postal} />
                                    <Button style={{ paddingLeft: "4px", paddingRight: "4px" }} type="primary">{
                                        <svg className="flex my-auto ex-color" style={{ fill: "var(--gray-700)", height: 16, width: 16, marginRight: "2px" }} viewBox="0 0 18 18" >
                                            <path className="fill" d="M9,.9625a6,6,0,0,0-6,6c0,3.3135,6,10.875,6,10.875s6-7.5615,6-10.875A6,6,0,0,0,9,.9625ZM9,9.325A2.325,2.325,0,1,1,11.325,7,2.325,2.325,0,0,1,9,9.325Z" />
                                        </svg>
                                    }</Button>
                                </Space.Compact>
                            </Form.Item>
                        </InputItem>
                    </Flex>
                    <Flex className="flex-grow">
                        13
                    </Flex>
                </Flex>
            </Form>
        </Flex>
    )
}

export const EmergencyCallModal = () => {
    return (
        <Modal open centered title={"创建呼叫"}>
            <EmergencyCall event={testEvent} />
        </Modal>
    )
}