import { useEffect } from "react";
import { Flex, notification } from "antd";
import Q from "q";

import "./Notification.less"

export const Notification = () => {
    const [api, contextHolder] = notification.useNotification({
        prefixCls: "ex-notification", stack: {
            threshold: 6
        }
    });


    return (
        <Flex>
            {contextHolder}
        </Flex>
    )
}