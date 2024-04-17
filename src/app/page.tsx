"use client";
import { useState } from "react";
import { VisData, VisDataSetters } from "./types";
import Content from "./ui/Content/Content";
import TitleCard from "./ui/TitleCard/TitleCard";


function Page () {

  const [abt, setAbt] = useState<number|undefined>(undefined);
  const [exp, setExp] = useState<number|undefined>(undefined);
  const [project, setProject] = useState<number|undefined>(undefined);

  const visData: VisData = { abt, exp, project };
  const visDataSetter: VisDataSetters = { abt: setAbt, exp: setExp, project: setProject };

  return (
    <main className="main">
      <TitleCard visData={visData}/>
      <Content visDataSetter={visDataSetter}/>
    </main>
  );
}

export default Page; 