import React from "react";

const About = () => {
  return (
    <section id="about" className="h-screen py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl sm:text-5xl font-bold mb-8 text-center">
          About Me
        </h2>
        <div className="text-2xl">
          <p className="mb-4">
            Hi! I'm Ahmed Abdihakim, a passionate frontend developer based in
            London, UK. I specialize in building responsive web applications
            using modern technologies like React. My expertise primarily comes
            from hands-on experience with portfolio projects.
          </p>
          <p className="mb-4">
            Through my portfolio projects, I have gained practical skills in
            frontend development, including creating intuitive user interfaces
            and optimizing web performance. Each project represents my
            dedication to learning and mastering new technologies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
