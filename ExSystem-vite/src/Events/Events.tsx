import { useEffect } from "react";
import { Flex, notification } from "antd";

import "./Events.less"

import { EventCard } from "./EventCard";
import Q from "q";

export namespace EmergencyEvent {
    export type Event = {

    }
}

export const Events = () => {
    const [api, contextHolder] = notification.useNotification({ prefixCls: "ex-event", maxCount: 4 });

    useEffect(() => {
        Q()
            .then(() => {
                api.open({
                    message: <EventCard />,
                    placement: "top",
                    duration: 0,
                })
            })
            // .delay(1500)
            // .then(() => {
            //     api.open({
            //         message: <EventCard />,
            //         placement: "top",
            //         duration: 0,
            //     })
            // })
            // .delay(1500)
            // .then(() => {
            //     api.open({
            //         message: <EventCard />,
            //         placement: "top",
            //         duration: 0,
            //     })
            // })
           
    }, [])


    return (
        <Flex>
            {contextHolder}
        </Flex>
    )
}