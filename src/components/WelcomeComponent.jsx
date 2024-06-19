import { useEffect, useState } from "react";
import { linkedInIcon, githubIcon } from "../UI/Icons";
import { useInView } from "framer-motion";

import arrow from "../assets/arrow.webp";

function Icon(props) {
  return (
    <div className="group">
      <img
        className="transition duration-200 ease-in-out group-hover:-translate-y-4"
        src={props.src}
      />
    </div>
  );
}

export default function WelcomeComponent(props) {
  const [colour, setColour] = useState(1);

  const isInView = useInView(props.welcomeRef, { amount: 0.5 });

  useEffect(() => {
    const timeout = setTimeout(() => {
      setColour((prevColour) => {
        if (prevColour === 13) {
          return 1;
        } else {
          return prevColour + 1;
        }
      });
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [colour]);

  useEffect(() => {
    isInView && props.setSectionInView("home");
  }, [isInView]);

  return (
    <section
      ref={props.welcomeRef}
      className="relative flex min-h-[100dvh] flex-col items-center justify-center gap-7 bg-[#EEF7FF] font-poppins font-medium sm:gap-14"
    >
      <div className="flex flex-col gap-2 text-center text-xl sm:text-3xl">
        <div className="flex items-center justify-center gap-2">
          <p>Hi, I’m</p>
          <div className="relative flex h-10 w-[180px] overflow-hidden rounded-lg sm:h-12 sm:w-[258px]">
            <div
              className={`absolute bottom-0 left-0 right-0 top-0 z-10 bg-[#187FDD] ${colour === 2 ? "translate-y-0" : "translate-y-full"} transition duration-300 ease-in-out`}
            />
            <div
              className={`absolute bottom-0 left-0 right-0 top-0 z-10 bg-[#65FD8E] ${colour >= 4 && colour <= 6 ? "translate-y-0" : "-translate-y-full"} transition duration-500 ease-in-out`}
            />
            <div
              className={`absolute bottom-0 left-0 right-0 top-0 z-10 bg-[#112C45] ${colour >= 8 && colour <= 12 ? "translate-x-0" : "-translate-x-[105%]"} transition duration-300 ease-in-out`}
            />
            <div className="absolute bottom-0 left-0 right-0 top-0 rounded-lg bg-[#51DFDB]" />
            <div className="absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center">
              <p className="z-20 text-white">Filip Wasilewski</p>
            </div>
          </div>
        </div>
        <p>I'm a full-stack web developer.</p>
      </div>
      <div className="flex gap-4">
        {linkedInIcon}
        {githubIcon}
      </div>
      <div className="flex flex-col items-center gap-5">
        <p className="text-xl">Tech stack:</p>
        <div className="flex gap-3 px-5 md:gap-5">
          <Icon src={"https://skillicons.dev/icons?i=html"} />
          <Icon src={"https://skillicons.dev/icons?i=css"} />
          <Icon src={"https://skillicons.dev/icons?i=js"} />
          <Icon src={"https://skillicons.dev/icons?i=react"} />
          <Icon src={"https://skillicons.dev/icons?i=tailwind"} />
          <Icon src={"https://skillicons.dev/icons?i=mongodb"} />
          <Icon src={"https://skillicons.dev/icons?i=nodejs"} />
        </div>
      </div>
      <img src={arrow} className="absolute bottom-0 h-10 animate-bounce" />
    </section>
  );
}
