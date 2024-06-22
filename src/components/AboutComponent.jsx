import { useEffect } from "react";
import { frontendIcon, backendIcon, toolsIcon } from "../UI/Icons";
import SkillsIcon from "../UI/SkillsIcon";
import face from "../assets/face.webp";
import { useInView } from "framer-motion";

export default function AboutComponent(props) {
  const isInView = useInView(props.aboutRef, { amount: 0.3 });

  useEffect(() => {
    isInView && !props.animationLocked && props.setSectionInView("about");
  }, [isInView]);

  return (
    <section
      ref={props.aboutRef}
      className="flex w-full flex-col items-center font-poppins"
    >
      <h2 className="my-8 text-3xl font-medium md:my-14 md:text-4xl">
        About me
      </h2>
      <div className="flex flex-col-reverse items-center justify-center gap-8 text-lg md:mb-14 md:flex-row md:gap-14">
        <img
          src={face}
          className="mx-5 mb-8 w-72 rounded-xl object-cover brightness-105 md:mb-0"
        />
        <div className="flex max-w-[500px] flex-col justify-center gap-6 px-5 text-center tracking-wide md:max-w-[450px] md:text-left">
          <p className="font-medium">
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
      <h2 className="mb-8 font-poppins text-3xl font-medium md:mb-14 md:text-4xl">
        My skills
      </h2>
      <div className="mb-14 flex w-full justify-center px-5">
        <div className="flex w-[1000px] flex-col gap-8 md:flex-row md:gap-14">
          <div className="flex flex-col items-center gap-6 md:w-1/3">
            {frontendIcon}
            <p className="font-poppins font-semibold">Front-End</p>
            <div className="flex w-full flex-wrap justify-center gap-3">
              <SkillsIcon src={"html"} name={"HMTL5"} />
              <SkillsIcon src={"css"} name={"CSS3"} />
              <SkillsIcon src={"js"} name={"JavaScript"} />
              <SkillsIcon src={"react"} name={"React"} />
              <SkillsIcon src={"redux"} name={"Redux"} />
              <SkillsIcon src={"tailwind"} name={"Tailwind CSS"} />
            </div>
          </div>
          <div className="flex flex-col items-center gap-6 md:w-1/3">
            {backendIcon}
            <p className="font-poppins font-semibold">Back-End</p>
            <div className="flex w-full flex-wrap justify-center gap-3">
              <SkillsIcon src={"nodejs"} name={"Node.js"} />
              <SkillsIcon src={"express"} name={"Express"} />
              <SkillsIcon src={"mongodb"} name={"MongoDB"} />
              <SkillsIcon src={"mongodb"} name={"Mongoose"} />
            </div>
          </div>
          <div className="flex flex-col items-center gap-6 md:w-1/3">
            {toolsIcon}
            <p className="font-poppins font-semibold">Tools</p>
            <div className="flex w-full flex-wrap justify-center gap-3">
              <SkillsIcon src={"git"} name={"Git"} />
              <SkillsIcon src={"github"} name={"Github"} />
              <SkillsIcon src={"netlify"} name={"Netlify"} />
              <SkillsIcon src={"postman"} name={"Postman"} />
              <SkillsIcon src={"firebase"} name={"Firebase"} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
