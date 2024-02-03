export type ExEvent = {
    id: string;
    status: EventStatus;

    //
    postal: string;
    location: Location;
    time: Time;

    //
    type: string;
    desc: string;

    //
};

type Location = { x: number; y: number };
type Time = { hour: number; minute: number; second: number };

type EventStatus =
    | "pending"
    | "routing"
    | "progressing"
    | "completed"
    | "cancelled"
    | "emergency";

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
