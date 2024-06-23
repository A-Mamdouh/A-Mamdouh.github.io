"use client";

import { Dispatch, SetStateAction } from "react";

export type IntersectionType = number | undefined;

export type VisDataSetter = Dispatch<SetStateAction<IntersectionType>>;

export type VisDataSetters = {
    abt: VisDataSetter,
    exp: VisDataSetter,
    currentProject: VisDataSetter
    project: VisDataSetter
};

export type VisData = {
    abt: IntersectionType,
    exp: IntersectionType,
    currentProject: IntersectionType
    project: IntersectionType
};

export enum Theme {
    light,
    dark,
    system
};

export type RefCallback = (ref: (HTMLElement | null)) => void;