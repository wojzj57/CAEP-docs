import { CIV } from "@/Types/User"
import { Vehicle } from "@/Types/Vehicle"
import { Button, Flex, Popover, Tooltip, Typography } from "antd"

export const EventVehicle = ({ vehicle }: { vehicle: Vehicle }) => {
    return (
        <Popover
            title="嫌疑车辆"
            trigger="hover"
            content={
                <Flex vertical gap={"middle"}>
                    <Flex gap={"small"}>
                        <InfoItem title="车牌" content={vehicle.plate} />
                        <InfoItem title="类型" content={Vehicle.TypeStringMap[vehicle.type]} />
                        {
                            vehicle.model &&
                            <InfoItem title="型号" content={vehicle.model} />
                        }
                        <InfoItem title="颜色" content={vehicle.color} />
                    </Flex>
                    <Typography.Text type={"secondary"} className="ex-line ex-text event-message">
                        {"点击Bolo车牌信息"}
                    </Typography.Text>
                </Flex>
            }>
            <Button type={"text"} style={{ padding: "4px" }}>
                <svg className="flex m-auto" style={{ fill: "#fff" }} height="18" viewBox="0 0 18 18" width="18">
                    <rect fill="#ff13dc" opacity="0" width="18" height="18" />
                    <path d="M16.64575,8.64417,16.24957,8.249l-1.73-4.0368A2.0001,2.0001,0,0,0,12.68122,3H5.31879A2,2,0,0,0,3.48053,4.21216L1.75,8.25l-.39673.39673A1.2061,1.2061,0,0,0,1,9.49957V16.5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5V14H15v2.5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5V9.498A1.20592,1.20592,0,0,0,16.64575,8.64417ZM4.62946,4.70453A.7491.7491,0,0,1,5.31879,4.25h7.36243a.74921.74921,0,0,1,.68939.45453L14.7829,8H3.2171ZM4,12.5A1.5,1.5,0,1,1,5.5,11,1.5,1.5,0,0,1,4,12.5Zm10,0A1.5,1.5,0,1,1,15.5,11,1.5,1.5,0,0,1,14,12.5Z" />
                </svg>
            </Button>
        </Popover>
    )
}

export const EventPerson = ({ person }: { person: CIV }) => {
    return (
        <Popover
            title="嫌疑人"
            trigger="hover"
            content={
                <Flex vertical gap={"small"}>
                    <Flex gap={"small"}>
                        <Flex>
                            <Typography.Text className="ex-line ex-text event-message" type="secondary">
                                {"名字: "}
                            </Typography.Text>
                            <Typography.Text className="ex-line ex-text event-message">
                                {person.name}
                            </Typography.Text>
                        </Flex>
                        <Flex>
                            <Typography.Text className="ex-line ex-text event-message" type="secondary">
                                {"性别: "}
                            </Typography.Text>
                            <Typography.Text className="ex-line ex-text event-message">
                                {CIV.GenderStringMap[person.gender]}
                            </Typography.Text>
                        </Flex>
                        <Flex>
                            <Typography.Text className="ex-line ex-text event-message" type="secondary">
                                {"族裔: "}
                            </Typography.Text>
                            <Typography.Text className="ex-line ex-text event-message">
                                {CIV.RaceStringMap[person.race]}
                            </Typography.Text>
                        </Flex>
                        <Flex>
                            <Typography.Text className="ex-line ex-text event-message" type="secondary">
                                {"年龄: "}
                            </Typography.Text>
                            <Typography.Text className="ex-line ex-text event-message">
                                {CIV.birthdayToAge(person.birthday)}
                            </Typography.Text>
                        </Flex>
                    </Flex>
                </Flex>
            }>
            <Button type={"text"} style={{ padding: "4px" }}>
                <svg className="flex m-auto" style={{ fill: "#fff" }} height="16" viewBox="0 0 18 18" width="16">
                    <rect fill="#ff13dc" opacity="0" width="18" height="18" />
                    <path className="fill" d="M16.4745,17a.4965.4965,0,0,0,.50089-.49207q.00015-.01724-.00089-.03443c-.3305-3.592-4.0135-4.8155-5.139-4.9135C11.013,11.4885,11,10.826,11,10a7.51507,7.51507,0,0,0,1.766-4.479C12.766,2.8085,11.2225,1,9,1S5.234,2.8085,5.234,5.521A7.51507,7.51507,0,0,0,7,10c0,.826-.013,1.4885-.837,1.56-1.1255.1-4.8085,1.3215-5.139,4.9135a.49649.49649,0,0,0,.46557.52561q.01719.001.03443.00089Z" />
                </svg>
            </Button>
        </Popover>
    )
}

const InfoItem = ({ title, content }: { title: string, content: string }) => {
    return (
        <Flex>
            <Typography.Text className="ex-line ex-text event-message" type="secondary">
                {title + ": "}
            </Typography.Text>
            <Typography.Text className="ex-line ex-text event-message">
                {content}
            </Typography.Text>
        </Flex>
    )
}