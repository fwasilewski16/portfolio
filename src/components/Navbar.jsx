import { useSpring, animated } from "@react-spring/web";
import { useEffect, useState } from "react";

function NavbarButton(props) {
  return (
    <button
      className={`z-50 h-10 w-20 font-poppins capitalize tracking-wider md:w-32 md:text-lg md:font-medium ${props.text} transition`}
      onClick={() => {
        props.disableAnimation();
        props.setSectionInView(props.name);
        props.scroll();
      }}
    >
      {props.name}
    </button>
  );
}

export default function Navbar(props) {
  const [lockTimeout, setLockTimeout] = useState(null);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const [springProps, api] = useSpring(
    () => ({
      from: { left: "4px" },
      config: { tension: 170, friction: 20 },
    }),
    [],
  );

  function disableAnimation() {
    if (lockTimeout) {
      clearTimeout(lockTimeout);
    }
    props.setAnimationLocked(true);
    const timeout = setTimeout(() => props.setAnimationLocked(false), 500);
    setLockTimeout(timeout);
  }

  useEffect(() => {
    function adjustWidth() {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener("resize", adjustWidth);

    return () => window.removeEventListener("resize", adjustWidth);
  }, []);

  useEffect(() => {
    props.sectionInView === "home" && api.start({ left: "4px" });
    props.sectionInView === "about" &&
      api.start({ left: screenWidth > 767 ? "140px" : "92px" });
    props.sectionInView === "projects" &&
      api.start({ left: screenWidth > 767 ? "276px" : "180px" });
    props.sectionInView === "contact" &&
      api.start({ left: screenWidth > 767 ? "412px" : "268px" });
  }, [props.sectionInView, screenWidth, api]);

  return (
    <nav className="fixed z-50 flex h-16 w-full flex-col items-center justify-center">
      <div className="relative flex gap-2 rounded-lg border border-[#187fdd] bg-[#eef7ff] p-1 shadow-xl">
        <NavbarButton
          name={"home"}
          text={props.sectionInView === "home" ? "text-white" : "text-black"}
          scroll={props.welcomeRefScrollFunction}
          disableAnimation={disableAnimation}
          setSectionInView={props.setSectionInView}
        />
        <NavbarButton
          name={"about"}
          text={props.sectionInView === "about" ? "text-white" : "text-black"}
          scroll={props.aboutRefScrollFunction}
          disableAnimation={disableAnimation}
          setSectionInView={props.setSectionInView}
        />
        <NavbarButton
          name={"projects"}
          text={
            props.sectionInView === "projects" ? "text-white" : "text-black"
          }
          scroll={props.projectsRefScrollFunction}
          disableAnimation={disableAnimation}
          setSectionInView={props.setSectionInView}
        />
        <NavbarButton
          name={"contact"}
          text={props.sectionInView === "contact" ? "text-white" : "text-black"}
          scroll={props.contactRefScrollFunction}
          disableAnimation={disableAnimation}
          setSectionInView={props.setSectionInView}
        />
        <animated.div
          style={springProps}
          className="absolute flex h-10 w-20 items-center justify-center md:w-32"
        >
          <div className="h-9 w-20 rounded-lg bg-[#187fdd] shadow-inner md:w-28" />
        </animated.div>
      </div>
    </nav>
  );
}
