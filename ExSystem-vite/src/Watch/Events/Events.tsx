import { useEffect } from "react";
import { Button, Flex, notification, Tooltip } from "antd";

import "./Events.less"

import { EventCard } from "./EventCard";
import Q from "q";

export namespace EmergencyEvent {
    export type Event = {

    }
}

export const Events = () => {
    const [api, contextHolder] = notification.useNotification({ prefixCls: "ex-event" });

    useEffect(() => {
        Q()
            .then(() => {
                api.open({
                    message: <EventCard e={{
                        id: "1",
                        status: "pending",

                        //
                        postal: "271",
                        location: { x: 0, y: 0 },
                        time: { hour: 5, minute: 0, second: 0 },

                        //
                        type: "211S",
                        desc: "发现、发生案件的时间、地点；现场的原始状态；有无采取措施；犯罪分子或可疑人员的人数、特点、作案工具、相关的车辆情况（颜色、车型、牌号等）、携带物品和逃跑的方向等等 发现、发生案件的时间、地点；现场的原始状态；有无采取措施；犯罪分子或可疑人员的人数、特点、作案工具、相关的车辆情况（颜色、车型、牌号等）、携带物品和逃跑的方向等等    发现、发生案件的时间、地点；现场的原始状态；有无采取措施；犯罪分子或可疑人员的人数、特点、作案工具、相关的车辆情况（颜色、车型、牌号等）、携带物品和逃跑的方向等等"
                    }} />,
                    placement: "top",
                    duration: 0,
                    key: "1"
                })
            })
    }, [])


    return (
        <Flex>
            {contextHolder}
        </Flex>
    )
}