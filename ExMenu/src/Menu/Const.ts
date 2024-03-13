import { ExMenu, ExPage } from "./Page";

export const ViewCount = 7;

const testPage = new ExMenu("XSC", "m", [], {
    viewCount: 7, width: "320px", showCallback: () => {
        console.log("show")

    }, hideCallback: () => { console.log("hide") }
});
const testPage2 = new ExMenu("XSC222", "m", [], {
    viewCount: 7, width: "320px", showCallback: () => {
        console.log("show2")

    }, hideCallback: () => { console.log("hide2") }
});

testPage.items = [
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
        type: "page",
        title: "3", page: new ExPage("XSC2",
            [{
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

testPage2.items = [
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
]

export const MenuMap: { [key: string]: { hotkey: string, menu: ExMenu } } = {
    "test": {
        hotkey: "m",
        menu: testPage
    },
    "test2": {
        hotkey: "h",
        menu: testPage2
    }
}
