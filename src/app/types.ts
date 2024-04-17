"use client";

import { Dispatch, SetStateAction } from "react";

export type IntersectionType = number | undefined;

export type VisDataSetter = Dispatch<SetStateAction<IntersectionType>>;

export type VisDataSetters = {
    abt: VisDataSetter,
    exp: VisDataSetter,
    project: VisDataSetter
};

export type VisData = {
    abt: IntersectionType,
    exp: IntersectionType,
    project: IntersectionType
};

export type RefCallback = (ref: (HTMLElement | null)) => void;