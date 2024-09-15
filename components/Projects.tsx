import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects: React.FC<{}> = () => {
  return (
    <section id="projects">
      <h2 className="text-white font-semibold text-center text-6xl pt-[35px]">
        PROJECTS
      </h2>
      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
        EXPLORE NOW
      </p>
      <div className=" container mx-auto 2xl  ">
        <div className="flex-col flex md:flex-row  mt-7">
          <Link
            href="https://app.dentaledr.com/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/dentalemr.png"
                height={170}
                width={170}
                alt="First Project"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">DentalEmr</p>
                <p className="text-gray-500 text-[10px]">
                  A dental app used to manage day to day records of patients and
                  doctors and other dental flows developed using React js.
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="https://events.piqsol.com/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/piqsol.png"
                height={170}
                width={170}
                alt="HireSide"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">
                  Piqsol Events
                </p>
                <p className="text-gray-500 text-[10px]">
                  Explore Amazing Global Events with NFT Ticketing: Unique,
                  Secure Access Merging. Digital Innovation and Cultural
                  Experiences. Developed using Next JS 14
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex-col flex md:flex-row ">
          <Link
            href="https://wwhub.weatherwalay.com/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5 mt-3">
              <Image
                src="/wwhub.png"
                height={170}
                width={170}
                alt="wwhub"
              />
              <div className=" p-3 ">
                <p className="text-white font-semibold text-xl">
                  WWHUB
                </p>
                <p className="text-gray-500 text-[10px]">
                  Developed the WWHUB website using React.js.
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="https://aqg.innovotechnologies.com/admin/login"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/aqgnow.png"
                height={170}
                width={170}
                alt="aqgnow"
              />
              <div className="p-3 ">
                <p className="text-white font-semibold text-xl">AQG NOW</p>
                <p className="text-gray-500 text-[10px]">
                  Designed the modern UI for a banking website utilizing React.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
