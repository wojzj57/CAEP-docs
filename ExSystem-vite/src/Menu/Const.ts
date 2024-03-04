import { menuManager } from "./MenuManager";
import { ExMenu, ExPage } from "./Page";

export const ViewCount = 7;



const testPage = new ExMenu("XSC", "m", [], { viewCount: 7, width: "320px", hideCallback: () => { console.log("hide") } });
testPage.items = [
    {
        title: "Dashboard", component: {
            type: "button",
            enterHandler: () => {
                console.log("enter 1")
            },
            desc: "Dashboard"
        }
    },
    {
        type: "divider"
    },
    {
        title: "1", component: {
            type: "toggle",
            value: false,
        }
    },
    {
        title: "2", component: {
            type: "options",
            options: ["1", "2", "3"],
            value: "1",
            enterHandler: (value: string) => {
                console.log("enter 3", value)
            },
        }
    },
    {
        type: "page",
        title: "3", page: new ExPage("XSC2",
            [{
                title: "Dashboard", component: {
                    type: "button",
                    enterHandler: () => {
                        console.log("enter xcx2")
                    },
                    desc: "Dashboard"
                }
            },
            {
                type: "divider"
            },
            {
                title: "1", component: {
                    type: "toggle",
                    value: false,
                }
            },]
        )
    },
    {
        title: "4", component: {
            type: "number",
            max: 10,
            min: 0,
            value: 0,
            enterHandler: (value: number) => {
                console.log("enter ", value)
            },
        }
    },
    {
        title: "4", component: {
            type: "input",
            value: "0",
            enterHandler: (value: string) => {
                console.log("enter ", value)
            },
        }
    },
]

export const MenuMap: { [key: string]: { hotkey: string, menu: ExMenu } } = {
    "test": {
        hotkey: "m",
        menu: testPage
    }
}
