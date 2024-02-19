import { Row, Col, Form, Input, Select, Flex, Typography } from "antd";
import { InputItem, DateInput, SingleTagInput } from "@/App/Pad/Common/Inputs";
import { SuspectVehicle } from "@/Types/Vehicle";
import { VehicleConst } from "./VehicleConst";

export const SuspectVehiclesFields = ({ index }: { index: number }) => {
    const placeholder = "不详";
    return (
        <Row className="flex-grow" gutter={[0, 12]}>
            <Col span={4}>
                <InputItem title={"车牌"}>
                    <Form.Item name={[index, "plate"]}>
                        <Input placeholder={placeholder} />
                    </Form.Item>
                </InputItem>
            </Col>
            <Col span={3}>
                <InputItem title={"车型"}>
                    <Form.Item name={[index, "type"]}>
                        <Select placeholder={placeholder} options={VehicleConst.TypeOptions} />
                    </Form.Item>
                </InputItem>
            </Col>
            <Col span={3}>
                <InputItem title={"颜色"}>
                    <Form.Item name={[index, "color"]}>
                        <Select placeholder={placeholder}
                            optionRender={(item) =>
                                <Flex
                                    className="ex-size"
                                    gap={"small"}
                                    style={{ height: "var(--size-400)" }}
                                >
                                    {/* @ts-ignore */}
                                    <div className="flex my-auto" style={{ backgroundColor: item.value, width: "16px", height: "16px" }}></div>
                                    <Typography.Text className="my-auto">{item.label}</Typography.Text>
                                </Flex>
                            }
                            options={VehicleConst.ColorOptions} />
                    </Form.Item>
                </InputItem>
            </Col>
            <Col span={3}>
                <InputItem title={"状态"}>
                    <Form.Item name={[index, "status"]}>
                        <Select placeholder={placeholder} options={VehicleConst.StatusOptions} />
                    </Form.Item>
                </InputItem>
            </Col>
            <Col span={4}>
                <InputItem title={"生产商"}>
                    <Form.Item name={[index, "manufacturer"]}>
                        <SingleTagInput options={VehicleConst.ManufacturerOptions} />
                    </Form.Item>
                </InputItem>
            </Col>
            <Col span={4}>
                <InputItem title={"车型"}>
                    <Form.Item name={[index, "model"]}>
                        <Input placeholder={placeholder} />
                    </Form.Item>
                </InputItem>
            </Col>
            <Col span={3}>
                <InputItem title={"年份"}>
                    <Form.Item name={[index, "year"]}>
                        <Input placeholder={placeholder} />
                    </Form.Item>
                </InputItem>
            </Col>
        </Row>
    )
}