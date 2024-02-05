import { createRoot } from 'react-dom/client';
import { ExApp } from './Watch/App';
import "./css/ex.css"


import { DevBase } from './Dev/Dev';
import { ExPad } from './Pad/Pad';


createRoot(document.getElementById('root') as HTMLElement)
    .render(
        <DevBase>
            <ExPad />
            {/* <ExApp /> */}
        </DevBase>
    )

