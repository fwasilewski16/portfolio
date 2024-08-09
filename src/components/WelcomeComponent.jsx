import { useEffect, useState } from "react";
import { linkedInIcon, githubIcon } from "../UI/Icons";
import { useInView } from "framer-motion";

import arrow from "../assets/arrow.webp";

function Icon(props) {
  return (
    <div className="group">
      <img
        className="h-10 transition duration-200 ease-in-out group-hover:-translate-y-4"
        src={props.src}
      />
    </div>
  );
}

export default function WelcomeComponent(props) {
  const isInView = useInView(props.welcomeRef, { amount: 0.5 });
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    isInView && props.setSectionInView("home");
  }, [isInView]);

  useEffect(() => {
    setTimeout(() => {
      setTextVisible(true);
    }, 100);
  }, []);

  return (
    <section
      ref={props.welcomeRef}
      className="font-lato relative flex min-h-[100dvh] flex-col items-center justify-center gap-7 bg-[#EEF7FF] tracking-wider sm:gap-14"
    >
      <div className="flex flex-col gap-2 text-center text-xl sm:text-3xl">
        <div className="flex items-center justify-center gap-2">
          <p
            className={`${!textVisible ? "-translate-y-1/2 opacity-0" : "translate-y-0 opacity-100"} transition duration-[800ms]`}
          >
            Hi, I’m
          </p>
          <div
            className={`relative flex h-10 w-[180px] items-center justify-center rounded-lg sm:h-12 sm:w-[245px] ${!textVisible ? "translate-y-1/3 opacity-0" : "translate-y-0 opacity-100"} bg-[#187FDD] transition delay-[800ms] duration-[800ms]`}
          >
            <p className="z-20 text-white">Filip Wasilewski</p>
          </div>
        </div>
        <p
          className={`${!textVisible ? "translate-y-1/3 opacity-0" : "translate-y-0 opacity-100"} transition delay-[1600ms] duration-[800ms]`}
        >
          I'm a full-stack web developer.
        </p>
      </div>
      <div className="flex gap-5">
        <a
          href={"https://www.linkedin.com/in/filip-wasilewski-845591145/"}
          target="_blank"
          className={`${!textVisible ? "-translate-x-1/3 opacity-0" : "translate-y-0 opacity-100"} transition delay-[2400ms] duration-[800ms]`}
        >
          {linkedInIcon}
        </a>
        <a
          href={"https://github.com/fwasilewski16"}
          target="_blank"
          className={`${!textVisible ? "translate-x-1/3 opacity-0" : "translate-y-0 opacity-100"} transition delay-[2400ms] duration-[800ms]`}
        >
          {githubIcon}
        </a>
      </div>
      <div
        className={`flex flex-col items-center gap-8 ${!textVisible ? "translate-y-1/4 opacity-0" : "translate-y-0 opacity-100"} transition delay-[2400ms] duration-[800ms]`}
      >
        <p className="text-2xl">Tech stack:</p>
        <div className="flex min-h-12 gap-3 px-5 md:gap-5">
          <Icon src={"https://skillicons.dev/icons?i=html"} />
          <Icon src={"https://skillicons.dev/icons?i=css"} />
          <Icon src={"https://skillicons.dev/icons?i=js"} />
          <Icon src={"https://skillicons.dev/icons?i=react"} />
          <Icon src={"https://skillicons.dev/icons?i=tailwind"} />
          <Icon src={"https://skillicons.dev/icons?i=mongodb"} />
          <Icon src={"https://skillicons.dev/icons?i=nodejs"} />
        </div>
      </div>
      <img
        src={arrow}
        className={`absolute bottom-0 h-10 animate-bounce ${!textVisible ? "translate-y-full opacity-0" : "translate-y-0 opacity-100"} transition delay-[2400ms] duration-[800ms]`}
      />
    </section>
  );
}
