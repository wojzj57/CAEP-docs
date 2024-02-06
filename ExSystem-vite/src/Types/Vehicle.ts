import { ExID } from "./Common";

export type Vehicle = {
    id: ExID;
    class: Vehicle.Class;

    plate: string;
    owner: ExID;
    status: Vehicle.Status;

    //#region 车辆细节
    type: Vehicle.Type;
    manufacturer: string;
    color: string;
    year?: string;
    model?: string;
    //#endregion

    //#region 车辆图片
    image?: string | string[];
    //#endregion
};
export type SuspectVehicle = {
    id: ExID;
    class: Vehicle.Class | "unknown";

    plate: string | "unknown";
    owner?: ExID;
    status: Vehicle.Status | "unknown";

    //#region 车辆细节
    type: Vehicle.Type | "unknown";
    manufacturer: string;
    color: string;
    year?: string;
    model?: string;
    //#endregion

    //#region 车辆图片
    image?: string | string[];
    //#endregion
};


export namespace Vehicle {
    export type Class = "civ" | "pd" | "fd" | "gov" | "mil" | "unkonwn";

    export type Status =
        | "valid"
        | "expired"
        | "suspended"
        | "unregistered"
        | "stolen";

    export type Type =
        | "commercials"
        | "compacts"
        | "coupes"
        | "emergency"
        | "industrial"
        | "military"
        | "motorcycles"
        | "offroad"
        | "suv"
        | "sedan"
        | "service"
        | "sport"
        | "trailer"
        | "utility"
        | "van";

    export const TypeStringMap = {
        commercials: "商用",
        compacts: "紧凑",
        coupes: "轿跑",
        emergency: "紧急服务",
        industrial: "工业",
        military: "军用",
        motorcycles: "摩托",
        offroad: "越野",
        suv: "SUV",
        sedan: "轿车",
        service: "服务",
        sport: "运动",
        trailer: "拖车",
        utility: "多功能",
        van: "厢式",
    };
}
