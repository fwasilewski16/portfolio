import { useRef, useState } from "react";
import AboutComponent from "./components/AboutComponent";
import Navbar from "./components/Navbar";
import ProjectsComponent from "./components/ProjectsComponent";
import WelcomeComponent from "./components/WelcomeComponent";
import ContactComponent from "./components/ContactComponent";
import Footer from "./components/Footer";

function App() {
  const [sectionInView, setSectionInView] = useState("home");
  const [animationLocked, setAnimationLocked] = useState(false);

  const welcomeRef = useRef();
  const aboutRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();

  return (
    <>
      <Navbar
        sectionInView={sectionInView}
        setSectionInView={setSectionInView}
        animationLocked={animationLocked}
        setAnimationLocked={setAnimationLocked}
        welcomeRefScrollFunction={() =>
          welcomeRef.current.scrollIntoView({ behavior: "smooth" })
        }
        aboutRefScrollFunction={() =>
          aboutRef.current.scrollIntoView({ behavior: "smooth" })
        }
        projectsRefScrollFunction={() =>
          projectsRef.current.scrollIntoView({ behavior: "smooth" })
        }
        contactRefScrollFunction={() =>
          contactRef.current.scrollIntoView({ behavior: "smooth" })
        }
      />
      <WelcomeComponent
        setSectionInView={setSectionInView}
        welcomeRef={welcomeRef}
      />
      <AboutComponent
        setSectionInView={setSectionInView}
        aboutRef={aboutRef}
        animationLocked={animationLocked}
      />
      <ProjectsComponent
        setSectionInView={setSectionInView}
        projectsRef={projectsRef}
        animationLocked={animationLocked}
      />
      <ContactComponent
        sectionInView={sectionInView}
        setSectionInView={setSectionInView}
        contactRef={contactRef}
      />
      <Footer />
    </>
  );
}

export default App;
