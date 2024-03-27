import { menuManager } from "../MenuManager";

import MarkoMods from "./F9_MarkoMods";

menuManager.addMenu("MarkoMods", MarkoMods);
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
