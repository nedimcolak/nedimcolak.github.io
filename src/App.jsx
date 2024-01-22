import { useState } from "react";
import "./App.css";

import experiences from "../experiences";
import WorkExperience from "./components/WorkExperience";
import LinkIcon from "./assets/link.svg";
import Project from "./components/Project";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header className="mb-28"></header>
      <div className="introduction font-light text-left mb-32">
        <span className="text-base mb-4">Hey, I'm</span>
        <h1 className="fullname text-8xl font-medium mb-6">Nedim Čolak</h1>
        <p className="text-lg leading-normal">
          I'm a software engineer based in Toronto, Canada and also a
          communication and journalism student. I enjoy creating things that
          live on the internet, whether that be websites, applications, or
          anything in between. I have been freelancing for a year now while
          studying at the university and I've manage to gain a decent amount of
          experience and valuable knowledge from all different kinds of fields
          throughout my projects/work.
        </p>
        <div className="cta flex flex-row gap-3 items-center mt-10">
          <a href="#">Say hi</a>
          <span> {"=>"} </span>
        </div>
      </div>
      <div className="experience flex flex-row gap-24 items-start">
        <h2 className="text-lg uppercase font-light">Experience</h2>
        <div className="flex flex-col gap-14 items-start w-full">
          {experiences.map((exp, index) => (
            <WorkExperience key={index} {...exp} />
          ))}
        </div>
      </div>
      <hr className="my-24" />
      <div className="featured-projects flex flex-col items-start w-full gap-12">
        <h2 className="text-lg uppercase font-light">Projects</h2>
        <div className="grid grid-cols-2 gap-14">
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
        </div>
      </div>
      <hr className="my-24" />
    </>
  );
}

export default App;
