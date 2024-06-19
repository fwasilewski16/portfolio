import { useInView } from "framer-motion";
import { locationIcon, emailIcon } from "../UI/Icons";
import { useEffect } from "react";

export default function ContactComponent(props) {
  const isInView = useInView(props.contactRef, { amount: 0.8 });

  useEffect(() => {
    isInView
      ? props.setSectionInView("contact")
      : props.sectionInView === "contact" && props.setSectionInView("projects");
  }, [isInView]);

  return (
    <section
      ref={props.contactRef}
      className="flex w-full flex-col items-center pb-14 md:pb-20"
    >
      <div className="w-full max-w-[800px] px-5 xl:max-w-[1200px] xl:px-0">
        <h2 className="my-14 font-poppins text-2xl font-medium md:text-4xl">
          Contact me
        </h2>
        <div className="flex flex-col gap-5 md:flex-row">
          <div className="flex items-center gap-5 pr-5 font-poppins tracking-wider">
            <div className="rounded-full border-2 border-[#187fdd] p-2">
              {locationIcon}
            </div>
            <div>
              <p className="text-xl font-semibold">Location</p>
              <p className="text-lg">London, UK</p>
            </div>
          </div>
          <div className="flex items-center gap-5 font-poppins tracking-wider md:px-5">
            <div className="rounded-full border-2 border-[#187fdd] p-2">
              {emailIcon}
            </div>
            <div>
              <p className="text-xl font-semibold">E-mail</p>
              <a href={"mailto:your.email@example.com"} className="text-lg">
                filipwasilewski1@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
