import React from "react";

const About: React.FC<{}> = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center h-full relative overflow-hidden pt-[35px] "
      style={{ transform: "scale(0.9" }}
    >
      <div className="flex flex-col  justify-around flex-wrap items-center   max-w-[900px]">
        <h1 className="text-white font-semibold text-6xl">ABOUT ME</h1>
        <br></br>
        <p className="text-gray-300 text-center">
          Passionate Full Stack Developer specializing in React, Next.js, and
          the MERN Stack, with a strong background in JavaScript and TypeScript.
          I thrive on turning creative ideas into interactive and user-friendly
          web applications. With a keen eye for detail and a focus on delivering
          exceptional user experiences, I enjoy working on projects that
          challenge me to grow and expand my skill set.
        </p>
        <br></br>
        <p className="text-gray-300 text-center">
          I excel in building scalable, performance-driven solutions while
          maintaining clean and maintainable code. My expertise extends across
          the entire development lifecycle, from designing intuitive front-end
          interfaces to architecting robust back-end systems. Constantly
          learning and adopting the latest tools and technologies, I strive to
          stay ahead of the curve in the fast-evolving world of web development.
          Collaboration and problem-solving are at the heart of what I do, and
          I’m always eager to contribute to high-impact projects that push the
          boundaries of innovation.
        </p>
      </div>
    </section>
  );
};

export default About;
