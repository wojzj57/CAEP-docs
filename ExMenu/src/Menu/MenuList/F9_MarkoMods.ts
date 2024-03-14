import { ExMenuItems } from "../GUI/Items";
import { ExMenu, ExPage } from "../Page";

import defaultTest from './defaultlist';

/** 设置当前身上武器 */
let GunSetURL = "https://ExMenu/setloadGun"
/** 获取默认武器列表 */
let getDefaultWeaponURL = "https://ExMenu/getDefaultWeaponList"
/** 保存当前身上的武器 */
let SaveItemURL = "http://127.0.0.1:4523/m1/3609519-0-default/plugins/setmarkosaveitem"
/** 获取保存的武器列表 */
let getSaveItemURL = "http://127.0.0.1:4523/m1/3609519-0-default/plugins/getmarkosaveitem"
/** 关闭武器菜单 */
let CloseMarkoModMenuURL = "https://ExMenu/MarkoModClose"


/** 获取保存的配置列表 */
async function getSaveItem() {
    let items: ExMenuItems[] = []
    let res = await fetch(getSaveItemURL).catch(err => {
        items.push({
            title: "无保存项", component: {
                type: "button"
            }
        })
    })
    if (res) {
        let data: any[] = await res.json()

        data.forEach((item) => {
            console.log(item)
            items.push({
                title: item.title, component: {
                    type: "button",
                    enterHandler() {
                        let gunArray: any[] = item.data
                        if (gunArray.length > 0) {
                            gunArray.forEach((g) => {
                                fetch(GunSetURL, { method: "POST", body: JSON.stringify(g) }).catch((err) => {
                                    console.log("load gun error")
                                })
                            })
                        }
                    },
                }
            })
        })
    }


    return new ExPage("读取配置", items)
}

async function getDefaultWeapon() {
    let list: ExMenuItems[] = []
    // await fetch(getDefaultWeaponURL,{method:"POST"}).catch((err)=>{
    //     list.push({
    //         title: "未读取到武器",
    //         component:{
    //             type: "button"
    //         }
    //     })
    // })
    // console.log(defaultTest)
    let i = 0
    for (let [key, value] of Object.entries(defaultTest)) {
        // console.log(key, value) 

        list.push({
            type: "page",
            title: value.label,
            page: new ExPage(value.label,[
                {
                    title: "生成武器",
                    component: {
                        type: "button"
                    }
                },
                {
                    title: "添加子弹",
                    component: {
                        type: "button"
                    }
                },
                ...(() => {
                    let subList:ExMenuItems[] = []
                    if(typeof(value.attachments) === "object"){
                        for(let [atta,data] of Object.entries(value.attachments)){
                            subList.push({
                                title: atta,
                                type: "page",
                                page: new ExPage(atta,[
                                    ...(()=>{
                                        let secList:ExMenuItems[] = []
                                        data.map((v)=>{
                                            // console.log(v)
    
                                            secList.push({
                                                title: v.label,
                                                component: {
                                                    type: "button"
                                                }
                                            })
                                        })
                                        return secList
                                    })()
                                ])
                            })
                        }
                    }
                    
                    return subList
                })()
            ])
        })
    }

    return new ExPage("原版武器", list)
}

/** 生成菜单 */
const MarkoMods = new ExMenu("武器菜单", "f9", [], {
    viewCount: 7, width: "320px", showCallback: () => {
        console.log("show")

    }, hideCallback: () => {
        fetch(CloseMarkoModMenuURL, { method: "POST" }).catch((err) => {
            console.log("ExMenu Error: Close")
        })
    }
});
MarkoMods.items = [
    {
        type: "page",
        title: "原版武器", page: await getDefaultWeapon()
    },
    {
        type: "page",
        title: "读取配置", page: await getSaveItem()
    },
    {
        type: "page",
        title: "保存配置", page: new ExPage("保存配置",
            [
                {
                    type: "divider"
                },
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