import { ReactNode } from "react";
import "../css/ex.css";
import "../css/caep.css";
export declare class CRenderer {
    context: ReactNode;
    constructor(props?: any);
    render(context: ReactNode): void;
    refresh(): void;
    renderTest(): void;
}
