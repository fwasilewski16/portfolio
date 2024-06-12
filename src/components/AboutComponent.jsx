import { frontendIcon, backendIcon, toolsIcon } from "../UI/Icons";
import SkillsIcon from "../UI/SkillsIcon";
import illustration from "../assets/illustration.webp";

import { useInView } from "react-intersection-observer";

export default function AboutComponent(props) {
  const { ref: aboutRef } = useInView({
    threshold: 0.6,
    onChange: (inView) => {
      inView && props.setInView("about");
    },
  });
  return (
    <section
      ref={aboutRef}
      className="flex w-full flex-col items-center gap-16 pt-14 font-poppins "
    >
      <h2 className="text-4xl font-semibold">About me:</h2>
      <div className="flex justify-center gap-16 text-lg">
        <img src={illustration} className="w-80" />
        <div className="flex max-w-[450px] flex-col justify-center gap-4 tracking-wider">
          <p className="font-semibold">
            Hi, my name is Filip and I'm a self-taught full stack developer.
          </p>
          <p className="text-sm">
            I'm passionate about creating pixel-perfect, high performing
            websites and reliable backend systems.
          </p>
          <p className="text-sm">
            My main stack currently is React in combination in Tailwind CSS, and
            Node.js
          </p>
          <p className="text-sm">Based in London, UK.</p>
        </div>
      </div>
      <h2 className="font-poppins text-4xl font-semibold">My skills:</h2>
      <div className="flex w-full justify-center">
        <div className="flex w-[1000px] gap-14">
          <div className="flex w-1/3 flex-col items-center gap-6">
            {frontendIcon}
            <p className="font-poppins font-semibold">Front-End</p>
            <div className="h-[1px] w-full bg-black" />
            <div className="flex w-full flex-wrap justify-center gap-3">
              <SkillsIcon src={"html"} name={"HMTL5"} />
              <SkillsIcon src={"css"} name={"CSS3"} />
              <SkillsIcon src={"js"} name={"JavaScript"} />
              <SkillsIcon src={"react"} name={"React"} />
              <SkillsIcon src={"redux"} name={"Redux"} />
              <SkillsIcon src={"tailwind"} name={"Tailwind CSS"} />
            </div>
          </div>
          <div className="flex w-1/3 flex-col items-center gap-6">
            {backendIcon}
            <p className="font-poppins font-semibold">Back-End</p>
            <div className="h-[1px] w-full bg-black" />
            <div className="flex w-full flex-wrap justify-center gap-3">
              <SkillsIcon src={"nodejs"} name={"Node.js"} />
              <SkillsIcon src={"express"} name={"Express"} />
              <SkillsIcon src={"mongodb"} name={"MongoDB"} />
              <SkillsIcon src={"mongodb"} name={"Mongoose"} />
            </div>
          </div>
          <div className="flex w-1/3 flex-col items-center gap-6">
            {toolsIcon}
            <p className="font-poppins font-semibold">Tools</p>
            <div className="h-[1px] w-full bg-black" />
            <div className="flex w-full flex-wrap justify-center gap-3">
              <SkillsIcon src={"git"} name={"Git"} />
              <SkillsIcon src={"github"} name={"Github"} />
              <SkillsIcon src={"netlify"} name={"Netlify"} />
              <SkillsIcon src={"vscode"} name={"Visual Studio Code"} />
              <SkillsIcon src={"postman"} name={"Postman"} />
              <SkillsIcon src={"firebase"} name={"Firebase"} />
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </section>
  );
}
