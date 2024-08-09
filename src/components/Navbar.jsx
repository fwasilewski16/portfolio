import { useSpring, animated } from "@react-spring/web";
import { useEffect, useState } from "react";

function NavbarButton(props) {
  return (
    <button
      className={`font-lato z-50 h-9 w-20 capitalize tracking-wider md:w-32 md:text-lg ${props.text} transition`}
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
  const [navbarVisible, setNavbarVisible] = useState(false);

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
    setTimeout(() => {
      setNavbarVisible(true);
    }, 2400);
  }, []);

  useEffect(() => {
    props.sectionInView === "home" && api.start({ left: "0px" });
    props.sectionInView === "about" &&
      api.start({ left: screenWidth > 767 ? "128px" : "80px" });
    props.sectionInView === "projects" &&
      api.start({ left: screenWidth > 767 ? "256px" : "160px" });
    props.sectionInView === "contact" &&
      api.start({ left: screenWidth > 767 ? "384px" : "240px" });
  }, [props.sectionInView, screenWidth, api]);

  return (
    <nav className="fixed z-50 flex h-24 w-full flex-col items-center justify-center">
      <div
        className={`relative flex overflow-hidden rounded-lg border border-[#187fdd] bg-[#eef7ff] ${navbarVisible ? "translate-y-0 opacity-100" : "-translate-y-1/2 opacity-0"} transition duration-[800ms]`}
      >
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
          className="absolute flex h-10 w-20 items-center justify-center bg-[#187fdd] md:w-32"
        ></animated.div>
      </div>
    </nav>
  );
}
