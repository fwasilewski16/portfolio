import riclae from "../assets/riclae.webp";
import encore from "../assets/encore.webp";
import dishPal from "../assets/dishpal.webp";
import backend from "../assets/backend.webp";

import { useInView } from "react-intersection-observer";

function ProjectComponent(props) {
  return (
    <div className="flex w-full flex-col items-center gap-8 py-8 font-poppins tracking-wide">
      <h4 className="text-3xl font-semibold">{props.title}</h4>
      <div
        className={`flex ${props.reverse ? "flex-row-reverse" : "flex-row"}`}
      >
        <div className="max-w-[600px]">
          <img
            loading={"lazy"}
            src={props.img}
            className="h-full rounded-lg object-cover"
          />
        </div>
        <div className="flex max-w-[600px] flex-col items-center justify-center px-12">
          {props.description.map((description, index) => (
            <p key={index} className="mt-1 px-1 text-justify leading-8">
              {description}
            </p>
          ))}
        </div>
      </div>
      <button className="w-fit rounded-lg border border-black px-7 py-1 text-lg font-semibold">
        <a>VISIT</a>
      </button>
    </div>
  );
}

export default function ProjectsComponent(props) {
  const { ref: projectsRef } = useInView({
    threshold: 0.1,
    onChange: (inView) => {
      inView && props.setInView("projects");
    },
  });

  return (
    <section ref={projectsRef} className="flex w-full flex-col items-center">
      <h2 className="my-20 font-poppins text-4xl font-semibold">
        My projects:
      </h2>
      <ProjectComponent
        img={riclae}
        title={"Riclae.art"}
        description={[
          "Riclae.art is an e-commerce platform I built for my girlfriend to sell her prints and paintings.",
          "It features an OAuth-protected admin dashboard that allows her to add, delete, and edit products. Product data is stored in MongoDB, and images are hosted on Google Firebase. Payments are processed via Stripe.",
          "The platform also utilizes the @emailjs/browser React library to handle email communication directly through the contact page. The platform uses my back-end server to handle all database related requests and Stripe payment.",
        ]}
      />
      <ProjectComponent
        img={encore}
        reverse={true}
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
      <div className="flex w-full flex-col items-center gap-8 py-10 font-poppins tracking-wide">
        <h4 className="text-3xl font-semibold">Backend server</h4>
        <div className="flex flex-col items-center">
          <div className="flex">
            <div className="max-w-[600px] px-12 text-justify leading-8 tracking-wide">
              <p>
                My backend server, hosted on Fly.io, is a Node.js application
                designed to support my two frontend projects: Riclae.art and
                ENCORE. It connects to a MongoDB database and includes the
                following functionalities:
              </p>
              <p className="my-2 w-full text-center font-bold">Riclae.art:</p>
              <p>
                - Allows adding, editing, and deleting products in the database
              </p>
              <p>
                - Supports adding images to products, which are directly
                uploaded to Firebase Storage
              </p>
              <p>
                - Handles GET requests from Riclae.art to retrieve and send all
                products from the database
              </p>
              <p>
                - Manages payments through Stripe, ensuring secure and efficient
                transaction handling
              </p>
              <p className="my-2 w-full text-center font-bold">ENCORE:</p>
              <p>
                - Handles GET requests from ENCORE to retrieve and send all live
                events data from the database
              </p>
              <p>
                - Handles search results using regular expressions to filter
                through all events in the database and returns relevant results
              </p>
            </div>
            <div className="mb-8 max-h-[362px] max-w-[600px]">
              <img
                loading={"lazy"}
                src={backend}
                className="h-full rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
        <button className="w-fit rounded-lg border border-black px-7 py-1 text-lg font-semibold">
          <a>VISIT</a>
        </button>
      </div>
    </section>
  );
}
