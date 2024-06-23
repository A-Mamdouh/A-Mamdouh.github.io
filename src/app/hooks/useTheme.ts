"use client";

import { Dispatch, useReducer } from "react";
import { Theme } from "../types";


function useTheme(initialTheme: Theme = Theme.system): [Theme, Dispatch<Theme>] {
    const toggleTheme = (themeName: string, value: boolean) => {
        if (value) {
            if (!document.documentElement.classList.contains(themeName))
                document.documentElement.classList.add(themeName);
        } else {
            if (document.documentElement.classList.contains(themeName))
                document.documentElement.classList.remove(themeName);
        }
    }

    const reducer = (state: Theme, theme: Theme) => {
        if (state !== theme) {
            const dark = theme === Theme.dark || (theme === Theme.system && window.matchMedia('(prefers-color-scheme: dark)').matches);
            toggleTheme("dark", dark);
            toggleTheme("light", !dark);
            localStorage.theme = theme;
        }
        return theme;
    }
    const [theme, setTheme] = useReducer(reducer, initialTheme);
    return [theme, setTheme];
}

export default useTheme;