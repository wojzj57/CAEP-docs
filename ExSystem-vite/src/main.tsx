import { createRoot } from 'react-dom/client';
import "./css/ex.css"

import { DevBase } from './Dev/Dev';
import { ExApp } from './App/App';
import { ExWatch } from './Watch/Watch';
import { MenuGUI } from './Menu/GUI/Menu';


createRoot(document.getElementById('root') as HTMLElement)
    .render(
        <DevBase>
            {/* <ExApp /> */}
            {/* <ExWatch /> */}
            <MenuGUI />
        </DevBase>
    )

