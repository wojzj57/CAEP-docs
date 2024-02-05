import { NotificationInstance } from "antd/es/notification/interface";
import Q from "q";

type ExNotificationSetup = {
    duration?: number;
};
export class ExNotification {
    declare api?: NotificationInstance;

    public info(message: string, setups?: ExNotificationSetup) {
        setups = setups || {};
        setups.duration = setups.duration === undefined ? 3 : setups.duration;
        this.api?.open({
            message,
            duration: setups.duration,
            className: "ex-notification-info",
        });
    }

    public success(message: string, setups?: ExNotificationSetup) {
        setups = setups || {};
        setups.duration = setups.duration === undefined ? 3 : setups.duration;
        this.api?.open({
            message,
            duration: setups.duration,
            className: "ex-notification-success",
        });
    }

    public error(message: string, setups?: ExNotificationSetup) {
        setups = setups || {};
        setups.duration = setups.duration === undefined ? 3 : setups.duration;
        this.api?.open({
            message,
            duration: setups.duration,
            className: "ex-notification-error",
        });
    }

    public warning(message: string, setups?: ExNotificationSetup) {
        setups = setups || {};
        setups.duration = setups.duration === undefined ? 3 : setups.duration;
        this.api?.open({
            message,
            duration: setups.duration,
            className: "ex-notification-warning",
        });
    }

    public server(message: string, setups?: ExNotificationSetup) {
        setups = setups || {};
        setups.duration = setups.duration === undefined ? 3 : setups.duration;
        this.api?.open({
            message,
            duration: setups.duration,
            className: "ex-notification-server",
        });
    }
}
export const exNotification = new ExNotification();

Q.delay(1000).then(() => {
    exNotification.info("测试通知");
});
Q.delay(2000).then(() => {
    exNotification.warning("123");
});
Q.delay(2500).then(() => {
    exNotification.server("123");
});