import React, { ReactElement, ReactNode, useEffect, useState } from "react";
import { Button, ConfigProvider, Dropdown, Flex, Tooltip, Typography, theme, Select, Space } from "antd";
import { EventVehicle } from "./EventUilts";
import { motion } from "framer-motion";

import { DownOutlined } from '@ant-design/icons';

export const EventCard = () => {
    return (
        <Flex className="pos-rel flex-grow">
            <div className="pos-abs event-card-background">
            </div>
            <Flex className="flex-grow" vertical gap={"4px"}>
                <EventNav />
                <EventMessage />
                <EventInfo />
            </Flex>
        </Flex>
    )
}

const EventNav = () => {
    return (
        <Flex gap={"small"} className={"flex-grow"}>
            <Tooltip title={`导航到${207}`} placement={"left"} >
                <Button type="text" className="pos-rel ex-size overflow-hide" style={{
                    paddingLeft: "var(--size-75)",
                    paddingRight: "var(--size-100)"
                }}>
                    <div className="pos-abs pos-abut point-through" style={{ backgroundColor: "#ffffffbb" }} />
                    <Flex>
                        <svg className="flex my-auto ex-color" style={{ fill: "var(--gray-50", height: 16, width: 16, marginRight: "2px" }} viewBox="0 0 18 18" >
                            <rect id="Canvas" fill="#ff13dc" opacity="0" width="18" height="18" />
                            <path className="fill" d="M9,.9625a6,6,0,0,0-6,6c0,3.3135,6,10.875,6,10.875s6-7.5615,6-10.875A6,6,0,0,0,9,.9625ZM9,9.325A2.325,2.325,0,1,1,11.325,7,2.325,2.325,0,0,1,9,9.325Z" />
                        </svg>
                        <Typography.Text
                            strong
                            className="my-auto ex-color"
                            style={{ color: "var(--gray-50)" }}
                        >
                            207
                        </Typography.Text>
                    </Flex>
                </Button>
            </Tooltip>

            <Typography.Text
                strong
                className="my-auto"
            >
                211S 无声警报
            </Typography.Text>
            <Flex className="ml-auto my-auto">
                <EventVehicle />
                <EventVehicle />
                <EventVehicle />
            </Flex>
            <Flex>
                <Typography.Text
                    className="my-auto"
                >
                    20:08
                </Typography.Text>
            </Flex>
        </Flex>
    )
}

const EventMessage = () => {
    return (
        <Flex>
            <Typography.Paragraph className="ex-line" ellipsis={{ rows: 3 }} style={{ marginBottom: "0px" }}>
                <Typography.Text className="ex-text event-message">
                    发现、发生案件的时间、地点；现场的原始状态；有无采取措施；犯罪分子或可疑人员的人数、特点、作案工具、相关的车辆情况（颜色、车型、牌号等）、携带物品和逃跑的方向等等
                    发现、发生案件的时间、地点；现场的原始状态；有无采取措施；犯罪分子或可疑人员的人数、特点、作案工具、相关的车辆情况（颜色、车型、牌号等）、携带物品和逃跑的方向等等
                    发现、发生案件的时间、地点；现场的原始状态；有无采取措施；犯罪分子或可疑人员的人数、特点、作案工具、相关的车辆情况（颜色、车型、牌号等）、携带物品和逃跑的方向等等
                </Typography.Text>
            </Typography.Paragraph>
        </Flex>
    )
}

const EventInfo = () => {
    const ref = React.createRef()
    const [openFlag, setOpenFlag] = useState<Boolean>(false);

    return (
        <Flex className="flex-grow pos-rel" style={{ height: "32px" }}>
            <Flex>
                123
            </Flex>
            <motion.div
                className="flex pos-abs-abut"
                style={{
                    zIndex: 9900,
                    opacity: openFlag ? 1 : 0,
                }}
                whileHover={{
                    opacity: 1,
                }}>
                <Flex className="ml-auto pos-rel" gap={"small"}>
                    <Dropdown
                        trigger={["click"]}
                        menu={{
                            items: [
                                {
                                    key: '1',
                                    label: '1st item',
                                },
                                {
                                    type: "divider",
                                },
                                {
                                    key: '2',
                                    label: '2nd item',
                                },
                                {
                                    key: '3',
                                    label: '3rd item',
                                },
                            ],
                            onClick: (e) => { console.log('e', e, 123) },
                            onOpenChange: (e) => { console.log('e', e, 123) },
                        }}>
                        <Button className="ex-color" style={{ backgroundColor: "var(--green-600)" }} type={"text"}>
                            <Space>
                                Button
                                <DownOutlined />
                            </Space>
                        </Button>
                    </Dropdown>
                    <Dropdown.Button
                        type={"primary"}
                        onClick={(e) => { console.log(e) }}
                        trigger={["click"]}
                        buttonsRender={(buttons: any[]) => {
                            return [
                                buttons[0],
                                <Flex id="test">
                                    {React.cloneElement(buttons[1], { ref: ref })}
                                </Flex>
                            ]
                        }}
                        menu={{
                            mode: "vertical",
                            overflowedIndicator:<></>,
                            items:
                                [
                                    {
                                        key: '1',
                                        label: '1st item',
                                    },
                                    {
                                        type: "divider",
                                    },
                                    {
                                        key: '2',
                                        label: '2nd item',
                                    },
                                    {
                                        key: '3',
                                        label: '3rd item',
                                    },
                                ],
                            onClick: (e) => { console.log('e', e, 123) },
                            onSelect: (e) => { console.log('e', e, 123) },
                            onOpenChange: (e) => { console.log('e', e, 123) },
                        }}>
                        响应
                    </Dropdown.Button>
                </Flex>
            </motion.div >
        </Flex >
    )
}