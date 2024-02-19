import { ExEvent } from "@/Types/Event";
import { CIV } from "@/Types/User";
import { Vehicle } from "@/Types/Vehicle";

export const testCiv: CIV = {
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

export const testVehicle: Vehicle = {
    id: "3",
    class: "civ",
    plate: "123456",
    owner: "2",
    status: "valid",
    type: "sedan",
    manufacturer: "Toyota",
    color: "white",
};

export const testEvent: ExEvent = {
    id: "1",
    status: "pending",
    class: "police",
    route: "911",

    //
    postal: "271",
    location: { x: 0, y: 0 },
    time: "00:45",

    //
    type: "211S",
    title: "",
    desc: "发现、发生案件的时间、地点；现场的原始状态；有无采取措施；犯罪分子或可疑人员的人数、特点、作案工具、相关的车辆情况（颜色、车型、牌号等）、携带物品和逃跑的方向等等 发现、发生案件的时间、地点；现场的原始状态；有无采取措施；犯罪分子或可疑人员的人数、特点、作案工具、相关的车辆情况（颜色、车型、牌号等）、携带物品和逃跑的方向等等    发现、发生案件的时间、地点；现场的原始状态；有无采取措施；犯罪分子或可疑人员的人数、特点、作案工具、相关的车辆情况（颜色、车型、牌号等）、携带物品和逃跑的方向等等",
    notes: [],
    images: [],

    suspectPersons: [],
    suspectVehicles: [],

    pdOfficers: [],
    fdOfficers: [],
};
