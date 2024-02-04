import Q from "q";
import React, { createRef } from "react";
import { EventRef } from "./EventCard";
import { EventsRef } from "./Events";
import { ExEvent } from "@/Types/Event";
import { CIV } from "@/Types/User";
import { Vehicle } from "@/Types/Vehicle";

class EventBulk {
    private ref: React.RefObject<EventRef>;
    id: string;
    constructor(public event: ExEvent) {
        this.ref = createRef();
        this.id = event.id;
    }

    open() {
        EventsRef.current?.open(this.event, this.ref);
    }

    update(event: ExEvent) {
        this.event = event;
        this.ref.current?.update(event);
    }

    destory() {
        EventsRef.current?.destroy(this.event);
    }
}

class EventManager {
    private bulks: Map<string, EventBulk> = new Map();
    constructor() {}

    createEvent(event: ExEvent) {
        if (this.bulks.has(event.id)) return;
        const bulk = new EventBulk(event);
        this.bulks.set(event.id, bulk);
        bulk.open();
    }

    updateEvent(event: ExEvent) {
        if (this.bulks.has(event.id)) {
            const bulk = this.bulks.get(event.id);
            bulk?.update(event);
        }
    }

    destoryEvent(event: ExEvent) {
        if (this.bulks.has(event.id)) {
            const bulk = this.bulks.get(event.id);
            bulk?.destory();
            this.bulks.delete(event.id);
        }
    }
}

export const eventManager = new EventManager();

Q.delay(10).then(() => {
    eventManager.createEvent({
        id: "1",
        status: "pending",
        class: "police",

        //
        postal: "271",
        location: { x: 0, y: 0 },
        time: { hour: 5, minute: 0, second: 0 },

        //
        type: "211S",
        desc: "发现、发生案件的时间、地点；现场的原始状态；有无采取措施；犯罪分子或可疑人员的人数、特点、作案工具、相关的车辆情况（颜色、车型、牌号等）、携带物品和逃跑的方向等等 发现、发生案件的时间、地点；现场的原始状态；有无采取措施；犯罪分子或可疑人员的人数、特点、作案工具、相关的车辆情况（颜色、车型、牌号等）、携带物品和逃跑的方向等等    发现、发生案件的时间、地点；现场的原始状态；有无采取措施；犯罪分子或可疑人员的人数、特点、作案工具、相关的车辆情况（颜色、车型、牌号等）、携带物品和逃跑的方向等等",
        notes: [],

        involvedPersons: [testP],
        involvedVehicles: [testV],
    });
});

const testP: CIV = {
    name: "张三",
    id: "2",
    race: "black",
    gender: "male",
    birthday: "1999-01-01",
    job: "student",
    phone: "1234567890",
    postal: "271",
    address: "1234",
};

const testV: Vehicle = {
    id: "3",
    class: "civ",
    plate: "123456",
    owner: "2",
    status: "valid",
    type: "sedan",
    manufacturer: "Toyota",
    color: "white",
};
