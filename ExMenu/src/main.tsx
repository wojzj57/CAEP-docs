import { createRoot } from 'react-dom/client';
import "./css/ex.css"

import { MenuGUI } from './Menu/GUI/Menu';

import "./Menu/MenuList/Config"


createRoot(document.getElementById('root') as HTMLElement)
    .render(
        <div className="flex pos-rel" style={{ height: "100%", width: "100%" }}>
            <MenuGUI />
        </div >
    )

