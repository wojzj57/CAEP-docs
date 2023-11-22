import { Button, Flex, Popover, Tooltip, Typography } from "antd"

export const EventVehicle = () => {
    return (
        <Popover
            title="车辆信息"
            trigger="hover"
            color="geekblue"
            content={
                <Flex vertical gap={"small"}>
                    <Flex className="flex-grow">
                        <Typography.Text className="ex-line ex-text event-message">
                            {"车牌: xxxxxx"}
                        </Typography.Text>
                        <Typography.Text className="ex-line ex-text event-message ml-auto">
                            {"颜色: xxxxxx"}
                        </Typography.Text>
                    </Flex>

                    <Typography.Text type={"secondary"} className="ex-line ex-text event-message">
                        {"点击Bolo车牌信息"}
                    </Typography.Text>
                </Flex>
            }>
            <Button type={"text"} style={{ padding: "4px" }}>
                <svg style={{ fill: "#fff" }} height="18" viewBox="0 0 18 18" width="18">
                    <rect fill="#ff13dc" opacity="0" width="18" height="18" />
                    <path d="M16.64575,8.64417,16.24957,8.249l-1.73-4.0368A2.0001,2.0001,0,0,0,12.68122,3H5.31879A2,2,0,0,0,3.48053,4.21216L1.75,8.25l-.39673.39673A1.2061,1.2061,0,0,0,1,9.49957V16.5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5V14H15v2.5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5V9.498A1.20592,1.20592,0,0,0,16.64575,8.64417ZM4.62946,4.70453A.7491.7491,0,0,1,5.31879,4.25h7.36243a.74921.74921,0,0,1,.68939.45453L14.7829,8H3.2171ZM4,12.5A1.5,1.5,0,1,1,5.5,11,1.5,1.5,0,0,1,4,12.5Zm10,0A1.5,1.5,0,1,1,15.5,11,1.5,1.5,0,0,1,14,12.5Z" />
                </svg>
            </Button>
        </Popover>
    )
}