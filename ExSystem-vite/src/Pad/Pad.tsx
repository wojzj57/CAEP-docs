import { ConfigProvider, App, theme, Flex, Image } from "antd"
import "./Pad.less";

import image_body from "./res/body.png";
import image_cover from "./res/cover.png";
import { EmergencyCallModal } from "./EmergencyCall/EmergencyCall";
import { useState } from "react";


export const ExPad = () => {
    const [power, setPower] = useState(true);
    const [darkTheme, setDarkTheme] = useState(true);

    return (
        <ConfigProvider theme={{
            algorithm: darkTheme ? theme.darkAlgorithm : theme.defaultAlgorithm,
        }}>
            <App className="flex ex-pad">
                <PadBody power={power} darkTheme={darkTheme}>
                    <EmergencyCallModal />
                </PadBody>
            </App>
        </ConfigProvider >
    )
}

const PadBody = ({ power, darkTheme, children }: { power: boolean, darkTheme: boolean, children: JSX.Element }) => {
    return (
        <Flex className="ex-pad-panel flex m-auto pos-rel point-off" style={{ height: "70%", width: "100%" }}>
            <Flex className="flex pos-abs-abut">
                <img className="flex mx-auto" src={image_body} />
            </Flex>
            <Flex vertical className="flex flex-grow pos-rel">
                <Flex className="ex-pad-face flex flex-grow">
                    <Flex vertical className="ex-pad-content flex flex-grow point-on"
                        style={{ backgroundColor: (power && !darkTheme) ? "white" : "black" }}
                    >
                        {children}
                    </Flex>
                </Flex>
            </Flex>
            <Flex className="flex pos-abs-abut">
                <img className="flex mx-auto" style={{ opacity: 0.2 }} src={image_cover} />
            </Flex>
        </Flex>
    )
}