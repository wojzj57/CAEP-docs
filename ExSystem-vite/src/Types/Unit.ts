import { Location } from "./Common";
import { Officer } from "./User";
import { Vehicle } from "./Vehicle";

export namespace Unit {
    export type Type = "pd" | "fd" | "ems";
}
export namespace Unit {
    export type Status =
        | "on-duty"
        | "on-scene"
        | "on-busy"
        | "on-patrol"
        | "on-route"
        | "off-duty";
}
export type Unit = {
    id: string;
    type: Unit.Type;
    sign: string;

    status: Unit.Status;
    location: Location;
    officers: Officer[];
    vehicles: Vehicle[];
};
