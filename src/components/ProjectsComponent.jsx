import riclae from "../assets/riclae.webp";
import encore from "../assets/encore.webp";
import dishPal from "../assets/dishpal.webp";
import backend from "../assets/backend.webp";

import { useInView } from "framer-motion";
import { useEffect } from "react";

function ProjectComponent(props) {
  return (
    <div className="group flex w-full justify-center font-poppins">
      <div className="flex flex-col-reverse gap-10 px-5 xl:flex-row xl:px-0">
        <div className="flex max-w-[760px] flex-col gap-4 xl:max-w-[400px]">
          <h4 className="text-2xl font-medium">{props.title}</h4>
          {props.description.map((description, index) => (
            <p key={index} className="text-sm">
              {description}
            </p>
          ))}
          <button className="w-fit rounded-lg border border-black px-6 py-1 font-semibold">
            <a>VISIT</a>
          </button>
        </div>
        <div className="flex max-w-[100dvw] items-center md:max-w-[760px]">
          <img
            loading={"lazy"}
            src={props.img}
            className="w-full rounded-lg object-cover transition group-hover:scale-[1.01] group-hover:shadow-xl xl:h-full"
          />
        </div>
      </div>
    </div>
  );
}

export default function ProjectsComponent(props) {
  const isInView = useInView(props.projectsRef, { amount: 0.1 });

  useEffect(() => {
    isInView && !props.animationLocked && props.setSectionInView("projects");
  }, [isInView]);

  return (
    <section
      ref={props.projectsRef}
      className="flex w-full flex-col items-center border-t border-black"
    >
      <h2 className="my-14 font-poppins text-2xl font-medium md:text-4xl">
        My projects
      </h2>
      <div className="my-10 flex flex-col gap-10 xl:gap-32">
        <ProjectComponent
          img={riclae}
          title={"Riclae.art"}
          description={[
            "Riclae.art is an e-commerce platform I built for my girlfriend to sell her prints and paintings.",
            "It features an OAuth-protected admin dashboard that allows her to add, delete, and edit products. Product data is stored in MongoDB, and images are hosted on Google Firebase. Payments are processed via Stripe.",
            "The platform also utilizes the @emailjs/browser React library to handle email communication directly through the contact page and redux-persist to save cart content. The platform uses my back-end server to handle all database related requests and Stripe payments.",
          ]}
        />
        <ProjectComponent
          img={encore}
          title={"ENCORE"}
          description={[
            "ENCORE is a mock-up e-commerce platform designed for purchasing tickets to UK-based live events.",
            "Users can follow their favorite artists and read live music-related blogs. The platform includes a search bar for finding events and artists by typing keywords. Additionally, it features a mock-up login system that allows users to log in, follow artists, and keep track of events.",
            "All live events are store in MongoDB and all requests are handled by my back-end server. The website is modeled closely after DICE and Songkick in terms of features.",
          ]}
        />
        <ProjectComponent
          img={dishPal}
          title={"DishPal"}
          description={[
            "DishPal is a mock-up website which allows users to get recipes based on ingredients which they already have. The recipes can be also filtered based on meal type, calories intake, preperation time, couisine type and diet type.",
            "The platform uses EDAMAM Api for search auto-fill and collecting recipes, react-spring library for all animation and redux-persist for saving recipes.",
          ]}
        />
        <div className="group flex w-full justify-center font-poppins">
          <div className="flex flex-col-reverse gap-10 px-5 xl:flex-row xl:px-0">
            <div className="flex max-w-[760px] flex-col gap-4 xl:max-w-[400px]">
              <h4 className="text-2xl font-medium">Backend server</h4>
              <p className="text-sm">
                My backend server, hosted on Fly.io, is a Node.js application
                designed to support my two frontend projects: Riclae.art and
                ENCORE. It connects to a MongoDB database and includes the
                following functionalities:
              </p>
              <p className="my-2 text-sm font-semibold">Riclae.art:</p>
              <p className="text-sm">
                - Allows adding, editing, and deleting products in the database
              </p>
              <p className="text-sm">
                - Supports adding images to products, which are directly
                uploaded to Firebase Storage
              </p>
              <p className="text-sm">
                - Handles GET requests from Riclae.art to retrieve and send all
                products from the database
              </p>
              <p className="text-sm">
                - Manages payments through Stripe, ensuring secure and efficient
                transaction handling
              </p>
              <p className="my-2 text-sm font-semibold">ENCORE:</p>
              <p className="text-sm">
                - Handles GET requests from ENCORE to retrieve and send all live
                events data from the database
              </p>
              <p className="text-sm">
                - Handles search results using regular expressions to filter
                through all events in the database and returns relevant results
              </p>
            </div>
            <div className="flex w-full max-w-[760px] items-center justify-center rounded-lg bg-[#eef7ff] transition group-hover:scale-[1.01] group-hover:shadow-xl">
              <img loading={"lazy"} src={backend} className="h-2/3" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
