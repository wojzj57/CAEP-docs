import { ExMenu } from "../Page";
import { MenuManager } from "../MenuManager";

import MarkoMods from './F9_MarkoMods'

export const ViewCount = 7;

export const MenuMap: { [key: string]: { hotkey: string, menu: ExMenu } } = {
    "MarkoMods": {
        hotkey: "f9",
        menu: MarkoMods
    },
}

const menuManager = new MenuManager();


window.addEventListener("keydown", (e) => {
    if (e.key == "F9") {
        menuManager.render("MarkoMods");
    }
});


window.addEventListener("message",(res)=>{
    let data = res.data

    switch(data.hotkey){
        case "f9":
            menuManager.render("MarkoMods")
            return
        default:
            console.log("not bind page key:",data.hotkey)
    }
})
