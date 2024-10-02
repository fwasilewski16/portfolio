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
  const isInView = useInView(props.welcomeRef, { amount: 1 });
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
      className="relative flex min-h-[100dvh] flex-col items-center justify-center gap-7 bg-[#EEF7FF] font-lato tracking-wider sm:gap-14"
    >
      <div className="flex flex-col gap-2 text-center text-xl sm:text-3xl">
        <div className="flex items-center justify-center gap-2">
          <p
            className={`${!textVisible ? "-translate-y-1/2 opacity-0" : "translate-y-0 opacity-100"} transition duration-500`}
          >
            Hi, I’m
          </p>

          <p
            className={`${!textVisible ? "translate-y-1/3 opacity-0" : "translate-y-0 opacity-100"} transition delay-[800ms] duration-500`}
          >
            Filip Wasilewski
          </p>
        </div>
        <p
          className={`${!textVisible ? "translate-y-1/3 opacity-0" : "translate-y-0 opacity-100"} transition delay-[1600ms] duration-500`}
        >
          I'm a full-stack web developer.
        </p>
      </div>
      <div className="flex gap-5">
        <a
          href={"https://www.linkedin.com/in/filip-wasilewski-845591145/"}
          target="_blank"
          className={`${!textVisible ? "-translate-x-1/3 opacity-0" : "translate-y-0 opacity-100"} transition delay-[2400ms] duration-500`}
        >
          {linkedInIcon}
        </a>
        <a
          href={"https://github.com/fwasilewski16"}
          target="_blank"
          className={`${!textVisible ? "translate-x-1/3 opacity-0" : "translate-y-0 opacity-100"} transition delay-[2400ms] duration-500`}
        >
          {githubIcon}
        </a>
      </div>
      <div
        className={`flex flex-col items-center gap-8 ${!textVisible ? "translate-y-1/4 opacity-0" : "translate-y-0 opacity-100"} transition delay-[2400ms] duration-500`}
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
