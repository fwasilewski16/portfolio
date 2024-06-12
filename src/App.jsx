import { useState } from "react";
import AboutComponent from "./components/AboutComponent";
import Navbar from "./components/Navbar";
import ProjectsComponent from "./components/ProjectsComponent";
import WelcomeComponent from "./components/WelcomeComponent";
import ContactComponent from "./components/ContactComponent";
import Footer from "./components/Footer";

function App() {
  const [inView, setInView] = useState("home");

  return (
    <>
      <Navbar inView={inView} />
      <WelcomeComponent setInView={setInView} />
      <AboutComponent setInView={setInView} />
      <ProjectsComponent setInView={setInView} />
      <ContactComponent setInView={setInView} />
      <Footer />
    </>
  );
}

export default App;
