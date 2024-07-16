import React from "react";

const Experience = () => {
  return (
    <section id="experience" className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl sm:text-5xl font-bold mb-8 text-center">
          Experience
        </h2>
        <div className="bg-cyan-700 shadow-md rounded-lg p-6">
          <h3 className="text-xl font-bold mb-2">
            Internship at NORTH TECH SOLUTION LIMITED
          </h3>
          <p className="text-white mb-4">
            During my internship at NORTH TECH SOLUTION LIMITED, I had the
            opportunity to work on various frontend development projects. I was
            responsible for developing and maintaining React components,
            ensuring they met design specifications and performance
            requirements. Additionally, I collaborated closely with senior
            developers to implement new features and enhancements.
          </p>
          <ul className="text-white list-disc list-inside mb-4">
            <li>
              Developed responsive and accessible user interfaces using HTML,
              CSS, and JavaScript.
            </li>
            <li>
              Integrated API endpoints to fetch and display dynamic data on web
              applications.
            </li>
            <li>
              Participated in daily stand-up meetings to discuss project
              progress and blockers.
            </li>
            <li>
              Performed unit testing and debugging to ensure the quality and
              functionality of code.
            </li>
          </ul>
          <p className="text-white">Duration: September 2023 - March 2024</p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
