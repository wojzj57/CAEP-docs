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

    useEffect(() => {
        Q()
            .then(() => {
                api.open({
                    message: '13424512111111sssssssssssssssssss11111111111116',
                    placement: "topRight",
                    duration: 5,
                })
            })
            .delay(500)
            .then(() => {
                api.open({
                    message: 1342456,
                    placement: "topRight",
                    duration: 5,
                })
            })
            .delay(500)
            .then(() => {
                api.open({
                    message: 1342456,
                    placement: "topRight",
                    duration: 5,
                })
            })
            .delay(500)
            .then(() => {
                api.open({
                    message: 1342456,
                    placement: "topRight",
                    duration: 5,
                })
            })
            .delay(500)
            .then(() => {
                api.open({
                    message: 1342456,
                    placement: "topRight",
                    duration: 5,
                })
            })
            .delay(500)
            .then(() => {
                api.open({
                    message: 1342456,
                    placement: "topRight",
                    duration: 5,
                })
            })
            .delay(500)
            .then(() => {
                api.open({
                    message: 1342456,
                    placement: "topRight",
                    duration: 5,
                })
            })
            .delay(500)
            .then(() => {
                api.open({
                    message: 1342456,
                    placement: "topRight",
                    duration: 5,
                })
            })
    }, [])


    return (
        <Flex>
            {contextHolder}
        </Flex>
    )
}