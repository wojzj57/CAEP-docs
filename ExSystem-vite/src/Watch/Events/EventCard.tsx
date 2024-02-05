import React, { forwardRef, useImperativeHandle, ReactElement, ReactNode, useEffect, useState, useContext } from "react";
import { Button, ConfigProvider, Dropdown, Flex, Tooltip, Typography, theme, Select, Space } from "antd";
import { EventPerson, EventVehicle } from "./utils/EventUilts";
import { motion } from "framer-motion";
import { ExEvent } from "@/Types/Event";
import { eventsContext } from "./Events";
import { ExEventBulk, eventManager } from "./EventManager";

export type EventRef = {
    update: (event: ExEventBulk) => void;
}
export const EventCard = forwardRef<EventRef, { initEvent: ExEventBulk }>(({ initEvent }, ref) => {
    const [event, setEvent] = useState<ExEventBulk>(initEvent);
    const [state, setState] = useState<boolean>(false);

    const update = (event: ExEventBulk) => {
        setState(!state);
    }

    useImperativeHandle(ref, () => ({
        update,
    }));

    return (
        <Flex className="pos-rel flex-grow">
            <div className={`pos-abs event-card-background event-${event.class}`}>
            </div>
            <Flex className="flex-grow" vertical gap={"4px"}>
                <EventNav event={event} />
                <EventMessage event={event} />
                <EventInfo event={event} />
            </Flex>
        </Flex>
    )
})

const EventNav = ({ event }: { event: ExEventBulk }) => {
    return (
        <Flex gap={"small"} className={"flex-grow"}>
            <Tooltip title={`导航到${event.postal}`} placement={"left"} >
                <Button type="text" className="pos-rel ex-size overflow-hide" style={{
                    paddingLeft: "var(--size-75)",
                    paddingRight: "var(--size-100)"
                }}>
                    <div className="pos-abs pos-abut point-through" style={{ backgroundColor: "#ffffffbb" }} />
                    <Flex>
                        <svg className="flex my-auto ex-color" style={{ fill: "var(--gray-50)", height: 16, width: 16, marginRight: "2px" }} viewBox="0 0 18 18" >
                            <rect id="Canvas" fill="#ff13dc" opacity="0" width="18" height="18" />
                            <path className="fill" d="M9,.9625a6,6,0,0,0-6,6c0,3.3135,6,10.875,6,10.875s6-7.5615,6-10.875A6,6,0,0,0,9,.9625ZM9,9.325A2.325,2.325,0,1,1,11.325,7,2.325,2.325,0,0,1,9,9.325Z" />
                        </svg>
                        <Typography.Text
                            strong
                            className="my-auto ex-color"
                            style={{ color: "var(--gray-50)" }}
                        >
                            {event.postal}
                        </Typography.Text>
                    </Flex>
                </Button>
            </Tooltip>
            <Typography.Text
                strong
                className="my-auto"
            >
                {event.type}
            </Typography.Text>
            <Flex className="ml-auto flex-grow" gap={"small"}>
                <Flex className="flex-grow" gap={"small"} style={{ overflow: "hidden" }}>
                    <Flex className="ml-auto my-auto">
                        {event.suspectPersons.map((person, index) =>
                            <EventPerson key={index} person={person} />
                        )}
                    </Flex>
                    <Flex className="my-auto">
                        {event.suspectVehicles.map((vehicle, index) =>
                            <EventVehicle key={index} vehicle={vehicle} />
                        )}
                    </Flex>
                </Flex>
                <Flex className="ml-auto my-auto" style={{ minWidth: "48px" }}>
                    <Typography.Text>
                        {event.time.hour.toString().padStart(2, '0')}:{event.time.minute.toString().padStart(2, '0')}
                    </Typography.Text>
                </Flex>
            </Flex>
        </Flex>
    )
}

const EventMessage = ({ event }: { event: ExEventBulk }) => {
    return (
        <Flex>
            <Typography.Paragraph className="ex-line" ellipsis={{ rows: 3 }} style={{ marginBottom: "0px" }}>
                <Typography.Text className="ex-text event-message">
                    {event.desc}
                </Typography.Text>
            </Typography.Paragraph>
        </Flex>
    )
}

const EventInfo = ({ event }: { event: ExEventBulk }) => {
    const [state, setState] = useState<boolean>(false);
    const eventContext = useContext(eventsContext);

    const eventHandler = (key: ExEvent.Status) => {
        if (event.status != key) event.status = key;
        event.setDatas({ status: key });
    }
    const backupHandler = (key: string) => {
        console.log(key)
        setState(!state);
    }

    const responseHandler = () => {
        if (eventContext.responseID == event.id) {
            eventManager.response();
        }
        else {
            eventManager.response(event.id);
        }
        setState(!state);
    }

    const unitStatusHandler = (key: ExEvent.Status) => {
        console.log(key)
    }

    return (
        <Flex className="flex-grow pos-rel" gap={"small"} style={{ height: "32px", maxWidth: "100%" }}>
            <Flex className="flex-grow pos-rel">
                <div className="pos-abs-abut flex">
                    <Typography.Paragraph type="secondary" style={{ maxWidth: '100%', marginTop: "auto", marginBottom: "auto" }}
                        ellipsis={{ rows: 1 }}
                    >
                        {event.notes[0]}
                    </Typography.Paragraph >
                </div>
            </Flex>
            <Flex className="ml-auto my-auto" gap={"small"}>
                <div
                    className="flex"
                    style={{
                        padding: "0px 8px",
                        borderRadius: "4px",
                        borderStyle: "solid",
                        borderColor: "#FFFFFFBB",
                        borderWidth: "2px",
                    }}
                >
                    <Flex gap={"4px"}>
                        <svg className="flex my-auto" width="16" height="15" viewBox="0 0 16 15" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z" />
                        </svg>
                        <Typography.Title level={4} className="flex my-auto" style={{ margin: "0px" }}>
                            6
                        </Typography.Title>
                    </Flex>
                </div>
                <div
                    className="flex"
                    style={{
                        padding: "0px 8px",
                        borderRadius: "4px",
                        borderStyle: "solid",
                        borderColor: "#FFFFFFBB",
                        borderWidth: "2px",
                    }}
                >
                    <Flex gap={"4px"}>
                        <svg className="flex my-auto" width="14" height="14" viewBox="0 0 14 14" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M9 0H5V5H0V9H5V14H9V9H14V5H9V0Z" />
                        </svg>
                        <Typography.Title level={4} className="flex my-auto" style={{ margin: "0px" }}>
                            6
                        </Typography.Title>
                    </Flex>
                </div>
            </Flex>
            <Flex className="my-auto">
                <Flex style={{ padding: "6px 16px" }}>
                    <Space>
                        {ExEvent.StatusStringMap[event.status]}
                    </Space>
                </Flex>
            </Flex>
            <motion.div
                className="flex pos-abs-abut"
                style={{
                    zIndex: 9900,
                    opacity: 0,
                }}
                whileHover={{
                    opacity: 1,
                }}>
                <Flex className="ml-auto pos-rel" gap={"small"}>
                    <Button
                        className="ex-color"
                        style={{ backgroundColor: "var(--gray-200)" }}
                        type={"text"}
                        disabled={!eventContext.unit}
                    >
                        <Space>
                            {"编辑"}
                        </Space>
                    </Button>
                    {/* 单位状态 */}
                    <Dropdown.Button
                        type={"primary"}
                        danger={eventContext.responseID == event.id}
                        disabled={!eventContext.unit}
                        onClick={responseHandler}
                        trigger={["click"]}
                        menu={{
                            mode: "vertical",
                            disabled: !eventContext.unit || eventContext.unit.responceID != event.id,
                            items:
                                [
                                    {
                                        key: 'onroute',
                                        label: '在途',
                                    },
                                    {
                                        key: 'onscene',
                                        label: '到场',
                                    },
                                    {
                                        key: 'onbusy',
                                        label: '进行',
                                    },
                                    {
                                        type: "divider",
                                    },
                                    {
                                        key: 'emergency',
                                        label: '紧急',
                                        danger: true,
                                    },
                                ],
                            onClick: (e) => { unitStatusHandler(e.key as ExEvent.Status) },
                        }}>
                        {eventContext.responseID == event.id ? "取消" : "响应"}
                    </Dropdown.Button>
                    {/* 案件状态 */}
                    <Dropdown
                        trigger={["click"]}
                        disabled={!eventContext.unit}
                        menu={{
                            items: [
                                {
                                    type: "group",
                                    key: 'event',
                                    label: '案件状态',
                                    children: [
                                        {
                                            key: 'event-pending',
                                            label: '等待',
                                        },
                                        {
                                            key: 'event-progressing',
                                            label: '进行',
                                        },
                                        {
                                            key: 'event-closed',
                                            label: '完成',
                                        },
                                        {
                                            key: 'event-emergency',
                                            label: '紧急',
                                            danger: true,
                                        },
                                    ]
                                },
                                {
                                    type: "group",
                                    key: 'backup',
                                    label: '增援',
                                    children: [
                                        {
                                            key: 'backup-unit',
                                            label: '一个增援',
                                        },
                                        {
                                            key: 'backup-units',
                                            label: '多个增援',
                                        },
                                        {
                                            key: 'backup-medic',
                                            label: '医疗增援',
                                        },
                                        {
                                            key: 'backup-fd',
                                            label: '消防增援',
                                        },
                                    ]
                                },
                            ],
                            onClick: (e) => {
                                if (e.key.startsWith("event-")) eventHandler(e.key.slice(6) as ExEvent.Status)
                                if (e.key.startsWith("backup-")) backupHandler(e.key.slice(7))
                            },
                        }}>
                        <Button
                            className="ex-color"
                            style={{ backgroundColor: "var(--green-600)" }}
                            type={"text"}
                        >
                            <Space>
                                {ExEvent.StatusStringMap[event.status]}
                            </Space>
                        </Button>
                    </Dropdown>
                </Flex>
            </motion.div >
        </Flex >
    )
}

