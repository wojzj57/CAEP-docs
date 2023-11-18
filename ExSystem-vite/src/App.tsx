import { ConfigProvider, App, theme } from "antd"

import "./App.less";

import { Events } from "./Events/Events"
import { Notification } from "./Notification/Notification";

export const ExApp = () => {

    return (
        <ConfigProvider theme={{
            algorithm: theme.darkAlgorithm,
        }}>
            <App className="ex-face">
                <Events />
                <Notification />
            </App>
        </ConfigProvider >
    )
}