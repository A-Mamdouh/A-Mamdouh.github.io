import { ComponentType } from "react";
import { ProjectMotif } from "@/app/data/content";
import AskierMotif from "./AskierMotif";
import EdenMotif from "./EdenMotif";
import MipsMotif from "./MipsMotif";
import PortalMotif from "./PortalMotif";

export const MOTIFS: Record<ProjectMotif, ComponentType> = {
    askier: AskierMotif,
    eden: EdenMotif,
    mips: MipsMotif,
    portal: PortalMotif,
};
