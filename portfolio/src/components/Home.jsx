import React from "react";
import hero from "../assets/Hero.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Home = () => {
  return (
    <section
      id="home"
      className="sm:bg-gradient-to-r from-transparent to-blue-300 h-screen grid grid-cols-1 sm:grid-cols-2 items-center p-6"
    >
      <div className="order-2 sm:order-1 text-center sm:text-left p-4">
        <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white">
          Hi, I'm Ahmed Abdihakim
        </h1>
        <p className="mt-4 text-xl sm:text-2xl text-gray-700 dark:text-gray-300">
          I'm a frontend developer specializing in React.
        </p>
        <p className="mt-2 text-lg sm:text-xl text-gray-600 dark:text-gray-400">
          I create dynamic and beautiful web applications. Let's build something
          great together.
        </p>
        <button className="mt-6 px-8 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
          <a href="#contact">Contact Me</a>
        </button>
        <div className="flex pt-4 space-x-6">
          <a href="https://github.com/AhmedAbdihakim" className="text-3xl">
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/ahmed-abdihakim02/"
            className="text-3xl"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
      <div className="order-1 sm:order-2  justify-center items-center h-full hidden sm:flex">
        <img
          src={hero}
          alt="Hero"
          className="w-full sm:w-3/4 lg:w-1/2 h-auto rounded-b"
        />
      </div>
    </section>
  );
};

export default Home;
