import { Vehicle } from "@/Types/Vehicle";

export namespace VehicleConst {
    export const StatusOptions = [
        { label: "有效", value: "valid" },
        { label: "过期", value: "expired" },
        { label: "暂停", value: "suspended" },
        { label: "未注册", value: "unregistered" },
        { label: "被盗", value: "stolen" },
    ];

    export const TypeOptions = [
        { label: Vehicle.TypeStringMap["commercials"], value: "commercials" },
        { label: Vehicle.TypeStringMap["compacts"], value: "compacts" },
        { label: Vehicle.TypeStringMap["coupes"], value: "coupes" },
        { label: Vehicle.TypeStringMap["emergency"], value: "emergency" },
        { label: Vehicle.TypeStringMap["industrial"], value: "industrial" },
        { label: Vehicle.TypeStringMap["military"], value: "military" },
        { label: Vehicle.TypeStringMap["motorcycles"], value: "motorcycles" },
        { label: Vehicle.TypeStringMap["offroad"], value: "offroad" },
        { label: Vehicle.TypeStringMap["suv"], value: "suv" },
        { label: Vehicle.TypeStringMap["sedan"], value: "sedan" },
        { label: Vehicle.TypeStringMap["service"], value: "service" },
        { label: Vehicle.TypeStringMap["sport"], value: "sport" },
        { label: Vehicle.TypeStringMap["trailer"], value: "trailer" },
        { label: Vehicle.TypeStringMap["utility"], value: "utility" },
        { label: Vehicle.TypeStringMap["van"], value: "van" },
    ]

    export const ColorOptions = [
        { label: Vehicle.ColorStringMap["white"], value: "white" },
        { label: Vehicle.ColorStringMap["black"], value: "black" },
        { label: Vehicle.ColorStringMap["red"], value: "red" },
        { label: Vehicle.ColorStringMap["blue"], value: "blue" },
        { label: Vehicle.ColorStringMap["green"], value: "green" },
        { label: Vehicle.ColorStringMap["yellow"], value: "yellow" },
        { label: Vehicle.ColorStringMap["gray"], value: "gray" },
        { label: Vehicle.ColorStringMap["silver"], value: "silver" },
        { label: Vehicle.ColorStringMap["brown"], value: "brown" },
        { label: Vehicle.ColorStringMap["orange"], value: "orange" },
        { label: Vehicle.ColorStringMap["purple"], value: "purple" },
        { label: Vehicle.ColorStringMap["pink"], value: "pink" },
        { label: Vehicle.ColorStringMap["gold"], value: "gold" },
        { label: Vehicle.ColorStringMap["other"], value: "other" },
    ]

    export const ManufacturerOptions = [
        {
            label: '美国',
            options: [
                { label: "福特", value: "ford" },
                { label: "雪佛兰", value: "chevrolet" },
                { label: "特斯拉", value: "tesla" },
                { label: "道奇", value: "dodge" },
                { label: "凯迪拉克", value: "cadillac" },
                { label: "克莱斯勒", value: "chrysler" },
                { label: "GMC", value: "gmc" },
                { label: "Ram", value: "ram" },
                { label: "林肯", value: "lincoln" },
                { label: "别克", value: "buick" },
                { label: "Jeep", value: "jeep" },
            ],
        },
        {
            label: '欧洲',
            options: [
                { label: "奔驰", value: "benz" },
                { label: "宝马", value: "bmw" },
                { label: "奥迪", value: "audi" },
                { label: "大众", value: "volkswagen" },
                { label: "保时捷", value: "porsche" },
                { label: "路虎", value: "landrover" },
                { label: "捷豹", value: "jaguar" },
                { label: "沃尔沃", value: "volvo" },
                { label: "英菲尼迪", value: "infiniti" },
                { label: "法拉利", value: "ferrari" },
                { label: "玛莎拉蒂", value: "maserati" },
                { label: "阿斯顿马丁", value: "astonmartin" },
                { label: "布加迪", value: "bugatti" },
                { label: "迈凯伦", value: "mclaren" },
                { label: "劳斯莱斯", value: "rollsroyce" },
                { label: "宾利", value: "bentley" },
            ],
        },
        {
            label: '日韩',
            options: [
                { label: "丰田", value: "toyota" },
                { label: "雷克萨斯", value: "lexus" },
                { label: "本田", value: "honda" },
                { label: "日产", value: "nissan" },
                { label: "现代", value: "hyundai" },
                { label: "铃木", value: "suzuki" },
            ],
        },
    ]
}