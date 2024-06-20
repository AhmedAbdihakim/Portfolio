import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import connectly from "../assets/connectly.png";
import primeFitness from "../assets/prime-fitness.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Connectly",
      description:
        "Developed a social media app using React and Tailwind for Frontend and JsonPlaceholder as API.Check README.md in github for sign in credentials.",
      techStack: ["React", "JavaScript", "TailwindCss"],
      githubLink: "https://github.com/AhmedAbdihakim/Connectly",
      liveLink: "https://ahmedabdihakim.github.io/Connectly/",
      image: connectly,
    },
    {
      id: 2,
      title: "Prime Fitness",
      description: "Designed and built a gym landing website",
      techStack: ["React", "Tailwind CSS", "JavaScript", "HTML5", "CSS3"],
      githubLink: "https://github.com/AhmedAbdihakim/Prime-Fitness",
      liveLink: "https://ahmedabdihakim.github.io/Prime-Fitness/",
      image: primeFitness,
    },
  ];

  return (
    <section id="projects" className="py-16 min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl sm:text-5xl font-bold mb-8 text-center">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <ul className="flex flex-wrap mb-4">
                  {project.techStack.map((tech) => (
                    <li
                      key={tech}
                      className="bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 py-1 px-2 rounded-full text-sm mr-2 mb-2"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
                <div className="flex justify-center">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-900 text-white px-4 py-2 rounded-md mr-4 flex items-center justify-center hover:bg-gray-800 transition duration-300"
                  >
                    <FaGithub className="mr-2" /> GitHub
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center justify-center hover:bg-blue-600 transition duration-300"
                  >
                    <FaExternalLinkAlt className="mr-2" /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
