import { Location, Time } from "./Common";
import { CIV } from "./User";
import { Vehicle } from "./Vehicle";

export namespace ExEvent {
    export type Class =
        | "police"
        | "fire"
        | "medical"
        | "traffic"
        | "other"
        | "emergency";

    export type Status =
        | "pending"
        | "routing"
        | "progressing"
        | "completed"
        | "cancelled"
        | "emergency";

    export const StatusMap = {
        pending: "等待",
        routing: "在途",
        progressing: "进行",
        completed: "完成",
        cancelled: "取消",
        emergency: "紧急",
    };
}

export type ExEvent = {
    //#region 案件状态和类型
    // 案件ID
    id: string;
    // 案件状态
    status: ExEvent.Status;
    // 案件类型
    class: ExEvent.Class;
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

    //#region 案件车辆和人员
    involvedVehicles: Vehicle[];
    involvedPersons: CIV[];
    //#endregion
};
