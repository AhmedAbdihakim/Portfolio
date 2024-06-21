import React from "react";
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3,
  FaToolbox,
  FaCode,
  FaFileCode,
} from "react-icons/fa";
import { DiResponsive, DiCssdeck } from "react-icons/di";
import { SiRedux, SiTailwindcss, SiBootstrap } from "react-icons/si";

const Skills = () => {
  return (
    <section id="skills" className="py-16 h-screen">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl sm:text-5xl font-bold mb-8 text-center">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-2xl font-bold mb-4">Frontend Development</h3>
            <ul className="list-disc list-inside">
              <li>
                <FaReact className="inline-block mr-2 text-xl" /> React
              </li>
              <li>
                <SiRedux className="inline-block mr-2 text-xl" /> Redux
              </li>
              <li>
                <FaJs className="inline-block mr-2 text-xl" /> JavaScript (ES6+)
              </li>
              <li>
                <FaHtml5 className="inline-block mr-2 text-xl" /> HTML5
              </li>
              <li>
                <FaCss3 className="inline-block mr-2 text-xl" /> CSS3
              </li>
              <li>
                <SiTailwindcss className="inline-block mr-2 text-xl" /> Tailwind
                CSS
              </li>
              <li>
                <SiBootstrap className="inline-block mr-2 text-xl" /> Bootstrap
              </li>
              <li>
                <DiResponsive className="inline-block mr-2 text-xl" />{" "}
                Responsive Design
              </li>
              <li>
                <DiCssdeck className="inline-block mr-2 text-xl" /> UI/UX Design
                Principles
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Tools & Technologies</h3>
            <ul className="list-disc list-inside">
              <li>
                <FaToolbox className="inline-block mr-2 text-xl" /> Git &
                Version Control
              </li>
              <li>
                <FaCode className="inline-block mr-2 text-xl" /> Babel
              </li>
              <li>
                <FaFileCode className="inline-block mr-2 text-xl" /> API
                Integration
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
