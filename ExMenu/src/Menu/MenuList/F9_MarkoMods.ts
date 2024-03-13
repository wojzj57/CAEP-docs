import { ExMenuItems } from "../GUI/Items";
import { ExMenu, ExPage } from "../Page";

const MarkoMods = new ExMenu("武器菜单", "f9", [], {
    viewCount: 7, width: "320px", showCallback: () => {
        console.log("show")

    }, hideCallback: () => {
        fetch("https://ExMenu/close").catch((err) => {
            console.log("ExMenu Error: Close")
        })
    }
});


async function getSaveItem() {
    let items: ExMenuItems[] = []

    // TODO 需要替换为正式URL
    await fetch("https://localhost/getMarkoModSaveItem", {
        method: "get"
    }).then((res) => {
        console.log(res)
    }).catch(err => {
        items.push({
            title: "无保存项", component: {
                type: "button"
            }
        })
    })

    return new ExPage("读取配置", items)
}



MarkoMods.items = [
    {
        type: "page",
        title: "读取配置", page: await getSaveItem()
    },
    {
        type: "page",
        title: "保存配置", page: new ExPage("保存配置",
            [
                {
                    title: "保存名称", component: {
                        type: "input",
                        value: "",
                        enterHandler: (value: string) => {
                            console.log("enter ", value)
                        },
                    }
                },
                {
                    type: "divider"
                },
                {
                    title: "提交", component: {
                        type: "button",
                        enterHandler: () => {
                            console.log("'?")
                        },
                        desc: ""
                    }
                }
            ]
        )
    }
]

export default MarkoMods