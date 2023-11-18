import { createRoot } from 'react-dom/client';
import { ExApp } from './App';
import "./css/ex.css"


import { DevBase } from './Dev/Dev';


createRoot(document.getElementById('root') as HTMLElement)
    .render(
        <DevBase>
            <ExApp></ExApp>
        </DevBase>
    )

