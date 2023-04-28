import { CRenderer } from "./Common/renderer";

// var renderer = new CRenderer();
// renderer.renderTest();

import { menu } from "./Menu/Data/menu";
import { page } from "./Menu/Data/page";


var mainPage = new page({ name:'main' })

var test = new menu();
test.mainPage = mainPage;
test.render();
console.log(test)