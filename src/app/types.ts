"use client";

import { Dispatch, SetStateAction } from "react";

export const SECTION_IDS = [
    "about",
    "projects",
    "experience",
    "skills",
    "education",
    "contact",
] as const;

export type SectionId = (typeof SECTION_IDS)[number];

export type IntersectionType = number | undefined;

export type VisData = Record<SectionId, IntersectionType>;

export type VisDataSetter = Dispatch<SetStateAction<IntersectionType>>;

export type VisDataSetters = Record<SectionId, VisDataSetter>;

export enum Theme {
    light,
    dark,
    system,
}

export type RefCallback = (ref: HTMLElement | null) => void;
