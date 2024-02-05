import { Flex, notification } from "antd";

import "./Notification.less"
import { exNotification } from "./NotificationManager";
import { useEffect } from "react";

export const Notification = () => {
    const [api, contextHolder] = notification.useNotification({
        prefixCls: "ex-notification", stack: {
            threshold: 6
        }
    });
    useEffect(() => {
        exNotification.api = api;
    }, [api]);

    return (
        <Flex>
            {contextHolder}
        </Flex>
    )
}