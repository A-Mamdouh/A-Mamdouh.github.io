"use client";

import { Dispatch, useEffect, useReducer } from "react";
import { Theme } from "../types";

const STORAGE_KEY = "theme";

const themeFromStorage = (): Theme => {
    if (typeof window === "undefined") return Theme.system;
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "dark") return Theme.dark;
    if (stored === "light") return Theme.light;
    return Theme.system;
};

function useTheme(initialTheme: Theme = Theme.system): [Theme, Dispatch<Theme>] {
    const toggleTheme = (themeName: string, value: boolean) => {
        document.documentElement.classList.toggle(themeName, value);
    };

    const applyTheme = (theme: Theme, persist: boolean) => {
        const dark =
            theme === Theme.dark ||
            (theme === Theme.system && window.matchMedia("(prefers-color-scheme: dark)").matches);
        toggleTheme("dark", dark);
        toggleTheme("light", !dark);
        if (persist) {
            if (theme === Theme.system) {
                window.localStorage.removeItem(STORAGE_KEY);
            } else {
                window.localStorage.setItem(STORAGE_KEY, theme === Theme.dark ? "dark" : "light");
            }
        }
    };

    const reducer = (state: Theme, theme: Theme) => {
        if (state !== theme) {
            applyTheme(theme, true);
        }
        return theme;
    };
    const [theme, setTheme] = useReducer(reducer, initialTheme);

    // The persisted preference lives in localStorage, which only exists in the
    // browser — this build is statically exported, so it can't be read during
    // the reducer's initializer (that also runs at build time). Apply it once
    // after mount instead.
    useEffect(() => {
        const stored = themeFromStorage();
        if (stored !== theme) {
            setTheme(stored);
        } else {
            applyTheme(stored, false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return [theme, setTheme];
}

export default useTheme;
