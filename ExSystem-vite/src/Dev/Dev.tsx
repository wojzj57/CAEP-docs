import { createContext, useState } from "react";
import { Button, Flex } from "antd"

interface DevBaseProps {
    children?: React.ReactNode;
}

export const DevBase = ({ children }: DevBaseProps) => {
    const [resolution, setResolution] = useState<"1080p" | "2k" | "4k">("4k");
    return (
        <div className="flex pos-rel" style={{ height: "100%", width: "100%" }}>
            <img className="pos-abs"
                src={`./src/res/bg_${resolution}.png`}
                style={{ height: "100%", width: "100%" }}
            ></img>
            <div className="pos-abs" style={{
                bottom: "10px",
                right: "10px",
            }}>
                <Flex gap={"small"}>
                    <Button onClick={() => setResolution("1080p")}>1080p</Button>
                    <Button onClick={() => setResolution("2k")}>2k</Button>
                    <Button onClick={() => setResolution("4k")}>4k</Button>
                </Flex>
            </div>
            <DevRef />
            {children}
        </div >
    )
}

const DevRef = () => {
    return (
        <div className="pos-abs" style={{
            bottom: 0,
            right: 0,
            top: 0,
            left: 0,
            pointerEvents: "none"
        }}>
            <div className="pos-abs" style={{
                top: '36%',
                left: '1%',
                width: '18%',
                height: "240px",
                backgroundColor: "#FFFFFF90"
            }}>

            </div>
            <div className="pos-abs" style={{
                top: '2%',
                left: '1%',
                width: '18%',
                height: '33.3%',
                backgroundColor: "#0050CC90"
            }}>
            </div>
        </div>
    )
}