import Q from "q";
import React, { createRef } from "react";
import { EventRef } from "./EventCard";
import { EventsRef } from "./Events";
import { ExEvent } from "@/Types/Event";
import { CIV, Officer } from "@/Types/User";
import { Vehicle } from "@/Types/Vehicle";
import { Unit } from "@/Types/Unit";
import { Location, Time } from "@/Types/Common";

export class ExEventBulk implements ExEvent {
    id: string;
    status: ExEvent.Status;
    class: ExEvent.Class;
    route: ExEvent.Route;

    postal: string;
    location: Location;
    time: Time;
    type: string;
    desc: string;
    notes: string[];
    suspectVehicles: Vehicle[];
    suspectPersons: CIV[];
    pdOfficers: Officer[];
    fdOfficers: Officer[];

    public ref: React.RefObject<EventRef> = createRef();
    constructor(event: ExEvent) {
        this.id = event.id;
        this.status = event.status;
        this.class = event.class;
        this.route = event.route;

        this.postal = event.postal;
        this.location = event.location;
        this.time = event.time;
        this.type = event.type;
        this.desc = event.desc;
        this.notes = event.notes;
        this.suspectVehicles = event.suspectVehicles;
        this.suspectPersons = event.suspectPersons;
        this.pdOfficers = event.pdOfficers;
        this.fdOfficers = event.fdOfficers;
    }

    open() {
        EventsRef.current?.open(this, this.ref);
    }

    setDatas(data: Partial<ExEvent>) {
        Object.assign(this, data);
        this.ref.current?.update(this);
        this.sendEventData(data);
    }
    setEvent(event: ExEvent) {
        Object.assign(this, event);
        this.ref.current?.update(this);
        this.sendEventData();
    }

    private sendEventData(data?: Partial<ExEvent>) {
        if (!data)
            data = {
                id: this.id,
                status: this.status,
                class: this.class,
                route: this.route,

                postal: this.postal,
                location: this.location,
                time: this.time,
                type: this.type,
                desc: this.desc,
                notes: this.notes,
                suspectVehicles: this.suspectVehicles,
                suspectPersons: this.suspectPersons,
                pdOfficers: this.pdOfficers,
                fdOfficers: this.fdOfficers,
            };
        console.log("send", data);
    }

    updatePartial(data: Partial<ExEvent>) {
        Object.assign(this, data);
        this.ref.current?.update(this);
    }
    update(event: ExEvent) {
        Object.assign(this, event);
        this.ref.current?.update(this);
    }

    destory() {
        EventsRef.current?.destroy(this.id);
    }
}

class EventManager {
    private bulks: Map<string, ExEventBulk> = new Map();
    public unit?: Unit;
    constructor() {}

    response(): void;
    response(id: string): void;
    response(event: ExEvent): void;
    response(arg?: string | ExEvent) {
        if (!this.unit) return;
        if (!arg) this.unit.responceID = undefined;
        else this.unit.responceID = typeof arg === "string" ? arg : arg.id;
        EventsRef.current?.response(this.unit?.responceID);
    }

    createEvent(event: ExEvent) {
        if (this.bulks.has(event.id)) return;
        const bulk = new ExEventBulk(event);
        this.bulks.set(event.id, bulk);
        bulk.open();
    }

    updateEvent(event: ExEvent) {
        if (this.bulks.has(event.id)) {
            const bulk = this.bulks.get(event.id);
            bulk?.update(event);
        }
    }
    updateEventPartial(id: string, data: Partial<ExEvent>) {
        const bulk = this.bulks.get(id);
        bulk?.updatePartial(data);
    }


    destoryEvent(id: string): void;
    destoryEvent(event: ExEvent): void;
    destoryEvent(arg: ExEvent | string) {
        if (typeof arg === "string") this._destoryEventById(arg);
        else this._destoryEventById(arg.id);
    }
    private _destoryEventById(id: string) {
        if (this.bulks.has(id)) {
            const bulk = this.bulks.get(id);
            bulk?.updatePartial({ status: "closed" });
            Q.delay(3000).then(() => {
                bulk?.destory();
                this.bulks.delete(id);
            });
        }
    }
}

export const eventManager = new EventManager();