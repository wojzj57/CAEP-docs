import React from "react";

export namespace CProvider {
    export type _Provider = {
        tap: boolean
        theme: _Theme
    }
    export type _Theme = 'dark' | 'light'
}


export const CProvider: React.Context<CProvider._Provider> = React.createContext({
    tap: true
} as CProvider._Provider)
