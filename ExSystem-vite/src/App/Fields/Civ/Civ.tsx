import { CIV, SuspectCIV } from "@/Types/User"
import { Form, Input, Row, Col, Select } from "antd"
import { DateInputer, InputItem } from "../../Pad/Common/Inputs"
import { CivConst } from "./CivConst"

export const CivField = ({ suspect, index, item }: { suspect?: boolean, index?: number, item: SuspectCIV }) => {
    const placeholder = suspect ? "不详" : undefined;

    return (
        <Row className="flex-grow" gutter={[0, 12]}>
            <Col span={6}>
                <InputItem title={"姓名"}>
                    <Form.Item name={index != undefined ? [index, 'name'] : 'name'}>
                        <Input
                            placeholder={placeholder}
                            defaultValue={item.name}
                        />
                    </Form.Item>
                </InputItem>
            </Col>
            <Col span={3}>
                <InputItem title={"性别"}>
                    <Form.Item name={index != undefined ? [index, 'gender'] : 'gender'}>
                        <Select
                            placeholder={placeholder}
                            defaultValue={item.gender}
                            options={CivConst.GenderOptions}
                        />
                    </Form.Item>
                </InputItem>
            </Col>
            <Col span={3}>
                <InputItem title={"族裔"}>
                    <Form.Item name={index != undefined ? [index, 'race'] : 'race'} >
                        <Select
                            placeholder={placeholder}
                            defaultValue={item.race}
                            options={CivConst.RaceOptions}
                        />
                    </Form.Item>
                </InputItem>
            </Col>
            <Col span={5}>
                <InputItem title={"生日"}>
                    <Form.Item name={index != undefined ? [index, 'birthday'] : 'birthday'} >
                        <DateInputer />
                    </Form.Item>
                </InputItem>
            </Col>
            <Col span={7}>
                <InputItem title={"工作"}>
                    <Form.Item name={index != undefined ? [index, 'job'] : 'job'} >
                        <Input
                            placeholder={placeholder}
                            defaultValue={item.job}
                        />
                    </Form.Item>
                </InputItem>
            </Col>
            <Col span={6}>
                <InputItem title={"电话"}>
                    <Form.Item name={index != undefined ? [index, 'phone'] : 'phone'} >
                        <Input
                            placeholder={placeholder}
                            defaultValue={item.phone}
                        />
                    </Form.Item>
                </InputItem>
            </Col>
            <Col span={3}>
                <InputItem title={"邮编"}>
                    <Form.Item name={index != undefined ? [index, 'postal'] : 'postal'} >
                        <Input
                            placeholder={placeholder}
                            defaultValue={item.postal}
                        />
                    </Form.Item>
                </InputItem>
            </Col>
            <Col span={15}>
                <InputItem title={"住址"}>
                    <Form.Item name={index != undefined ? [index, 'address'] : 'address'} >
                        <Input
                            placeholder={placeholder}
                            defaultValue={item.address}
                        />
                    </Form.Item>
                </InputItem>
            </Col>
        </Row>
    )
}