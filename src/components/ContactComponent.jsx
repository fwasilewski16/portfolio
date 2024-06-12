import { useInView } from "react-intersection-observer";
import { locationIcon, emailIcon } from "../UI/Icons";

export default function ContactComponent(props) {
  const { ref: contactRef } = useInView({
    threshold: 0.5,
    onChange: (inView) => {
      inView ? props.setInView("contact") : props.setInView("projects");
    },
  });
  return (
    <section
      ref={contactRef}
      className="flex w-full flex-col items-center pb-20"
    >
      <div className="w-full max-w-[1100px]">
        <h2 className="my-20 font-poppins text-4xl font-semibold">
          Contact me:
        </h2>
        <div className="flex">
          <div className="flex items-center gap-5 pr-5 font-poppins tracking-wider">
            <div className="rounded-full border-2 border-[#187fdd] p-3">
              {locationIcon}
            </div>
            <div>
              <p className="text-xl font-semibold">Location</p>
              <p className="text-lg">London, UK</p>
            </div>
          </div>
          <div className="flex items-center gap-5 px-5 font-poppins tracking-wider">
            <div className="rounded-full border-2 border-[#187fdd] p-3">
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
