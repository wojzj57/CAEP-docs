import "./Events.less"

import { createContext, createRef, forwardRef, useImperativeHandle, useState } from "react";
import { Flex, notification } from "antd";
import { EventCard, EventRef } from "./EventCard";
import { ExEventBulk, eventManager } from "./EventManager";
import { Unit } from "@/Types/Unit";


const manager = eventManager;

type EventsContext = {
    unit?: Unit
    responseID?: string
}
export const eventsContext = createContext<EventsContext>({});
export const EventsRef = createRef<{
    open: (event: ExEventBulk, ref: React.RefObject<EventRef>) => void;
    destroy: (event: ExEventBulk | string) => void;
    response: (id?: string) => void;
}>()
export const Events = forwardRef((props, ref) => {
    const [api, contextHolder] = notification.useNotification({ prefixCls: "ex-event" });
    const [state, setState] = useState(false);

    const [currentID, setResponseID] = useState<string | undefined>(manager.unit?.responceID);

    const response = (id: string) => {
        setResponseID(id);
        setState(!state)
    }

    const open = (event: ExEventBulk, ref: React.RefObject<EventRef>) => {
        api.open({
            message: <EventCard ref={ref} initEvent={event} />,
            placement: "top",
            duration: 0,
            key: event.id
        })
    }

    const destroy = (event: ExEventBulk | string) => {
        api.destroy(typeof event === "string" ? event : event.id)
    }

    useImperativeHandle(ref, () => ({
        open,
        destroy,
        response
    }))


    return (
        <Flex>
            <eventsContext.Provider value={{
                unit: manager.unit,
                responseID: currentID
            }}>
                {contextHolder}
            </eventsContext.Provider>
        </Flex>
    )
})