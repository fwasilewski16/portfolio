import { useSpring, animated } from "@react-spring/web";
import { useEffect } from "react";

function NavbarButton(props) {
  return (
    <button
      className={`z-50 h-10 w-32 font-poppins text-lg font-medium tracking-wider ${props.text} transition`}
    >
      {props.name}
    </button>
  );
}

export default function Navbar({ inView }) {
  const [props, api] = useSpring(
    () => ({
      from: { left: "4px" },
    }),
    [],
  );

  useEffect(() => {
    inView === "home" && api.start({ left: "4px" });
    inView === "about" && api.start({ left: "140px" });
    inView === "projects" && api.start({ left: "276px" });
    inView === "contact" && api.start({ left: "412px" });
  }, [inView]);

  return (
    <div className="fixed z-50 flex h-16 w-full items-center justify-center">
      <div className="relative flex gap-2 rounded-full border border-[#187fdd] bg-[#eef7ff] p-1 shadow-xl">
        <NavbarButton
          name={"Home"}
          text={inView === "home" ? "text-white" : "text-black"}
        />
        <NavbarButton
          name={"About"}
          text={inView === "about" ? "text-white" : "text-black"}
        />
        <NavbarButton
          name={"Projects"}
          text={inView === "projects" ? "text-white" : "text-black"}
        />
        <NavbarButton
          name={"Contact"}
          text={inView === "contact" ? "text-white" : "text-black"}
        />
        <animated.div
          style={props}
          className="absolute flex h-10 w-32 items-center justify-center"
        >
          <div className="h-9 w-28 rounded-full border border-black bg-[#187fdd]" />
        </animated.div>
      </div>
    </div>
  );
}
