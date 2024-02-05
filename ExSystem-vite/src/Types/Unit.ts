import { Location } from "./Common";
import { Officer } from "./User";
import { Vehicle } from "./Vehicle";

export namespace Unit {
    export type Type = "pd" | "fd" | "ems";

    export const StatusStringMap = {
        onduty: "可用",
        onscene: "到场",
        onbusy: "忙碌",
        onpatrol: "巡逻",
        onroute: "在途",
        offduty: "休息",
        emergency: "紧急",
    };
}
export namespace Unit {
    export type Status =
        | "onduty"
        | "onscene"
        | "onbusy"
        | "onpatrol"
        | "onroute"
        | "offduty"
        | "emergency";
}
export type Unit = {
    id: string;
    type: Unit.Type;
    sign: string;

    status: Unit.Status;
    location: Location;

    officers: Officer[];
    vehicles: Vehicle[];

    responceID?: string;
};
