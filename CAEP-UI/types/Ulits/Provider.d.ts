import React from "react";
export declare namespace CProvider {
    type _Provider = {
        tap: boolean;
        theme: _Theme;
    };
    type _Theme = 'dark' | 'light';
}
export declare const CProvider: React.Context<CProvider._Provider>;
