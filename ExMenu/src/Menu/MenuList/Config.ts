import { ExMenu } from "../Page";
import { MenuManager } from "../MenuManager";

import MarkoMods from "./F9_MarkoMods";

export const ViewCount = 7;

export const MenuMap: { [key: string]: { hotkey: string; menu: ExMenu } } = {
  MarkoMods: {
    hotkey: "f9",
    menu: MarkoMods,
  },
};

const menuManager = new MenuManager();

window.addEventListener("keydown", (e) => {
  if (e.key == "F9") {
    menuManager.show("MarkoMods");
  }
});

window.addEventListener("message", (res) => {
  let data = res.data;

  switch (data.type) {
    case "f9":
      menuManager.show("MarkoMods");
      return;
    default:
      console.log("not bind page key:", data.type);
  }
});
