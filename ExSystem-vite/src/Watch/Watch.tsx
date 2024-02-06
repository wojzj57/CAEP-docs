import { ConfigProvider, App, theme } from "antd"
import { Events, EventsRef } from "./Events/Events"
import { Notification } from "./Notification/Notification";

import "./Watch.less";

export const ExWatch = () => {
    return (
        <ConfigProvider theme={{
            algorithm: theme.darkAlgorithm,
        }}>
            <App className="ex-face">
                <Events ref={EventsRef} />
                <Notification />
            </App>
        </ConfigProvider >
    )
}