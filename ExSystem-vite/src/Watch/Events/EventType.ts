
export type ExEvent = {
    //#region 案件状态和类型
    // 案件ID
    id: string;
    // 案件状态
    status: EventStatus;
    // 案件类型
    class: EventClass;
    //#endregion

    //#region 案件发生信息
    // 发生邮编
    postal: string;
    // 发生地址
    location: Location;
    // 发生时间
    time: Time;
    //#endregion


    //#region 案件描述
    // 案件类型
    type: string;
    // 案件描述
    desc: string;
    notes: string[];
    //#endregion
};

type Location = { x: number; y: number };
type Time = { hour: number; minute: number; second: number };

export type EventClass =
    | "police"
    | "fire"
    | "medical"
    | "traffic"
    | "other"
    | "emergency";

export type EventStatus =
    | "pending"
    | "routing"
    | "progressing"
    | "completed"
    | "cancelled"
    | "emergency";

export const EventStatusMap = {
    pending: "等待",
    routing: "在途",
    progressing: "进行",
    completed: "完成",
    cancelled: "取消",
    emergency: "紧急",
}

type VehicleUnit = {};
type PdUnit = {
    id: string;
    officer: Officer[];
};
type FdUnit = {
    id: string;
    officer: Officer[];
};
type Officer = {
    id: string;
    name: string;
};
