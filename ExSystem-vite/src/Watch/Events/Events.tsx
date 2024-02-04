import "./Events.less"

import { createRef, forwardRef, useImperativeHandle } from "react";
import { Flex, notification } from "antd";
import { EventCard, EventRef } from "./EventCard";
import { ExEvent } from "@/Types/Event";
import { eventManager } from "./EventManager";


export const EventsRef = createRef<{
    open: (event: ExEvent, ref: React.RefObject<EventRef>) => void;
    destroy: (event: ExEvent | string) => void;
}>()
export const Events = forwardRef((props, ref) => {
    const [api, contextHolder] = notification.useNotification({ prefixCls: "ex-event" });
    const manager = eventManager

    const open = (event: ExEvent, ref: React.RefObject<EventRef>) => {
        api.open({
            message: <EventCard ref={ref} initEvent={event} />,
            placement: "top",
            duration: 0,
            key: event.id
        })
    }

    const destroy = (event: ExEvent | string) => {
        api.destroy(typeof event === "string" ? event : event.id)
    }

    useImperativeHandle(ref, () => ({
        open,
        destroy
    }))


    return (
        <Flex>
            {contextHolder}
        </Flex>
    )
})