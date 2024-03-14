require("@citizenfx/client")
/**
 *  1. 注册 onNet | 支持 server 和client
 *  2. 服务器激活 emitNet  | 客户端激活 emit
*/

/**
 *  1. 注册on
 *  2. 同一客户端激活 emit
 */

/** 获取当前插件的目录 */
//@ts-ignore
// const root = GetResourcePath(GetCurrentResourceName());
/** 当前客户端f_ident */
let localLicense = null;

// 插件加载时
onNet('onResourceStart', async (resourcename) => {
    if (GetCurrentResourceName() !== resourcename) {
        return
    }

    RegisterKeyMapping("/openMarkoModsMenu", "武器菜单", 'keyboard', "F9")
    RegisterCommand("/openMarkoModsMenu", (source, args, RawCommand) => {
        SendNUIMessage(JSON.stringify({type:"f9",data:null}))
        SetNuiFocus(true,false)
    })
})
// 插件停止时
onNet('onResourceStop', async (resourcename) => {
    if (GetCurrentResourceName() !== resourcename) {
        return
    }
})

// onNet('ExHome:ShowHomePage', (f_ident) => {
//     localLicense = f_ident
//     SendMessage({
//         action: 'home',
//         data: f_ident
//     })

//     SetFocus(true)
// })


// 前端配置枪械设置URL回调
RegisterNuiCallbackType('setloadGun')
on('__cfx_nui:setloadGun', (res, cb) => {
    let { gun, peijian } = res
    let localPed = GetPlayerPed(-1)
    let mainGunHashKey = GetHashKey(gun)
    //1. 判断枪械模型是否存在
    if (IsWeaponValid(GetHashKey(k))) {
        //2. 基于人物模型枪械
        GiveWeaponToPed(localPed, mainGunHashKey, 200, true, true)
        //2.1. 加载枪械配件
        if (typeof (peijian) === Array && peijian.length > 0) {
            peijian.forEach(ele => {
                GiveWeaponComponentToPed(localPed, mainGunHashKey, GetHashKey(ele))
            });
        }

        cb({ code: 0, message: `配置加载成功` })
    } else {
        cb({ code: 1, message: `${gun} 不存在` })
    }
});

// 前端关闭页面回调
RegisterNuiCallbackType('MarkoModsClose')
on('__cfx_nui:MarkoModsClose', (res, cb) => {
    SendNUIMessage(JSON.stringify({ type: "MarkoModsClose",data: null}))
    SetNuiFocus(false,false)
    cb({ code: 0, message: `操作成功` })
})

/** 给UI页面发送消息 */
function SendMessage(data) {
    SendNUIMessage(data)
}

/** 显示/隐藏 UI界面 及 鼠标占用 */
// function SetFocus(status) {
//     //          UI显示  鼠标占用
//     SetNuiFocus(status, false)
// }
