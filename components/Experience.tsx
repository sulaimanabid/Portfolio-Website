import React from "react";

const Experience: React.FC<{}> = () => {
  return (
    <section id="experience">
      <h2 className="text-white font-semibold text-center text-6xl pt-[35px]">
        EXPERIENCE
      </h2>
      <div className="container mx-auto 2xl">
        <div className="md:flex md:flex-row md:justify-between pt-5">
          <div className="flex items-center gap-3">
            <p className="text-gray-300">
              <span className="font-semibold">BOTR - HAYAT CONSULTING /</span>{" "}
              Full-Stack Developer
            </p>
          </div>
          <p className="text-gray-300 md:pt-0 pt-3">
            April 2024 - Present
          </p>
        </div>
        <p className="text-gray-300 pt-5">
          Engaged in the development of a dental application, transitioning the
          app from Angular 1 to React JS. Utilizing react2angular and
          angular2react libraries for component migration. Responsible for
          upkeeping the current backend APIs using Django and PostgreSQL.
          Collaborating with AWS to manage the continuous integration and
          deployment (CI/CD) processes. Using JIRA for task management.
        </p>

        <div className="md:flex md:flex-row md:justify-between pt-5">
          <div className="flex items-center gap-3">
            <p className="text-gray-300">
              <span className="font-semibold">WEATHERWALAY /</span> Front-End
              Specialist
            </p>
          </div>
          <p className="text-gray-300 md:pt-0 pt-3">
            Apr 2023 - Dec 2023
          </p>
        </div>
        <p className="text-gray-300 pt-5">
          Worked on the main WW HUB, handling frontend components using React.
          Developed PMD Hub for Pakistan Meteorological Department using React,
          React Query for API handling, and Ant Design for building UI
          components. Worked on GIS-related tasks with React-Leaflet and
          Typescript. Used JIRA for Agile Software Development.
        </p>

        <div className="md:flex md:flex-row md:justify-between pt-5">
          <div className="flex items-center gap-3">
            <p className="text-gray-300">
              <span className="font-semibold">BLOCKMOB LABS /</span> Front-End
              Web3 Developer
            </p>
          </div>
          <p className="text-gray-300 md:pt-0 pt-3">
            Dec 2023 - Apr 2024
          </p>
        </div>
        <p className="text-gray-300 pt-5">
          Worked on Decentralized Apps (DApps), including Piqsol, a multichain
          real-time NFT marketplace built on Next.js 14. Used MUI and
          styled-components for design. Handled Trust Wallet and Metamask
          integration using the web3-react library, and managed smart contract
          integration across Polygon, Ethereum, AVAX, and Binance chains.
        </p>

        <div className="md:flex md:flex-row md:justify-between pt-5">
          <div className="flex items-center gap-3">
            <p className="text-gray-300">
              <span className="font-semibold">INNOVO TECHNOLOGIES /</span>{" "}
              Front-End React Developer
            </p>
          </div>
          <p className="text-gray-300 md:pt-0 pt-3">
            Jul 2022 - Apr 2023
          </p>
        </div>
        <p className="text-gray-300 pt-5">
          Worked on the AQG NOW and Vehicle Wallet projects, handling frontend
          logic and API fetching using React. Managed frontend components with
          Reactstrap and ensured responsiveness. Integrated Google Maps to show
          live vehicle locations and worked with datatables for frontend data
          management, applying client-side and server-side pagination and
          filters. Worked with both class-based and functional components in
          React.
        </p>

        <div className="md:flex md:flex-row md:justify-between pt-5">
          <div className="flex items-center gap-3">
            <p className="text-gray-300">
              <span className="font-semibold">DAXNO TECHNOLOGIES /</span> Junior
              Front-End React Developer
            </p>
          </div>
          <p className="text-gray-300 md:pt-0 pt-3">
            Dec 2021 - Apr 2022
          </p>
        </div>
        <p className="text-gray-300 pt-5">
          Worked on various marketplace and e-commerce websites, creating
          responsive designs and polishing JavaScript skills. Followed a
          component-based approach using React Hooks to build faster web
          applications.
        </p>

        <div className="flex-col flex sm:flex-row flex-wrap gap-2">
          <div className="bg-transparent mt-5 mr-2 cursor-pointer rounded-3xl text-white py-2 px-5 border border-[#2E2E2E] w-max">
            React.js
          </div>
          <div className="bg-transparent mt-5 mr-2 cursor-pointer rounded-3xl text-white py-2 px-5 border border-[#2E2E2E] w-max">
            Next.js
          </div>
          <div className="bg-transparent mt-5 mr-2 cursor-pointer rounded-3xl text-white py-2 px-5 border border-[#2E2E2E] w-max">
            Django
          </div>
          <div className="bg-transparent mt-5 mr-2 cursor-pointer rounded-3xl text-white py-2 px-5 border border-[#2E2E2E] w-max">
            Web3.js
          </div>
          <div className="bg-transparent mt-5 mr-2 cursor-pointer rounded-3xl text-white py-2 px-5 border border-[#2E2E2E] w-max">
            JavaScript
          </div>
          <div className="bg-transparent mt-5 mr-2 cursor-pointer rounded-3xl text-white py-2 px-5 border border-[#2E2E2E] w-max">
            TypeScript
          </div>
          <div className="bg-transparent mt-5 mr-2 cursor-pointer rounded-3xl text-white py-2 px-5 border border-[#2E2E2E] w-max">
            Node
          </div>
          <div className="bg-transparent mt-5 mr-2 cursor-pointer rounded-3xl text-white py-2 px-5 border border-[#2E2E2E] w-max">
            Express
          </div>
          <div className="bg-transparent mt-5 mr-2 cursor-pointer rounded-3xl text-white py-2 px-5 border border-[#2E2E2E] w-max">
            MongoDB / Postgres
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
