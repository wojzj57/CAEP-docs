import { ConfigProvider, App, theme, Flex } from "antd"
import "./Pad.less";

export const ExPad = () => {

    return (
        <ConfigProvider theme={{
            algorithm: theme.darkAlgorithm,
        }}>
            <App className="flex ex-pad">
                <Flex className="ex-pad-panel flex m-auto" style={{ height: "50%", width: "50%", backgroundColor: "ButtonFace" }}>
                    12313333333333333333333
                    12313333333333333333333
                    12313333333333333333333
                    12313333333333333333333
                    12313333333333333333333
                    12313333333333333333333
                    12313333333333333333333
                    12313333333333333333333
                    12313333333333333333333
                    12313333333333333333333
                    12313333333333333333333
                </Flex>
            </App>
        </ConfigProvider >
    )
}