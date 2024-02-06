import { ConfigProvider, theme, App } from "antd";
import { createContext, useState } from "react";
import { ExPad } from "./Pad/Pad";

import "./App.less";
import { ExFace } from "./Face/Face";

export type ExAppContext = {
    darkTheme: boolean;
}
export const exAppContext = createContext<ExAppContext>({ darkTheme: true })
export const ExApp = () => {
    const [darkTheme, setDarkTheme] = useState(true);

    return (
        <ConfigProvider theme={{
            algorithm: darkTheme ? theme.darkAlgorithm : theme.defaultAlgorithm,
        }}>
            <exAppContext.Provider value={{ darkTheme }}>
                <App className="flex ex-app">
                    <ExPad />
                    <ExFace />
                </App>
            </exAppContext.Provider>
        </ConfigProvider >
    )
} 