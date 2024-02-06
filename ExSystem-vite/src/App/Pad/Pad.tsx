import { ConfigProvider, App, theme, Flex, Image } from "antd"
import "./Pad.less";


import { EmergencyCallModal } from "./EmergencyCall/EmergencyCall";
import { useContext, useState } from "react";
import { exAppContext } from "../App";

import image_body from "./res/body.png";
import image_cover from "./res/cover.png";

export const ExPad = () => {

    return (
        <PadBody>
            <EmergencyCallModal />
        </PadBody>

    )
}

const PadBody = ({ children }: { children: JSX.Element }) => {
    const appContext = useContext(exAppContext);
    const { darkTheme } = appContext;
    const [power, setPower] = useState(true);

    console.log(darkTheme)

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