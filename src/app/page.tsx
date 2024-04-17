"use client";
import { useRef, useState } from "react";
import { VisData, VisDataSetter } from "./types";
import Content from "./ui/Content/Content";
import TitleCard from "./ui/TitleCard/TitleCard";


function Page () {

  const [abt, setAbt] = useState<number>(0);
  const [exp, setExp] = useState<number>(0);
  const [project, setProject] = useState<number>(0);

  const visData: VisData = { abt, exp, project };
  const visDataSetter: VisDataSetter = { abt: setAbt, exp: setExp, project: setProject };

  return (
    <main className="main">
      <TitleCard visData={visData}/>
      <Content visDataSetter={visDataSetter}/>
    </main>
  );
}

export default Page; 