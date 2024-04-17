"use client";

import { Dispatch, SetStateAction } from "react";

export type VisDataSetter = {
    abt: Dispatch<SetStateAction<number>>,
    exp: Dispatch<SetStateAction<number>>,
    project: Dispatch<SetStateAction<number>>
};

export type VisData = {
    abt: number,
    exp: number,
    project: number
};

export type RefCallback = (ref: (HTMLElement | null)) => void;